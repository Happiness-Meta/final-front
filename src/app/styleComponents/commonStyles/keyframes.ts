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
