import adTypes from "./ad.types";

const INITIAL_STATE = {
  ads: [],
  adsErr: [],
};

const AdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case adTypes.FETCH_ADS_SUCCESS:
      return { ...state, ads: action.payload };
    case adTypes.AD_ERROR:
      return {
        ...state,
        adErr: action.payload,
      };
    default:
      return state;
  }
};

export default AdReducer;
