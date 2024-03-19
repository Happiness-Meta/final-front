import { css } from "@emotion/react";
import { fromOpacityWidth0, templateAni } from "../commonStyles/keyframes";
import { commonColor } from "../commonStyles/commonStyles";

export const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const sectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 50vw;
  min-width: 333px;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  margin: 15px 0;
  background-color: #ffffff99;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 10px gray;
  z-index: 1;
  opacity: 0;
  animation: ${templateAni} 1s 1s forwards;
`;

export const labelStyles = {
  style1: css`
    padding-left: 5px;
    font-size: 1.3em;
    font-weight: bold;
  `,
  style2: css`
    padding-left: 5px;
    font-size: 1.1em;
    font-weight: bold;
  `,
};

export const inputContainerStyles = {
  style1: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  `,
  style2: css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
  `,
  style3: css`
    display: flex;
    justify-content: center;
    align-items: start;
    row-gap: 5px;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 5px;
  `,
};

const commonInputStyle = css`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
  transition: 0.2s;
`;

export const inputStyles = {
  style1: css`
    width: 100%;
    ${commonInputStyle}
    &:focus {
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style2: css`
    width: 45%;
    ${commonInputStyle}
    text-align: center;
    &:focus {
      width: 47%;
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style3: css`
    width: 40px;
    ${commonInputStyle}
    text-align: center;
    &:focus {
      width: 8%;
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style4: css`
    width: 89%;
    ${commonInputStyle}
    &:focus {
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style5: css`
    width: 10%;
    min-width: 55px;
    ${commonInputStyle}
    text-align: center;
    font-weight: bold;
    &:focus {
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style6: css`
    width: 20%;
    ${commonInputStyle}
    text-align: center;
    font-weight: bold;
    &:focus {
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
  style7: css`
    width: 79%;
    ${commonInputStyle}
    text-align: center;
    font-weight: bold;
    &:focus {
      border-color: ${commonColor.representative};
      border-radius: 20px;
    }
  `,
};

export const textareaStyle1 = css`
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1em;
  transition: 0.2s;
  resize: none;
  &:focus {
    border-radius: 10px;
    border-color: ${commonColor.representative};
  }
`;

export const addButtonStyle = css`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #0000000d;
  font-size: 1.3em;
  transition: 0.2s;
  &:hover,
  &:active {
    outline: 3px solid white;
    border-radius: 20px;
    background-color: ${commonColor.representative};
    color: white;
    font-size: 1.7em;
  }
`;

export const createButtonStyle = css`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #00b000c2;
  color: white;
  font-size: 1em;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    height: 50px;
    background-color: #00b000;
  }
`;

export const deleteButtonStyle = css`
  width: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: transparent;
  overflow: hidden;
  animation: ${fromOpacityWidth0} 0.5s;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${commonColor.representative};
  }
`;

export const templateBottomStyle = css`
  width: 100%;
  height: 50px;
  margin-top: 30px;
`;
