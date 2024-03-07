"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import visibility from "/public/svg/visibility.svg";
import visibility_off from "/public/svg/visibility_off.svg";
import { AboutVisibilityEyes } from "../../types/aboutSignInUp";

const VisibilityEyes: React.FC<AboutVisibilityEyes> = ({
  isPwVisible,
  setIsPwVisible,
}) => {
  return (
    <Image
      src={isPwVisible ? visibility_off : visibility}
      alt="visibility"
      onClick={() => setIsPwVisible(!isPwVisible)}
      css={[
        `position: absolute; 
        top: 50%; right: 30px; 
        transform: translateY(-50%); 
        padding: 5px;
        border-radius:50%;
        cursor: pointer;
        &:hover {
          border: 1px solid orange;
        }
        `,
      ]}
      width={30}
      height={30}
    />
  );
};

export default VisibilityEyes;
