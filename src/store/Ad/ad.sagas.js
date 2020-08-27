import { takeLatest, call, all, put } from "redux-saga/effects";
import adTypes from "./ad.types";
import { fetchAdsSuccess, adError } from "./ad.actions";

// Fetch all ads
export function* fetchAds() {
  try {
    console.log("Fetch records from db");
    console.log("Update state");
    // yield put(fetchAdsSuccess(ads));
  } catch (error) {
    console.log(error);
  }
}
export function* onFetchAdsStart() {
  yield takeLatest(adTypes.FETCH_ADS_START, fetchAds);
}

// Add a new ad
export function* addAdStart() {
  try {
    console.log("Add a new record to db");
    console.log("Update state");
    // yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onAddAdStart() {
  yield takeLatest(adTypes.ADD_AD_START, addAdStart);
}

// Like an ad
export function* likeAdStart() {
  try {
    console.log("Update a record to db");
    console.log("Update state");
    // yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onLikeAdStart() {
  yield takeLatest(adTypes.LIKE_AD_START, likeAdStart);
}

// Comment on an ad
export function* commentAdStart() {
  try {
    console.log("Update a record to db");
    console.log("Update state");
    // yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onCommentAdStart() {
  yield takeLatest(adTypes.COMMENT_AD_START, commentAdStart);
}

// All : resolve all effects in parallel
export default function* adSagas() {
  yield all([
    call(onFetchAdsStart),
    call(onAddAdStart),
    call(onLikeAdStart),
    call(onCommentAdStart),
  ]);
}
