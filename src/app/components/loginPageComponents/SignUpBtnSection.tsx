"use client";
/** @jsxImportSource @emotion/react */
import {
  commonColor,
  flexCenterX2,
} from "@/app/styleComponents/commonStyles/commonStyles";
import Link from "next/link";

const SignUpBtnSection = () => {
  return (
    <div css={[`width: 90%; margin-top: 50px; `]}>
      <p css={[`color:gray; font-size: 14px; margin-bottom: 5px`]}>
        아직 계정이 없으신가요?
      </p>
      <Link
        href={"/pages/signUpPage"}
        css={[
          flexCenterX2,
          `
          width: 100%; 
          height: 50px; 
          border: 1px solid ${commonColor.representative}; 
          border-radius: 5px; 
          background-color:transparent;
          font-size:14px;
          transition: .2s;
          &:hover{
            background-color: ${commonColor.representative};
            font-size: 15px          
          }`,
        ]}
      >
        회원가입
      </Link>
    </div>
  );
};

export default SignUpBtnSection;
