import { keyframes } from "@emotion/react";

export const oscillatingAni1 = keyframes`
0% {
  transform: translateX(0px);
}
15% {
  transform: translateX(-1px);
}
30% {
  transform: translateX(1px);
}
45% {
  transform: translateX(-1px);
}
60% {
  transform: translateX(1px);
}
80% {
  transform: translateX(-1px);
}
100% {
  transform: translateX(0px);
}
`;

export const oscillatingAni2 = keyframes`
0% {
transform: translateX(0px);
}
15% {
transform: translateX(-1px);
}
30% {
transform: translateX(1px);
}
45% {
transform: translateX(-1px);
}
60% {
transform: translateX(1px);
}
80% {
transform: translateX(-1px);
}
100% {
transform: translateX(0px);
}
`;

export const showUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(20px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`;

export const showUp2 = keyframes`
0% {
  opacity: 0;
  transform: translateY(15px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`;

export const paintAni = keyframes`
0% {
  width: 0;
  height: 0;
  border-bottom-left-radius: 50vw;
}
100% {
  width: 100%;
  height: 100%;
}
`;

export const templateAni = keyframes`
0% {
  opacity: 0;
  width: 0;
  padding: 80px 0;
}
100% {
  opacity: 1;
}
`;

export const fromOpacityWidth0 = keyframes`
0% {
  opacity: 0;
  width: 0;
}
`;

export const aniForImportant = keyframes`
100%{
    width: 200px;
}
`;
