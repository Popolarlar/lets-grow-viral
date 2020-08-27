import React from "react";
import {
 Container
} from "@material-ui/core";

const AdList = (props) => {
  return <div className="adList">
    <Container maxWidth="md"> 
    <h1>Hi, this is Ad list</h1>
    <p>Scroll and click to see the ads from local business. Lets help each others to get through this tough time :-)</p>
    </Container>
    </div>;
};

export default AdList;
