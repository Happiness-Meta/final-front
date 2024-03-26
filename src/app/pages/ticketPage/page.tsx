"use client";
/** @jsxImportSource @emotion/react */

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
import ReactModal from "react-modal";
import useModalstore from "@/app/store/modalStore/ticketPageStore/useModalStore";
import { useEffect, useState } from "react";
import { RequestPayParams } from "../../../../portone";
import axios from "axios";
import qrCode from "@/app/assets/svg/qrcode.svg";
import paletteTicketPicture from "@/app/assets/svg/paletteTicketPicture.svg";
import {
  buyTicketCenter,
  reactModalTicket,
  ticketStyles,
  leftStyle,
  imageStyle,
  ticketNumberStyle,
  ticketInfoStyle,
  showNameStyle,
  rightStyle,
  rightInfoContainerStyle,
  barcodeStyle,
  paymentStyle,
} from "@/app/styleComponents/ticketPagestyles/ticketPageStyles";
import { orderProducts } from "@/app/constants/orderProducts";

interface SetOrder {
  orderUid: string;
  amount: number;
  itemName: string;
  buyerName: string;
  buyerAddress: string;
}

const TicketPage = () => {
  const { isModalOpen, togglePayModal } = useModalstore();

  const [isSetOrder, setIsSetOrder] = useState<SetOrder>({
    orderUid: "",
    amount: 0,
    itemName: "",
    buyerName: "",
    buyerAddress: "",
  });

  const handleBuyTicket = async () => {
    try {
      // axios.get의 인자는 요청을 보낼 URL입니다.
      const body = {
        itemPrice: orderProducts.BASIC_TICKET.itemPrice,
        itemName: orderProducts.BASIC_TICKET.itemName,
      };
      const response = await axios.post("http://processlogic.link/api/v1/order", body);

      setIsSetOrder(response.data.data);

      // 요청이 성공적으로 처리되면 실행될 코드

      console.log("res data", response.data);
    } catch (error) {
      // 에러 처리 코드
      console.error("handleBuyTicket error:", error);
    } finally {
      // 성공하든 에러가 발생하든 항상 실행(모달창 띄우기)
      togglePayModal();
    }
  };

  // useEffect(() => {
  //   console.log("isSetOrder", isSetOrder);
  //   console.log("isSetOrder", typeof isSetOrder.orderUid);
  // }, [isSetOrder]);

  useEffect(() => {
    // 포트원 스크립트 동적 로드 및 초기화
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.onload = () => {
      if (window.IMP) {
        window.IMP.init(process.env.NEXT_PUBLIC_SHOP_ID!);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //결제 로직
  const handlePayment = async () => {
    if (window.IMP) {
      const data: RequestPayParams = {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: isSetOrder.orderUid,
        amount: isSetOrder.amount,
        name: isSetOrder.itemName,
        buyer_name: isSetOrder.buyerName,
        buyer_tel: "010-1234-5678", //user에 들어갈 정보 인터페이스
        buyer_email: "example@example.com",
        buyer_addr: isSetOrder.buyerAddress,
        buyer_postcode: "01181",
      };

      //front -> kg : request
      //kg -> front : response

      //아임포트 결제창 켜기
      window.IMP.request_pay(data, async (response) => {
        if (response.success) {
          console.log("window.imp.request_pay: ", data);
          console.log("call back!!: " + JSON.stringify(data));
          console.log("this is res", response);
          if (response.imp_uid) {
            try {
              const body = {
                impUid: response.imp_uid,
                orderUid: response.merchant_uid,
                cardNumber: response.card_number,
                payMethod: response.pay_method,
                amount: response.paid_amount,
                buyerTel: response.buyer_tel,
                currency: response.currency,
                paidAt: response.paid_at,
                status: response.status,
                buyerEmail: response.buyer_email,
                cardName: response.card_name,
              };

              console.log("pay api rsp myBody", body);

              const rsp = await axios.post("http://processlogic.link/api/v1/payment", body);
              console.log(rsp.data);
            } catch (error) {
              console.error("axios 요청 중 에러 발생:", error);
            }
          } else {
            console.log("imp_uid가 null입니다. 요청을 보내지 않습니다.");
          }
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
        <div css={buyTicketCenter} onClick={handleBuyTicket}>
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
        <div css={ticketStyles}>
          <div css={leftStyle}>
            <div css={imageStyle}>
              <Image src={paletteTicketPicture} alt="ticket-image"></Image>
            </div>
            <div css={ticketInfoStyle}>
              <div css={showNameStyle}>
                <h1>Buy Ticket</h1>
                <h2>of Palette</h2>
              </div>
            </div>
          </div>
          <div css={rightStyle}>
            <div css={rightInfoContainerStyle}>
              <div css={barcodeStyle}>
                <Image src={qrCode} alt="QR code" />
              </div>
              <p css={ticketNumberStyle}>#20240313</p>
            </div>
            <div
              css={[buttonStyle(commonColor.mainYellow, "white"), paymentStyle]}
              onClick={handlePayment}
            >
              결제하기
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default TicketPage;
