"use client";
/** @jsxImportSource @emotion/react */

import { signInUpinputStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { AboutPositionSpace } from "@/app/types/aboutSignInUp";

const PositionSpace: React.FC<AboutPositionSpace> = ({
  positionRef,
  positionList,
}) => {
  return (
    <select
      ref={positionRef}
      name="희망 포지션"
      css={[signInUpinputStyle, `height: 40px;`]}
    >
      {positionList.map((position, index) => (
        <option key={index} value={position}>
          {position}
        </option>
      ))}
    </select>
  );
};

export default PositionSpace;
