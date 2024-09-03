import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchLoanOffersRequest,
  fetchLoanOffersSuccess,
  fetchLoanOffersError,
  applyForLoanRequest,
  applyForLoanSuccess,
  applyForLoanError,
} from './actions';
import {
  EToastTypes,
  ILoanApplicationPayload,
  ILoanProduct,
} from '@constants/types';
import { client } from '@api';
import {
  APPLY_FOR_LOAN_PATH,
  FETCH_ALL_PATH,
  getLoanProducts,
  sendLoanApplicationQuery,
} from '@api/queries';
import { showToast } from '@util';

export function* fetchAllLoanOffers({}: { type: string }) {
  try {
    console.log("let's try get these ====>");
    const response: AxiosResponse<{ data: { loanProducts: ILoanProduct[] } }> =
      yield call(() => client.post(FETCH_ALL_PATH, { query: getLoanProducts }));

    console.log('fetch response ====>', JSON.stringify({ response }));
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

export function* applyForLoan({
  payload,
}: {
  type: string;
  payload: ILoanApplicationPayload;
}) {
  try {
    console.log("let's try apply  ====>", { payload });
    const response: AxiosResponse<{ data: { loanProducts: ILoanProduct[] } }> =
      yield call(() =>
        client.post(APPLY_FOR_LOAN_PATH, { query: sendLoanApplicationQuery })
      );

    console.log('APPLICSTION response ====>', JSON.stringify({ response }));
    yield put(applyForLoanSuccess());
  } catch (err) {
    showToast({
      type: EToastTypes.ERROR,
      message: 'An error occurred processing your application',
    });

    console.log('Application error ', JSON.stringify({ err }));
    yield put(applyForLoanError({ err: 'An error occured.' }));
  }
}

export function* watchProductsSagas() {
  yield takeLatest(applyForLoanRequest.type, applyForLoan);
  yield takeLatest(fetchLoanOffersRequest.type, fetchAllLoanOffers);
}
