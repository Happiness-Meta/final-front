"use client";
/** @jsxImportSource @emotion/react */

import { handleSearchTechStacks } from "@/app/hooks/signUpPageHooks/useHandleSearchTechStacks";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import Image from "next/image";
import search from "@/app/assets/svg/search.svg";
import { techStackList } from "@/app/constants/techStacks";
import {
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  searchedListStyle,
  stackInContainerStyle,
} from "@/app/styleComponents/signUpPageStyles/techStackStyles";
import { AboutTechStackSpace } from "@/app/types/aboutCommonComponents";
import { useEffect, useState } from "react";
import {
  searchImageStyle,
  techStackContainerStyle,
  techStackExampleStyle,
} from "@/app/styleComponents/commonStyles/techStackSpaceStyles";
import { css } from "@emotion/react";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { toHeight0 } from "@/app/styleComponents/commonStyles/keyframes";

const TechStackSpace: React.FC<AboutTechStackSpace> = ({
  searchTechStackRef,
}) => {
  const { techStackContainer, addTechStack, removeTechStack } =
    useSignUpPageStore();
  const { setGuideMessage } = useProjectTemplateStore();

  const [isTechStacksVisible, setIsTechStacksVisible] = useState(false);
  const [searchedList, setSearchedList] = useState<string[]>([]);

  useEffect(() => {
    setSearchedList(techStackList);
  }, []);

  return (
    <>
      <div css={[flexCenterX2, `position: relative; width:100%;`]}>
        <Image
          src={search}
          alt="search"
          width={15}
          height={15}
          css={[searchImageStyle]}
        />
        <input
          ref={searchTechStackRef}
          placeholder="기술 스택 : 최대 15개"
          onChange={(e) =>
            handleSearchTechStacks({
              searchTechStackRef,
              techStackList,
              setSearchedList,
            })
          }
          onFocus={() => {
            setIsTechStacksVisible(true);
            setGuideMessage("기술스택을 선택해주세요.");
          }}
          onBlur={() => setTimeout(() => setIsTechStacksVisible(false), 100)}
          css={[
            signInUpinputStyle,
            signInUpInputStyleHover,
            css`
              height: 40px;
              padding-left: 30px;
            `,
          ]}
        />
        <div
          css={[
            techStackExampleStyle,
            css`
              animation: ${!isTechStacksVisible && toHeight0} 0.3s forwards;
            `,
          ]}
        >
          {searchedList.map((tech: string, index: number) => {
            return (
              <div
                key={index}
                onMouseDown={() => {
                  addTechStack(tech);
                  searchTechStackRef.current!.value = "";
                }}
                css={searchedListStyle}
              >
                {tech}
              </div>
            );
          })}
          {searchedList.length < 1 && (
            <p css={[searchedListStyle]}>해당 기술스택이 없습니다.</p>
          )}
        </div>
      </div>
      <div css={[techStackContainerStyle]}>
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
