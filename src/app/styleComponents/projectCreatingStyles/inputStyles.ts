import { commonColor } from "../commonStyles/commonStyles";

export const projectNnDInputStyle = `
  width: 40%;
  min-width: 400px;
  height: 50px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2em;
  transition: 0.2s;
  &:focus {
    width: 42%;
    border-color: ${commonColor.representative};
    border-radius: 25px;
  }
`;

export const periodInputStyle = `
  width: 230px;
  height:40px; 
  padding: 10px;
  border: 1px solid gray; 
  border-radius:10px; 
  text-align: center;
  font-size: 1.1em;
  transition: 0.2s;
  &:focus {
    width: 250px;
    border-color: ${commonColor.representative};
    border-radius: 20px;
  }
`;

export const personnelInputStyle = `
  width:40px; 
  height: 50px; 
  border: 1px solid gray; 
  border-radius: 10px; 
  text-align: center; 
  font-size: 2em; 
  &:focus{border-color: orange}
`;
