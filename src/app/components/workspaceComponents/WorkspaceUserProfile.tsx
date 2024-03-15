"use client";
/** @jsxImportSource @emotion/react */

// css
import Image from "next/image";
import {
  ProfileContainer,
  UserProfileImg,
  UserDataContainer,
  userName,
  email,
} from "@/app/styleComponents/workspaceStyles/profileStylese";

// img
import profilePicture from "@/app/assets/svg/profilePicture.svg";

const WorkspaceUserProfile = () => {
  return (
    <div css={ProfileContainer}>
      <Image css={UserProfileImg} src={profilePicture} alt="이미지" />
      <div
        css={[
          UserDataContainer,
          `
        flex-direction: column;
      `,
        ]}
      >
        <div css={userName}>GuestName</div>
        <div css={email}>guestemail001@gmail.com</div>
      </div>
    </div>
  );
};

export default WorkspaceUserProfile;
