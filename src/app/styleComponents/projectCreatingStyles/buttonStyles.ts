import { commonColor } from "../commonStyles/commonStyles";

export const nextButtonStyle = `
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${commonColor.representative};
  color: white;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    width: 170px;
    border-radius: 25px;
    font-size: 15px;
  }
`;

export const previousButtonStyle = `
  width: 150px;
  height: 40px;
  border: 1px solid ${commonColor.representative};
  border-radius: 10px;
  background-color: transparent;
  color: ${commonColor.representative};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-radius: 25px;
    font-size: 15px;
  }
`;
