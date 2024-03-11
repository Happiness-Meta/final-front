"use client";
/** @jsxImportSource @emotion/react */

import mainHomeImage from "@/app/assets/svg/finalproject-main.svg";
import searchIcon from "@/app/assets/svg/search.svg";
import products from "@/app/assets/svg/products.svg";
import bag from "@/app/assets/svg/bag.svg";
import Image from "next/image";
import {
  mainSearchBar,
  searchBarAndSearchIcon,
  searchIconCss,
  searchButton,
  searchBarAndSearchIcon2,
  jobListUl,
} from "@/app/styleComponents/homePageStyles/HomeSearchBar";
import { commonColor } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  signInUpinputStyle,
  signInUpInputStyleHover,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { useRef, useEffect, useState } from "react";
import useDetectClose from "@/app/hooks/homePageHooks/useDetectClose";
import { JobDropDown } from "./JobDropDown";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";

const HomeSearchBar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [jobIdentify, setJobIdentify] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useDetectClose(dropdownRef, () => setIsOpen(false));
  const [isTechStacksVisible, setIsTechStacksVisible] = useState(false);
  const { techStackContainer, addTechStack, removeTechStack } = useSignUpPageStore();
  const JobList = [
    "풀스택",
    "프론트엔드",
    "백엔드",
    "게임개발",
    "클라우드 아키텍트",
    "소프트웨어 엔지니어",
  ];

  const techStacks = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Redux",
    "Zustand",
    "SCSS",
    "Emotion",
    "StyledComponent",
    "C",
    "C+",
    "C++",
    "C#",
    "Java",
    "Python",
    "Swift",
    "PHP",
    "Ruby",
    "Go",
  ];

  return (
    <>
      <div css={mainSearchBar}>
        <div css={searchBarAndSearchIcon}>
          <Image src={searchIcon} alt="search-icon" css={searchIconCss}></Image>
          <input type="text" placeholder="페인터 검색"></input>
          <div css={searchButton}>검색</div>
        </div>
        <div css={searchBarAndSearchIcon2} ref={dropdownRef}>
          <Image src={products} alt="product-icon" css={searchIconCss}></Image>

          <input
            value={jobIdentify || "직군·직무"}
            type="button"
            placeholder="직군·직무"
            onClick={() => setIsOpen(!isOpen)}
            readOnly
          />
          {isOpen && (
            <ul css={jobListUl}>
              {JobList.map((value, index) => (
                <JobDropDown
                  key={index}
                  value={value}
                  setIsOpen={setIsOpen}
                  setJobIdentify={setJobIdentify}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )}
          <Image src={bag} alt="sclocationicon-icon" css={searchIconCss}></Image>
          <input
            type="text"
            placeholder="기술 스택"
            onFocus={() => setIsTechStacksVisible(true)}
            onBlur={() => setTimeout(() => setIsTechStacksVisible(false), 200)}
          />
          <div
            css={[
              `position: absolute; top: 102%;
            display: ${isTechStacksVisible ? `flex` : `none`};
            flex-direction: column;
            width: 90%; 
            min-height:30px; height: fit-content; max-height: 200px; 
            border: 1px solid gray; border-radius: 7px; 
            background-color: white;
            overflow-y: scroll;
            z-index:1;`,
            ]}
          >
            {techStacks.map((tech, index) => {
              return (
                <div
                  key={index}
                  onClick={() => addTechStack(tech)}
                  css={[
                    `display: flex;
                  align-items: center;
                  width: 100%; 
                  height: 30px; 
                  padding: 10px;
                  padding-left: 25px;
                  border-radius: 5px;
                  &:hover{background-color: #ff8a001a;};`,
                  ]}
                >
                  {tech}
                </div>
              );
            })}
          </div>
          <div
            css={[
              signInUpinputStyle,
              `${signInUpInputStyleHover}; 
          display:flex; align-items: center; gap: 3px;
          height: 35px; padding-left: 3px; overflow-x: scroll;`,
            ]}
          >
            {techStackContainer.map((tech, index) => {
              return (
                <div
                  key={index}
                  onClick={() => removeTechStack(tech)}
                  css={[
                    `
                position: relative;
                width: fit-content; 
                padding: 1px 8px; 
                border: 1px solid ${commonColor.representative};
                border-radius: 5px;
                background-color: #ff8a003b;
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                transition: .3s;
                &:hover {
                  background-color: black;
                }
                &:hover::before {
                  content: "삭제";
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: orange;
                }
                `,
                  ]}
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image src={mainHomeImage} alt="검색창 배경 이미지" width={1200} height={300} />
    </>
  );
};

export default HomeSearchBar;
