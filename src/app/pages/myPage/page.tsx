"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";

// libararies
import { useEffect, useState } from "react";

//components
import ProjectTitle from "@/app/components/myPageComponents/myPageProjectTitle";

//img
import Email from "@/app/assets/svg/Message_light.svg";
import Profile from "@/app/assets/svg/profilePicture.svg";
import Edit from "@/app/assets/svg/Edit.svg";

//css
import {
  Container,
  tinyContainer,
  container,
  profile,
  userDataContainer,
  userNickname,
  rowContainer,
  techStackImg,
  userField,
} from "@/app/styleComponents/myPageStyles/myPageStyles";
import axios from "axios";

//types
import { myInfo } from "@/app/types/aboutMypage";

const MyPage = () => {
  // 선택 창 컨트롤
  // 유저 정보
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/myPage");

      setUserData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);
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
              {userData.length > 0 ? (
                userData.map((item: myInfo, i: number) => (
                  <div key={i}>
                    <div>
                      <div css={[userNickname]}>{item.userNickname}</div>
                    </div>
                    <div
                      css={[
                        rowContainer,
                        `
                    flex-direction: 'row',
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
                      <div
                        css={[
                          `
                      color: #c1c1c1
                    `,
                        ]}
                      >
                        {item.userEmail}
                      </div>
                    </div>
                    <h3 css={[userField]}>{item.Field}</h3>
                    <div
                      css={[
                        `
                        display:flex;
                        flex-direction: row;
                      `,
                      ]}
                    >
                      {item.techStack.map((img: string, i: number) => (
                        <Image
                          key={i}
                          css={techStackImg}
                          src={require(`@/app/assets/svg/techStack/${img.toLowerCase()}.svg`)}
                          alt="이미지"
                          width={30}
                          height={30}
                        />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="userContainer">
                    <div css={[userNickname]}>닉네임</div>
                  </div>
                  <div
                    css={[
                      rowContainer,
                      `
                    flex-direction: 'row',
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
                    <div
                      css={[
                        `
                      color: #c1c1c1
                    `,
                      ]}
                    >
                      exmaple@example.com
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
