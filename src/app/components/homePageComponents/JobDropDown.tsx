interface aboutJobDropDown {
  value: string;
  setIsOpen: (isOpen: boolean) => void;
  setJobIdentify: (jobIdentify: string) => void;
  isOpen: boolean;
}

//드롭다운에서 value를 클릭하면 value를 그 값으로 바꾸고 닫아주는 함수
export const JobDropDown = ({ value, setJobIdentify, setIsOpen }: aboutJobDropDown) => {
  const handleClick = () => {
    console.log(value);
    setJobIdentify(value); // 선택된 직군·직무 값을 상태에 저장
    setIsOpen(false); // 드롭다운 닫기
  };

  return <li onClick={handleClick}>{value}</li>;
};
