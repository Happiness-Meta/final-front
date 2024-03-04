"use client";
/** @jsxImportSource @emotion/react */
import { linkButtonStyle } from "@/app/page";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <p>LoginPage</p>
      <Link href={"/"} css={[flexCenterX2, linkButtonStyle]}>
        Home
      </Link>
    </div>
  );
};

export default LoginPage;
