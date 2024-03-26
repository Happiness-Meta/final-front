/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

// libararies
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";

//components
import ProjectTitle from "@/app/components/myPageComponents/myPageProjectTitle";
import PositionSpace from "@/app/components/commonComponents/PositionSpace";

// constants
import { preferedPositionList } from "@/app/constants/industryOptions";
import { industryList } from "@/app/constants/industryOptions";

//img
import Email from "@/app/assets/svg/mail.svg";
import Profile from "@/app/assets/svg/profilePicture.svg";
import Edit from "@/app/assets/svg/Edit.svg";
import background from "@/app/assets/svg/myPageBackground.svg";
import Address from "@/app/assets/svg/Address.svg";
import PhoneNumber from "@/app/assets/svg/phone.svg";

//css
import {
  Container,
  tinyContainer,
  container,
  profile,
  userDataContainer,
  userNickname,
  rowContainer,
  techStacks,
  userField,
  backgroundImg,
  inputContainer,
  input,
  okButton,
  dataContainer,
} from "@/app/styleComponents/myPageStyles/myPageStyles";

//types
import { myInfo, companyInfo } from "@/app/types/aboutMypage";
import { AboutInfoForIndiSignUp } from "@/app/types/aboutSignInUp";
import { AboutSignUpInputs } from "@/app/types/aboutSignInUp";

// custom hooks
import userAxiosWithAuth from "@/app/utils/useAxiosWithAuth";
import TechStackSpace from "@/app/components/commonComponents/TechStackSpace";

const MyPage = () => {
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [infoForSignUp, setInfoForSignUp] = useState<AboutInfoForIndiSignUp>({
    email: "",
    name: "",
    password: "",
    position: "희망포지션",
  });

  const { techStackContainer, addTechStack } = useSignUpPageStore();
  // 유저 정보
  const [userData, setUserData] = useState<myInfo>();

  // 회사 정보
  const [companyData, setCompanyData] = useState([]);

  // edit boolean
  const [isEdit, setIsEdit] = useState(false);

  // get user data
  // const getData = async () => {
  //   const data = useGetData(setUserData);
  //   data();
  // };

  // get user data 2
  const getDatas = async () => {
    try {
      const response = await userAxiosWithAuth.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/user"
      );
      console.log(response);
      setUserData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // get company data
  // const getCompanyData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:3001/myPageCompanyData"
  //     );
  //     setCompanyData(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const guideForPosition = "희망하시는 포지션을";
  const guideForIndustry = "산업 분야를";

  // 값 넣기
  const handlePutInfo = (sort: string, value: string) => {
    setInfoForSignUp((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  const editData = () => {
    setIsEdit(!isEdit);
    userData?.techStack.map((item) => {
      addTechStack(item);
    });
  };

  useEffect(() => {
    getDatas();
    // getCompanyData();
  }, []);

  useEffect(() => {
    console.log("userData: ", userData);
    console.log("companyData: ", companyData);
    console.log("isEdit: ", isEdit);
  }, [userData, companyData, isEdit]);

  return (
    <div>
      <ProjectTitle />
      <div
        css={[
          Container,
          `
        flex-direction: column;
      `,
        ]}
      >
        <div
          css={[
            tinyContainer,
            `
        flex-direction: column;
      `,
          ]}
        >
          <div
            css={[
              container,
              `
            flex-direction: row;
          `,
            ]}
          >
            <Image css={[profile]} src={Profile} alt="아바타 사진" />
            <div
              css={[
                userDataContainer,
                `
              flex-direction: column;
            `,
              ]}
            >
              {/* 닉네임 변경 가능으로 수정하기 */}
              {/* 유저 데이터 */}
              {userData?.industry ? (
                <div>
                  <div
                    css={[
                      `
                      width: 100%;
                      text-align: end;
                    `,
                    ]}
                  >
                    {isEdit === false ? (
                      <Image
                        src={Edit}
                        alt="편집"
                        width={30}
                        height={30}
                        onClick={editData}
                      />
                    ) : (
                      <button css={okButton} onClick={editData}>
                        수정
                      </button>
                    )}
                  </div>
                  <div>
                    <div css={[userNickname]}>{userData?.name}</div>
                  </div>
                  {isEdit === true ? (
                    <div>
                      <div
                        css={[
                          rowContainer,
                          `
                          flex-direction: column;
                        `,
                        ]}
                      >
                        <div
                          css={[
                            inputContainer,
                            `
                                flex-direction: row;
                            `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={Email}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <input
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                            placeholder={userData?.email}
                          />
                        </div>
                        <PositionSpace
                          handlePutInfo={handlePutInfo}
                          positionList={preferedPositionList}
                          textForGuide={guideForPosition}
                        />
                        <TechStackSpace
                          searchTechStackRef={searchTechStackRef}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        css={[
                          rowContainer,
                          `
                    flex-direction: row;
                    margin-bottom: 1rem;
                  `,
                        ]}
                      >
                        <Image
                          css={[
                            `
                      margin-right: 0.5rem;
                      
                    `,
                          ]}
                          src={Email}
                          alt="이메일"
                          width={25}
                          height={25}
                        />
                        <div>{userData?.email}</div>
                      </div>
                      <h3 css={[userField]}>
                        {userData?.position === null
                          ? "포지션이 없습니다."
                          : userData?.position}
                      </h3>
                      <div
                        css={[
                          `
                        display:flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                      `,
                        ]}
                      >
                        {userData?.techStack.map((item, i: number) => (
                          <div
                            css={[
                              techStacks,
                              `
                          text-align: center;
                        `,
                            ]}
                            key={i}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div
                    css={[
                      `
                      width: 100%;
                      text-align: end;
                    `,
                    ]}
                  >
                    {isEdit === false ? (
                      <Image
                        src={Edit}
                        alt="편집"
                        width={30}
                        height={30}
                        onClick={editData}
                      />
                    ) : (
                      <button css={okButton} onClick={editData}>
                        수정
                      </button>
                    )}
                  </div>
                  <div>
                    <div css={[userNickname]}>{userData?.name}</div>
                  </div>
                  {isEdit === true ? (
                    <div>
                      <div
                        css={[
                          rowContainer,
                          `
                        flex-direction: column;
                      `,
                        ]}
                      >
                        <div
                          css={[
                            inputContainer,
                            `
                          flex-direction: row;
                          border: none;
                          justify-content: center;
                        `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={Email}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <div
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                          >
                            {userData?.email}
                          </div>
                        </div>
                        <div
                          css={[
                            inputContainer,
                            `
                          flex-direction: row;
                        `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={PhoneNumber}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <input
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                            placeholder={userData?.telephone}
                          />
                        </div>
                        <div
                          css={[
                            inputContainer,
                            `
                          flex-direction: row;
                        `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={Address}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <input
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                            placeholder={
                              userData?.address
                                ? userData?.address
                                : "주소가 없습니다"
                            }
                          />
                        </div>
                        <PositionSpace
                          handlePutInfo={handlePutInfo}
                          positionList={industryList}
                          textForGuide={guideForIndustry}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        css={[
                          rowContainer,
                          `
                          flex-direction: column;
                        `,
                        ]}
                      >
                        <div
                          css={[
                            inputContainer,
                            `
                            border: none;
                          `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                              margin-left: 0.3rem;
                              `,
                            ]}
                            src={Email}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <div
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                          >
                            {userData?.email}
                          </div>
                        </div>
                        <div
                          css={[
                            inputContainer,
                            `
                          border: none;
                        `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={PhoneNumber}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <div
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                          >
                            {userData?.telephone}
                          </div>
                        </div>
                        <div
                          css={[
                            inputContainer,
                            `
                          flex-direction: row;
                          border: none;
                        `,
                          ]}
                        >
                          <Image
                            css={[
                              `
                                margin-left: 0.3rem;
                              `,
                            ]}
                            src={Address}
                            alt="메일"
                            width={25}
                            height={25}
                          />
                          <div
                            css={[
                              input,
                              `
                              border: none;
                              &:focus {
                                outline: none;
                              }
                            `,
                            ]}
                          >
                            {userData?.address
                              ? userData?.address
                              : "주소가 없습니다"}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Image
              css={[
                backgroundImg,
                `
              position: absolute;
            `,
              ]}
              src={background}
              alt="배경화면"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
