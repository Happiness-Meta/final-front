export interface IndividualUserSignUpDTO {
  email: string;
  nickname: string;
  password: string;
  preferedPosition: string;
  techStack: String[];
}

export interface CorporateUserSignUpDTO {
  email: string;
  name: string;
  password: string;
  address: string;
  telephone: string;
  industry: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface UserKakaoLoginDTO {}

export interface IndividualUserUpdateDTO {
  nickname: string;
  password: string;
  preferedPosition: string;
  techStack: string;
}

export interface CorporateUserUpdateDTO {
  nickname: string;
  password: string;
  industryPosition: string;
}
// 회원탈퇴(토큰과 함께 보내기)
export interface UserDeleteDTO {
  password: string;
}
