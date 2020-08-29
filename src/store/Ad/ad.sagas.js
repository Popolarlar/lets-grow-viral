import { takeLatest, call, all, put } from "redux-saga/effects";
import adTypes from "./ad.types";
import { fetchAdsSuccess, fetchAdsStart, adError } from "./ad.actions";
import {
  handleAddAd,
  handleFetchAds,
  handleLikeAd,
  handleCommentAd,
} from "./ad.helpers";

// Fetch all ads
export function* fetchAds() {
  try {
    const ads = yield call(handleFetchAds);
    yield put(fetchAdsSuccess(ads));
  } catch (error) {
    console.log(error);
  }
}
export function* onFetchAdsStart() {
  yield takeLatest(adTypes.FETCH_ADS_START, fetchAds);
}

// Add a new ad
export function* addAdStart({ payload: { adTitle, adDesc, adUrl } }) {
  try {
    const timestamp = new Date();
    yield handleAddAd({
      adTitle,
      adDesc,
      adUrl,
      createdDate: timestamp,
      like: 0,
      comments: [],
    });
    yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onAddAdStart() {
  yield takeLatest(adTypes.ADD_AD_START, addAdStart);
}

// Like an ad
export function* likeAdStart({ payload: documentID }) {
  try {
    yield call(handleLikeAd, documentID);
    yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onLikeAdStart() {
  yield takeLatest(adTypes.LIKE_AD_START, likeAdStart);
}

// Comment on an ad
export function* commentAdStart({ payload: { documentID, commentText } }) {
  try {
    console.log("Saga: ", documentID, commentText);

    const timestamp = new Date();
    const comment = { commentText, commentDate: timestamp };
    yield handleCommentAd(documentID, comment);

    yield put(fetchAdsStart());
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
