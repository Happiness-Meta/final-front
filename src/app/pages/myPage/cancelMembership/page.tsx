"use client";
/** @jsxImportSource @emotion/react */

import ProjectMenu from "@/app/components/commonComponents/Projectmenu";
import {
  buttonStyle,
  headerContainerStyle,
} from "@/app/styleComponents/homePageStyles/HomePageStyles";

//axios
import axios from "axios";

// css
import Image from "next/image";
import {
  ProfileContainer,
  UserProfileImg,
  UserDataContainer,
  userName,
  email,
} from "@/app/styleComponents/workspaceStyles/profileStylese";

import {
  resumeHeader,
  resumeHeaderColumn,
  resume,
  arrowImg,
  divider,
} from "@/app/styleComponents/workspaceStyles/resumeStyles";

// img
import profilePicture from "@/app/assets/svg/profilePicture.svg";
import arrowRight from "@/app/assets/svg/arrow-right-small.svg";
import { useCookies } from "react-cookie";
import { commonColor } from "@/app/styleComponents/commonStyles/commonStyles";
import ReactModal from "react-modal";
import useModalstore from "@/app/store/modalStore/ticketPageStore/useModalStore";
import { css } from "@emotion/react";
import { useState } from "react";
import { JobDropDown } from "@/app/components/homePageComponents/JobDropDown";
import { cancelReason } from "@/app/constants/cancelReason";

const reactCancelModal = css`
  background-color: white;
  width: 494px;
  height: 553px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ticketButtonContainer = css`
  display: flex;
  justify-content: flex-start;
  margin-left: 147px;
  margin-top: 20px;
  gap: 20px;
  align-items: center;
`;

const cancelModalContainer = css`
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

const cancelModalWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const cancelListUl = () => css`
  z-index: 2;
  position: absolute;
  top: 90px;
  left: 1vw;
  border-radius: 10px;
  width: 336.5px;
  height: 301px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    list-style: none;
    margin-top: 15px;
    margin-bottom: 15px;
    &:hover {
      color: orange;
    }
  }
`;

const CancelMembership = () => {
  const cancelPay = () => {
    toggleCancelModal();
    //   const response = await axios.get("https://api.iamport.kr/payments/cancel")
    //   if(response.imp_uid){
    //   try {
    //     const body = {
    //       //impUid를 담아 보내야 됨
    //       merchant_uid: "결제건의 주문번호", // 주문번호
    //       cancel_request_amount: 100, // 환불금액
    //       reason: "테스트 결제 환불", // 환불사유: select box로 받아서 post로 보내기
    //       impUid: response.imp_uid,
    //     }

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  };
  const { isCancelModalOpen, toggleCancelModal } = useModalstore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [cookies] = useCookies(["nickname"]);
  const [reasonCancel, setReasonCancel] = useState<string>("");

  return (
    <>
      <header css={headerContainerStyle}>
        <ProjectMenu />
      </header>
      <article>
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
            <div css={userName}>{cookies.nickname ? cookies.nickname : "Guestname"}</div>
            <div css={email}>guestemail001@gmail.com</div>
          </div>
        </div>
        <div
          css={[
            resumeHeaderColumn,
            `
        flex-direction: column;
        
    `,
          ]}
        >
          <div
            css={[
              resumeHeader,
              `
          flex-direction: row;
          
      `,
            ]}
          >
            <div css={resume}>구독 관리</div>
            <Image css={arrowImg} src={arrowRight} alt="화살표" />
          </div>
          <div css={divider}></div>

          <div
            css={[
              `
              display:flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-left: 9rem; 
    
      `,
            ]}
          >
            <span
              css={[
                `font-style: normal;
                font-weight: 700;
                font-size: 30px;
`,
              ]}
            >
              {cookies.nickname ? cookies.nickname : "Guestname"}님 안녕하세요,{" "}
            </span>
            <span
              css={[
                `font-style: normal;
                font-weight: 400;
                font-size: 24px;
                margin-top: 10px`,
              ]}
            >
              {cookies.nickname ? cookies.nickname : "Guestname"}님은 현재 구독중 입니다.
            </span>
          </div>
          <div css={ticketButtonContainer}>
            <span>구독 종료일: 2023. 05. 23</span>
            <button
              css={[
                buttonStyle(commonColor.mainYellow, "white"),
                `
                width: 100px;
                height: 50px;
                
                margin-left: 10px !important;
            
        `,
              ]}
              onClick={cancelPay}
            >
              구독취소
            </button>
          </div>
        </div>
      </article>
      <ReactModal
        isOpen={isCancelModalOpen}
        onRequestClose={toggleCancelModal}
        contentLabel="Cancel Ticket"
        css={reactCancelModal}
        ariaHideApp={false}
      >
        <div css={cancelModalWrapper}>
          <div css={cancelModalContainer}>
            <span>{cookies.nickname ? cookies.nickname : "GuestName"} 님,</span>
            <span>구독을 취소하시겠어요?</span>
          </div>
          <div>
            <input
              value={reasonCancel || "구독 취소 사유를 골라주세요."}
              type="button"
              placeholder="구독 취소 사유를 골라주세요."
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            />
            {isOpen && (
              <ul css={cancelListUl}>
                {cancelReason.map((value, index) => (
                  <JobDropDown
                    key={index}
                    value={value}
                    setIsOpen={setIsOpen}
                    setJobIdentify={setReasonCancel}
                    isOpen={isOpen}
                  />
                ))}
              </ul>
            )}
          </div>

          <div>
            <button
              css={[
                buttonStyle(commonColor.mainYellow, "white"),
                `
                width: 100px;
                height: 50px;
                
                margin-left: 10px !important;
            
        `,
              ]}
            >
              구독취소
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CancelMembership;
