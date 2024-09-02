import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchLoanOffersRequest,
  fetchLoanOffersSuccess,
  fetchLoanOffersError,
} from './actions';
import { ILoan } from '@constants/types';

export function* fetchAllLoanOffers({
  payload: { search, store_id },
}: {
  payload: { search: string; store_id: string };
  type: string;
}) {
  try {
    // const response: AxiosResponse<{ offers: ILoan[] }> = yield call(() =>
    //   client.post(
    //     `${apiPaths.PRODUCTS_SEARCH}/${store_id}`,
    //     search && { search }
    //   )
    // );
    // if (response.data.products) {
    // yield put(fetchProductsSuccess({ products: response.data.products }));
    // }
  } catch (err) {
    // showToast({
    //   type: EToastTypes.ERROR,
    //   message: 'An error occurred fetching your products',
    // });
    // yield put(fetchProductsError({ err } as any));
  }
}

export function* watchProductsSagas() {
  yield takeLatest(fetchLoanOffersRequest.type, fetchAllLoanOffers);
}
