import { AxiosResponse } from 'axios';
import { takeLatest, put, call, delay } from 'redux-saga/effects';
import {
  fetchLoanOffersRequest,
  fetchLoanOffersSuccess,
  fetchLoanOffersError,
  applyForLoanRequest,
  applyForLoanSuccess,
  applyForLoanError,
  fetchLoanApplicationsRequest,
  fetchLoanApplicationsSuccess,
  fetchLoanApplicationsError,
} from './actions';
import {
  EToastTypes,
  ILoanApplication,
  ILoanApplicationPayload,
  ILoanProduct,
} from '@constants/types';
import { client } from '@api';
import {
  APPLY_FOR_LOAN_PATH,
  FETCH_ALL_PATH,
  getLoanApplicationsQuery,
  getLoanProducts,
} from '@api/queries';
import { showToast } from '@util';

export function* fetchAllLoanOffers({}: { type: string }) {
  try {
    const response: AxiosResponse<{ data: { loanProducts: ILoanProduct[] } }> =
      yield call(() => client.post(FETCH_ALL_PATH, { query: getLoanProducts }));

    yield delay(2000); //so you see loaders :]
    yield put(
      fetchLoanOffersSuccess({
        ...response.data.data,
      })
    );
  } catch (err) {
    showToast({
      type: EToastTypes.ERROR,
      message: 'An error occurred fetching product data',
    });
    yield put(
      fetchLoanOffersError({ err: 'An error occured getting products data' })
    );
  }
}

export function* fetchAllLoanApplications({}: { type: string }) {
  try {
    const response: AxiosResponse<{
      data: { loanApplications: ILoanApplication[] };
    }> = yield call(() =>
      client.post(FETCH_ALL_PATH, { query: getLoanApplicationsQuery })
    );

    yield delay(2000); //so you see loaders :]
    yield put(
      fetchLoanApplicationsSuccess({
        ...response.data.data,
      })
    );
  } catch (err) {
    showToast({
      type: EToastTypes.ERROR,
      message: 'An error occurred fetching product data',
    });
    yield put(
      fetchLoanApplicationsError({
        err: 'An error occured getting products data',
      })
    );
  }
}

export function* applyForLoan({
  payload,
}: {
  type: string;
  payload: ILoanApplicationPayload;
}) {
  const { onSuccess, onFailure, ...rest } = payload;
  try {
    const response: AxiosResponse<{ message: string }> = yield call(() =>
      client.post(APPLY_FOR_LOAN_PATH, { ...rest })
    );

    yield delay(2000); //no need = just for loaders
    yield put(applyForLoanSuccess());
    onSuccess?.(response.data.message);
  } catch (err) {
    showToast({
      type: EToastTypes.ERROR,
      message: 'An error occurred processing your application',
    });
    yield put(applyForLoanError({ err: 'An error occured.' }));
    onFailure?.('An error occurred processing your application');
  }
}

export function* watchProductsSagas() {
  yield takeLatest(fetchLoanApplicationsRequest.type, fetchAllLoanApplications);
  yield takeLatest(applyForLoanRequest.type, applyForLoan);
  yield takeLatest(fetchLoanOffersRequest.type, fetchAllLoanOffers);
}
