/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

// libararies
import axios from "axios";

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

// custom hooks
import useGetData from "@/app/hooks/myPageHooks/useGetData";
import TechStackSpace from "@/app/components/commonComponents/TechStackSpace";

const MyPage = () => {
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [infoForSignUp, setInfoForSignUp] = useState<AboutInfoForIndiSignUp>({
    email: "",
    name: "",
    password: "",
    position: "희망포지션",
  });
  // 유저 정보
  const [userData, setUserData] = useState([]);

  // 회사 정보
  const [companyData, setCompanyData] = useState([]);

  // edit boolean
  const [isEdit, setIsEdit] = useState(false);

  // get user data
  const getData = async () => {
    const data = useGetData(setUserData);
    data();
  };

  // get company data
  const getCompanyData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/myPageCompanyData"
      );
      setCompanyData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
  };

  useEffect(() => {
    getData();
    getCompanyData();
  }, []);

  useEffect(() => {
    console.log("userData: ", userData);
    console.log("companyData: ", companyData);
  }, [userData, companyData]);

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
              {userData.length > 0
                ? userData.map((item: myInfo, i: number) => (
                    <div key={i}>
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
                        <div css={[userNickname]}>{item.userNickname}</div>
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
                                placeholder={item.userEmail}
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
                            />
                            <div>{item.userEmail}</div>
                          </div>
                          <h3 css={[userField]}>{item.Field}</h3>
                          <div
                            css={[
                              `
                        display:flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                      `,
                            ]}
                          >
                            {item.techStack.map((item, i) => (
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
                  ))
                : companyData.map((company: companyInfo, i: number) => (
                    <div key={i}>
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
                        <div css={userNickname}>{company.companyName}</div>
                      </div>
                      {isEdit === true ? (
                        <div
                          css={[
                            `
                          height: 100%;
                        `,
                          ]}
                        >
                          <div
                            css={[
                              rowContainer,
                              `
                          flex-direction: column;
                          margin-bottom: 0.5rem;
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
                                  margin-left: 0.5rem;
                                margin-right: 0.5rem;
                              `,
                                ]}
                                src={Email}
                                alt="회사이메일"
                                width={28}
                                height={28}
                              />
                              <input
                                css={[
                                  input,
                                  `
                                boredr: none;
                                &:focus {
                                  outline: none;
                                }
                              `,
                                ]}
                                placeholder={company.companyEmail}
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
                                  margin-left: 0.5rem;
                                margin-right: 0.5rem;
                              `,
                                ]}
                                src={Address}
                                alt="회사 주소"
                                width={28}
                                height={28}
                              />
                              <input
                                css={[
                                  input,
                                  `
                                boredr: none;
                                &:focus {
                                  outline: none;
                                }
                              `,
                                ]}
                                placeholder={company.companyAddress}
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
                                  margin-left: 0.5rem;
                                margin-right: 0.5rem;
                              `,
                                ]}
                                src={PhoneNumber}
                                alt="회사 주소"
                                width={28}
                                height={28}
                              />
                              <input
                                css={[
                                  input,
                                  `
                                boredr: none;
                                &:focus {
                                  outline: none;
                                }
                              `,
                                ]}
                                placeholder={company.companyPhoneNumber}
                              />
                            </div>
                          </div>
                          <PositionSpace
                            handlePutInfo={handlePutInfo}
                            positionList={industryList}
                            textForGuide={guideForIndustry}
                          />
                        </div>
                      ) : (
                        <div>
                          <div
                            css={[
                              rowContainer,
                              `
                          flex-direction: row;
                          margin-bottom: 0.5rem;
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
                              alt="회사이메일"
                              width={28}
                              height={28}
                            />
                            <div>{company.companyEmail}</div>
                          </div>
                          <div
                            css={[
                              `
                            margin-bottom: 0.5rem;
                            display: flex;
                            align-items: center;
                          `,
                            ]}
                          >
                            <Image
                              css={[
                                `
                                margin-right: 0.5rem;
                              `,
                              ]}
                              src={Address}
                              alt="회사 주소"
                              width={28}
                              height={28}
                            />
                            {company.companyAddress}
                          </div>
                          <div
                            css={[
                              `
                            margin-bottom: 0.5rem;
                            display: flex;
                            align-items: center;
                          `,
                            ]}
                          >
                            <Image
                              css={[
                                `
                                margin-right: 0.5rem;
                              `,
                              ]}
                              src={PhoneNumber}
                              alt="회사 번호"
                              width={28}
                              height={28}
                            />
                            {company.companyPhoneNumber}
                          </div>
                          <h3 css={[userField]}>{company.companyIndustry}</h3>
                        </div>
                      )}
                    </div>
                  ))}
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
