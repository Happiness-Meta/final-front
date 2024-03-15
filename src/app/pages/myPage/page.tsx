"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";

// libararies
import React, { RefObject, useEffect, useRef, useState } from "react";

//components
import ProjectTitle from "@/app/components/myPageComponents/myPageProjectTitle";

//img
import Email from "@/app/assets/svg/Message_light.svg";
import Coding from "@/app/assets/get_up_and_coding.jpg";
import search from "@/app/assets/svg/search.svg";

//css
import { Container } from "@/app/styleComponents/myPageStyles/myPageStyles";
import {
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";

//constans
import { techStackList } from "@/app/constants/techStacks";

//custom hooks
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  searchedListStyle,
  stackInContainerStyle,
} from "@/app/styleComponents/signUpPageStyles/techStackStyles";
import { handleSearchTechStacks } from "@/app/hooks/signUpPageHooks/useHandleSearchTechStacks";

const MyPage = () => {
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  // 검색 단어
  const [searchedList, setSearchedList] = useState<string[]>(techStackList);
  // 선택 창 컨트롤
  const [isTechStacksVisible, setIsTechStacksVisible] =
    useState<boolean>(false);
  // 유저 정보
  const [userData, setUserData] = useState<string[]>([]);

  const { techStackContainer, addTechStack, removeTechStack } =
    useSignUpPageStore();

  useEffect(() => {
    // console.log("isTechStacksVisible: ", isTechStacksVisible);
  }, [isTechStacksVisible]);
  return (
    <div>
      <ProjectTitle />
      <div css={Container}>
        <div className="tinyContainer">
          <div className="container">
            <Image className="profile" src={Coding} alt="아바타 사진" />
            <div className="userDataContainer">
              <div className="userContainer">
                <div className="userNickname">닉네임</div>
              </div>
              <div className="usercontact">
                <div className="rowContainer">
                  <Image className="userEmail" src={Email} alt="이메일" />
                  <div className="Email">exmaple@example.com</div>
                </div>
                <select
                  name="희망 포지션"
                  css={[signInUpinputStyle, `width: 17vw`]}
                >
                  <option value="null">희망 포지션</option>
                  <option value="풀스택">풀스택</option>
                  <option value="프론트엔드">프론트엔드</option>
                  <option value="백엔드">백엔드</option>
                  <option value="클라우드 아키텍트">클라우드 아키텍트</option>
                  <option value="소프트웨어 엔지니어">
                    소프트웨어 엔지니어
                  </option>
                </select>

                <div className="skillContainer">
                  <div className="skillStackContainer">
                    <input
                      ref={searchTechStackRef}
                      placeholder="기술 스택 : 최대 15개"
                      onChange={() =>
                        handleSearchTechStacks({
                          searchTechStackRef,
                          techStackList,
                          setSearchedList,
                        })
                      }
                      onFocus={() => setIsTechStacksVisible(true)}
                      onBlur={() =>
                        setTimeout(() => setIsTechStacksVisible(false), 200)
                      }
                      css={[
                        signInUpinputStyle,
                        ` paddingLeft: 0.3rem; border: none; width: 93%`,
                      ]}
                    />
                    <Image
                      src={search}
                      alt="search"
                      width={15}
                      height={15}
                      css={[]}
                    />
                  </div>
                </div>
                <div
                  css={[
                    `
                      display: ${isTechStacksVisible ? `flex` : `none`};
                      flex-direction: column;
                      min-height:30px; 
                      height: fit-content;
                      max-height: 100px; 
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
                        onClick={() => addTechStack(tech)}
                        css={searchedListStyle}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div
                  css={[
                    `${signInUpInputStyleHover}; 
                    width: 17vw;
                    height: 50px;
                    display:flex; 
                    align-items: center; 
                    padding: 10px;
                    border: 1px solid gray;
                    borderRadius: 5px;
                    fontSize: 16px;
                    transition: .2s;
                    padding-left: 3px;
                    overflow-x: scroll;
                    marginTop: 0.5rem;`,
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
              </div>
              {/* 유저 데이터 컨테이너 끝 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
