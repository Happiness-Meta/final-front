import css from "styled-jsx/css";
import { oscillatingAni1, oscillatingAni2 } from "../commonStyles/keyframes";

export const errorMessageAni = {
  ani1: css`
    animation: ${oscillatingAni1} 0.5s;
  `,
  ani2: css`
    animation: ${oscillatingAni2} 0.5s;
  `,
};
