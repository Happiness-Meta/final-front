"use client";

import ProjectMenu from "@/app/components/commonComponents/Projectmenu";
import {
  headerContainerStyle,
  homeButtonContainer,
} from "@/app/styleComponents/homePageStyles/HomePageStyles";

const cancelMembership = () => {
  return (
    <>
      <header css={headerContainerStyle}>
        <ProjectMenu />
        <div css={homeButtonContainer}></div>
      </header>
    </>
  );
};

export default cancelMembership;
