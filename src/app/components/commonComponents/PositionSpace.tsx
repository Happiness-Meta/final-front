"use client";
/** @jsxImportSource @emotion/react */

import { signInUpinputStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { AboutPositionSpace } from "@/app/types/aboutSignInUp";

const PositionSpace: React.FC<AboutPositionSpace> = ({
  handlePutInfo,
  positionList,
}) => {
  return (
    <select
      onChange={(e) => {
        handlePutInfo("position", e.target.value);
      }}
      name="position"
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
