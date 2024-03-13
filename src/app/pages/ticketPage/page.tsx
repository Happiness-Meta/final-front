"use client";

import ProjectMenu from "@/app/components/commonComponents/Projectmenu";
import { commonColor } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  buttonStyle,
  headerContainerStyle,
  homeButtonContainer,
} from "@/app/styleComponents/homePageStyles/HomePageStyles";
import Link from "next/link";
import buyTicket from "@/app/assets/svg/buyticket.svg";
import Image from "next/image";
import { css } from "@emotion/react";
import ReactModal from "react-modal";
import useModalstore from "@/app/store/modalStore/ticketPageStore/useModalStore";
import { useEffect } from "react";
import { RequestPayParams } from "../../../../portone";
/** @jsxImportSource @emotion/react */

const buyTicketCenter = css`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const reactModalTicket = css`
  background-color: gray;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const TicketPage = () => {
  const { isModalOpen, togglePayModal } = useModalstore();

  const handlebuyTicket = () => {
    togglePayModal();
  };

  useEffect(() => {
    // 아임포트 스크립트 동적 로드 및 초기화
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.onload = () => {
      if (window.IMP) {
        window.IMP.init(process.env.APP_SHOP_CODE!);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //결제 로직
  const handlePayment = () => {
    if (window.IMP) {
      const data: RequestPayParams = {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: 100,
        name: "팔레트 티켓",
        buyer_name: "구매자 이름",
        buyer_tel: "010-1234-5678",
        buyer_email: "example@example.com",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      };

      window.IMP.request_pay(data, (response) => {
        if (response.success) {
          alert("결제 성공");
        } else {
          alert(`결제 실패: ${response.error_msg}`);
        }
      });
    }
  };

  return (
    <>
      <header css={headerContainerStyle}>
        <ProjectMenu />
        <div css={homeButtonContainer}>
          <Link href={"loginPage"} css={buttonStyle("white", "black")}>
            로그인
          </Link>
          <Link href={"signUpPage"} css={buttonStyle(commonColor.mainYellow, "white")}>
            회원가입
          </Link>
        </div>
      </header>
      <article>
        <Image
          src={buyTicket}
          alt="buyticket"
          css={[
            `width:100vw;
            height:100%;
            margin-top:30px;
        `,
          ]}
        ></Image>
        <div
          css={[
            buyTicketCenter,
            `font-weight: 700;
            font-size: 57px;
            line-height: 68px;`,
          ]}
        >
          Palette*
        </div>
        <div
          css={[
            buyTicketCenter,
            `font-weight: 500;
            font-size: 28px;
            line-height: 33px;
            margin-top:2vw;`,
          ]}
        >
          원하는 페인터들의 작품을 마음껏 감상하세요.
        </div>
        <div
          css={[
            buyTicketCenter,
            `font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            margin-top:1vw;`,
          ]}
        >
          끊김없는 감상, 페인터와의 소통
        </div>
        <div
          css={[
            buyTicketCenter,
            `font-weight: 300;
            font-size: 32px;
            line-height: 38px;
            margin-top:4vw;`,
          ]}
        >
          월 ₩ 5,900
        </div>
        <div css={buyTicketCenter} onClick={handlebuyTicket}>
          <div
            css={[
              buttonStyle(commonColor.mainYellow, "white"),
              `
              width: 194px;
              height: 60px;
              font-weight: 600;
              font-size: 23px;
              line-height: 27px;
              margin-top:1vw;
              `,
            ]}
          >
            티켓구매
          </div>
        </div>
      </article>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={togglePayModal}
        contentLabel="Create New Repository"
        css={reactModalTicket}
        ariaHideApp={false}
      >
        <div>결제 정보</div>
        <div css={buttonStyle(commonColor.mainYellow, "white")} onClick={handlePayment}>
          결제하기
        </div>
      </ReactModal>
    </>
  );
};

export default TicketPage;
