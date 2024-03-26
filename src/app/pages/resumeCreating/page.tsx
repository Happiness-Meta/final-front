"use client";
/** @jsxImportSource @emotion/react */

import HeaderNo1 from "@/app/components/commonComponents/HeaderNo1";
import {
  commonColor,
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSectionStyle } from "@/app/styleComponents/resumeCreatingStyles/resumeCreatingStyles";
import { css } from "@emotion/react";

const page = () => {
  return (
    <div
      css={[
        flexCenterX2,
        widthHeightFull,
        css`
          flex-direction: column;
          background-color: ${commonColor.mainGray};
        `,
      ]}
    >
      <HeaderNo1 />
      <section
        css={[
          css`
            display: flex;
            flex-direction: column;
            width: 50vw;
            min-width: 450px;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            background-color: white;
          `,
        ]}
      >
        <div
          css={[
            css`
              display: flex;
              justify-content: space-between;
            `,
          ]}
        >
          <div
            css={[
              css`
                flex: 1.5;
                margin-right: 10px;
              `,
            ]}
          >
            <div css={[eachSectionStyle]}>
              <label htmlFor="name" css={labelStyles.style1}>
                이름
              </label>
              <input type="text" css={[]} />
            </div>
            <div css={[eachSectionStyle]}>
              <label htmlFor="phoneNumber" css={labelStyles.style1}>
                전화번호
              </label>
              <input type="number" />
            </div>
            <div css={[eachSectionStyle]}>
              <label htmlFor="선호 포지션" css={labelStyles.style1}>
                직업 포지션
              </label>
              <p>`데이터값`</p>
            </div>
          </div>
          <div
            css={[
              css`
                flex: 1;
                border: 1px dotted gray;
                overflow: hidden;
              `,
            ]}
          >
            <div>이미지 섹션</div>
            <input type="file" />
          </div>
        </div>
        <div css={[eachSectionStyle]}>
          <label htmlFor="aboutMe" css={labelStyles.style1}>
            자기소개
          </label>
          <textarea id="aboutMe" rows={8}></textarea>
        </div>
      </section>
    </div>
  );
};

export default page;
