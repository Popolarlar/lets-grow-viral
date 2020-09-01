import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdsStart } from "./../../store/Ad/ad.actions";
import { Grid } from "@material-ui/core";
import Ad from "./../../components/Ad";

const mapState = (state) => ({
  ads: state.ad.ads,
});

const AdList = () => {
  // Globle State
  const dispatch = useDispatch();
  const { ads } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchAdsStart());
  }, []); // []: Only runs on first initial render of this component

  return (
    <Grid container spacing={3}>
      {ads.map((ad, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Ad ad={ad} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AdList;
