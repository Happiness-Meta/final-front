import { useEffect, RefObject } from "react";

const useDetectClose = (ref: RefObject<HTMLElement>, setIsOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      // 클릭된 요소가 ref로 참조된 드롭다운 메뉴의 외부에 있는지 확인하고, 참이면 setIsOpen을 통해 상태를 변경
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false); // 드롭다운 닫기
      }
    };

    // 드롭다운 메뉴가 열려 있을 때만 클릭 이벤트 리스너를 추가
    window.addEventListener("click", pageClickEvent);

    // 클린업 함수: 컴포넌트 언마운트 또는 useEffect 재실행 전에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [ref, setIsOpen]); // 의존성 배열에 setIsOpen 추가
};

export default useDetectClose;
