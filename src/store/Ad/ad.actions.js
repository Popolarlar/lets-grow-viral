import adTypes from "./ad.types";

export const fetchAdsStart = () => ({
  type: adTypes.FETCH_ADS_START,
});

export const fetchAdsSuccess = (ads) => ({
  type: adTypes.FETCH_ADS_SUCCESS,
  payload: ads,
});

export const addAdStart = (ad) => ({
  type: adTypes.ADD_AD_START,
  payload: ad,
});

export const likeAdStart = (ad) => ({
  type: adTypes.LIKE_AD_START,
  payload: ad,
});

export const commentAdStart = (comment) => ({
  type: adTypes.COMMENT_AD_START,
  payload: comment,
});

export const adError = (error) => ({
  type: adTypes.AD_ERROR,
  payload: error,
});
