"use client";
/** @jsxImportSource @emotion/react */

import { handleSearchTechStacks } from "@/app/hooks/signUpPageHooks/useHandleSearchTechStacks";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import Image from "next/image";
import search from "@/app/assets/svg/search.svg";
import {
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { AboutTechStackSpace } from "@/app/types/aboutSignInUp";
import {
  searchedListStyle,
  stackInContainerStyle,
} from "@/app/styleComponents/signUpPageStyles/techStackStyles";

const TechStackSpace: React.FC<AboutTechStackSpace> = ({
  searchTechStackRef,
  techStackList,
  setSearchedList,
  isTechStacksVisible,
  setIsTechStacksVisible,
  searchedList,
}) => {
  const { techStackContainer, addTechStack, removeTechStack } =
    useSignUpPageStore();
  return (
    <>
      <div css={[flexCenterX2, `position: relative; width:100%;`]}>
        <Image
          src={search}
          alt="search"
          width={15}
          height={15}
          css={[
            `position: absolute; top:50%; left: 30px; transform: translateY(-50%);`,
          ]}
        />
        <input
          ref={searchTechStackRef}
          placeholder="기술 스택(선택) : 최대 15개"
          onChange={() =>
            handleSearchTechStacks({
              searchTechStackRef,
              techStackList,
              setSearchedList,
            })
          }
          onFocus={() => setIsTechStacksVisible(true)}
          onBlur={() => setTimeout(() => setIsTechStacksVisible(false), 200)}
          css={[
            signInUpinputStyle,
            `${signInUpInputStyleHover}; height: 40px; padding-left: 30px`,
          ]}
        />
        <div
          css={[
            `position: absolute; top: 102%;
              display: ${isTechStacksVisible ? `flex` : `none`};
              flex-direction: column;
              width: 92%; 
              min-height:30px; height: fit-content; max-height: 200px; 
              border: 1px solid gray; border-radius: 7px; 
              background-color: white;
              overflow-y: scroll;
              z-index:1;`,
          ]}
        >
          {searchedList.map((tech: string, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  addTechStack(tech);
                  searchTechStackRef.current!.value = "";
                }}
                css={searchedListStyle}
              >
                {tech}
              </div>
            );
          })}
        </div>
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
              css={stackInContainerStyle}
            >
              {tech}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechStackSpace;
