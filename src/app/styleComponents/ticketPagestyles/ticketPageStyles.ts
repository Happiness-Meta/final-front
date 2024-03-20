import { css } from "@emotion/react";

export const buyTicketCenter = css`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const reactModalTicket = css`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 790px;
  height: 250px;
`;

export const ticketStyles = css`
  margin: auto;
  display: flex;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const leftStyle = css`
  display: flex;
`;

export const imageStyle = css`
  height: 250px;
  width: 250px;

  background-size: contain;
  opacity: 0.85;
`;

export const ticketNumberStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
`;

export const ticketInfoStyle = css`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const showNameStyle = css`
  margin-top: 30px;
  font-size: 32px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #ff8a00;
  }
`;

export const rightStyle = css`
  width: 250px;
  border-left: 1px dashed #404040;
`;

export const rightInfoContainerStyle = css`
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const barcodeStyle = css`
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const paymentStyle = css`
  position: relative;
  left: 33%;
  bottom: 10%;
`;
