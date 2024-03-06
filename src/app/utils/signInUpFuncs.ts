import { AboutHandlePwVerCheck } from "../types/aboutSignInUp";

export const handlePwVerCheck: (params: AboutHandlePwVerCheck) => void = ({
  pwRef,
  pwVerRef,
  setPwCheckMessage,
}) => {
  if (pwRef.current && pwRef.current!.value.length > 8) {
    if (pwRef.current.value !== pwVerRef.current?.value) {
      setPwCheckMessage("❌ 비밀번호가 일치하지 않습니다.");
      return;
    } else if (pwRef.current.value === pwVerRef.current?.value) {
      setPwCheckMessage("✅ 비밀번호가 일치합니다.");
    }
  }
};
