import React from "react";
//Components
import Nav from "./Nav";
import HouseLogo from "./HouseLogo";

const BackgroundPhoto = () => {
  return (
    <div className="background-photo">
      <HouseLogo />
      <Nav />
    </div>
  );
}
export default BackgroundPhoto;
