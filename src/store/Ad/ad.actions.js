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

export const likeAdStart = (documentID) => ({
  type: adTypes.LIKE_AD_START,
  payload: documentID,
});

export const commentAdStart = (documentID, commentText) => ({
  type: adTypes.COMMENT_AD_START,
  payload: { documentID, commentText },
});

export const deleteAdStart = (documentID) => ({
  type: adTypes.DELETE_AD_START,
  payload: documentID,
});

export const adError = (error) => ({
  type: adTypes.AD_ERROR,
  payload: error,
});
