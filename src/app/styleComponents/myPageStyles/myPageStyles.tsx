import { css } from "@emotion/react";

export const Container = css`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  height: 500px;

  .tinyContainer {
    display: flex;
    flex-direction: column;
    width: 50vw;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .userDataContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
  }
  .userContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .userNickname {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
  .rowContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .userEmail {
    margin-right: 0.5rem;
  }
  .Email {
  }
  .profile {
    width: 20vw;
    height: 40vh;
    border-radius: 1.5rem;
  }

  .skillContainer {
    width: "90%";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
  .skillStackContainer {
  }
`;

export const CareerInputBlock = css`
  width: 50vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 4px;
`;

export const SkillStackInputBlock = css`
  width: 50vw;
  height: 20vh;
  margin-top: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 4px;
`;

// CareerInputBoxComponent
export const CareerInputRowContainer = css`
  width: 40vw;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const CareerInput = css`
  height: 5vh;
  border: "1px solid gray";
  border-radius: "5px";
  font-size: 1rem;
  transition: ".2s";
  padding-left: 0.5rem;
`;

export const CareerSelect = css`
  height: 5vh;
  border: "1px solid gray";
  border-radius: "5px";
  font-size: 1rem;
  transition: ".2s";
  padding-left: 0.5rem;
  margin-left: 0.5rem;
`;
