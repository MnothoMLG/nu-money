import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchLoanOffersRequest,
  fetchLoanOffersSuccess,
  fetchLoanOffersError,
} from './actions';
import { ILoanProduct } from '@constants/types';
import { client } from '@api/index';
import { FETCH_ALL_PATH, getLoanProducts } from '@api/queries';

export function* fetchAllLoanOffers({}: { type: string }) {
  try {
    console.log("let's try get these ====>");
    const response: AxiosResponse<{ data: { loanProducts: ILoanProduct[] } }> =
      yield call(() => client.post(FETCH_ALL_PATH, { query: getLoanProducts }));

    console.log('fetch response ====>', JSON.stringify({ response }));
    // if (response.data.products) {
    yield put(
      fetchLoanOffersSuccess({
        ...response.data.data,
      })
    );
    // }r
  } catch (err) {
    // showToast({
    //   type: EToastTypes.ERROR,
    //   message: 'An error occurred fetching your products',
    // });

    console.log('Fething error ====> ', JSON.stringify({ err }));
    yield put(
      fetchLoanOffersError({ err: 'An error occured getting products data' })
    );
  }
}

export function* watchProductsSagas() {
  yield takeLatest(fetchLoanOffersRequest.type, fetchAllLoanOffers);
}
