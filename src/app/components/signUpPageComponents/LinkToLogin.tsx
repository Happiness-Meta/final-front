"use client";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React from "react";

const LinkToLogin = () => {
  return (
    <Link
      href={"/pages/loginPage"}
      css={[
        flexCenterX2,
        `margin-top: 10px; color: gray; font-size:13px; &:hover{color: black;}`,
      ]}
    >
      계정이 있으신가요?
    </Link>
  );
};

export default LinkToLogin;
