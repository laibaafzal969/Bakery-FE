import React from "react";
import Popup from "reactjs-popup";

const CreditPopup = ({ credit }) => {
  return (
    <Popup
      trigger={<button className="btn btn-outline-info btn-sm">i</button>}
      position="left center"
    >
      <div className="text-wrap">{credit}</div>
    </Popup>
  );
};

export default CreditPopup;
