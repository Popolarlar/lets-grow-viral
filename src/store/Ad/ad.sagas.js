import { takeLatest, call, all, put } from "redux-saga/effects";
import adTypes from "./ad.types";
import { fetchAdsSuccess, fetchAdsStart } from "./ad.actions";
import {
  handleAddAd,
  handleFetchAds,
  handleLikeAd,
  handleCommentAd,
  handleDeleteAd,
  handleFetchAdsByLike,
  handleFileUpload,
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

// Sort all ads by new
export function* SortAdsByLike() {
  try {
    const ads = yield call(handleFetchAdsByLike);
    yield put(fetchAdsSuccess(ads));
  } catch (error) {
    console.log(error);
  }
}
export function* onSortAdsByLikeStart() {
  yield takeLatest(adTypes.SORT_ADS_BY_LIKE_START, SortAdsByLike);
}

// Add a new ad
export function* addAd({ payload: { adTitle, adDesc, adUrl, adFile } }) {
  try {
    const downloadURL = adFile ? yield call(handleFileUpload, adFile) : "";

    const timestamp = new Date();
    yield handleAddAd({
      adTitle,
      adDesc,
      adUrl,
      adLink: downloadURL,
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
  yield takeLatest(adTypes.ADD_AD_START, addAd);
}

// Like an ad
export function* likeAd({ payload: documentID }) {
  try {
    yield call(handleLikeAd, documentID);
    yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onLikeAdStart() {
  yield takeLatest(adTypes.LIKE_AD_START, likeAd);
}

// Comment on an ad
export function* commentAd({ payload: { documentID, commentText } }) {
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
  yield takeLatest(adTypes.COMMENT_AD_START, commentAd);
}

// Delete an ad
export function* deleteAd({ payload: documentID }) {
  try {
    yield call(handleDeleteAd, documentID);
    yield put(fetchAdsStart());
  } catch (error) {
    console.error(error);
  }
}
export function* onDeleteAdStart() {
  yield takeLatest(adTypes.DELETE_AD_START, deleteAd);
}

// All : resolve all effects in parallel
export default function* adSagas() {
  yield all([
    call(onFetchAdsStart),
    call(onAddAdStart),
    call(onLikeAdStart),
    call(onCommentAdStart),
    call(onDeleteAdStart),
  ]);
}
