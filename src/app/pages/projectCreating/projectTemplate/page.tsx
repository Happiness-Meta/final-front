"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  createButtonStyle,
  pageStyle,
  sectionStyle,
  templateBottomStyle,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import Header from "@/app/components/ptpComponents/Header";
import ProjectColoringSpace from "@/app/components/commonComponents/ProjectColoringSpace";
import { RefObject, useEffect, useRef } from "react";
import ProjectName from "@/app/components/ptpComponents/sections/ProjectName";
import ProjectPeriod from "@/app/components/ptpComponents/sections/ProjectPeriod";
import ProjectPersonnel from "@/app/components/ptpComponents/sections/ProjectPersonnel";
import ProjectDescription from "@/app/components/ptpComponents/sections/ProjectDescription";
import ProjectFunction from "@/app/components/ptpComponents/sections/ProjectFunction";
import ProjectProblem from "@/app/components/ptpComponents/sections/ProjectProblem";
import ProjectLink from "@/app/components/ptpComponents/sections/ProjectLink";
import ProjectTakeaway from "@/app/components/ptpComponents/sections/ProjectTakeaway";
import ProjectTechStack from "@/app/components/ptpComponents/sections/ProjectTechStack";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";

const ProjectTemplate = () => {
  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const startDateRef: RefObject<HTMLInputElement> = useRef(null);
  const endDateRef: RefObject<HTMLInputElement> = useRef(null);
  const personnelRef: RefObject<HTMLInputElement> = useRef(null);
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);
  const descriptionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const projectFuntionRef: RefObject<HTMLInputElement> = useRef(null);
  const projFuncContRef: RefObject<HTMLInputElement> = useRef(null);
  const pDefinitionRef: RefObject<HTMLInputElement> = useRef(null);
  const pReasonRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const pSolutionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const linkNameRef: RefObject<HTMLInputElement> = useRef(null);
  const linkRef: RefObject<HTMLInputElement> = useRef(null);

  const { techStackContainer } = useSignUpPageStore();

  useEffect(() => {
    if (nameRef.current?.value === "") {
      return nameRef.current.focus();
    }
    if (startDateRef.current?.value === "") {
      return startDateRef.current.focus();
    }
    if (endDateRef.current?.value === "") {
      return endDateRef.current.focus();
    }
    if (personnelRef.current?.value === "") {
      return personnelRef.current.focus();
    }
    if (techStackContainer.length === 0) {
      return searchTechStackRef.current?.focus();
    }
    if (descriptionRef.current?.value === "") {
      return descriptionRef.current.focus();
    }
    if (projectFuntionRef.current?.value === "") {
      return projectFuntionRef.current.focus();
    }
  }, []);

  return (
    <div css={[widthHeightFull, pageStyle]}>
      <Header />
      <PaintBackground />
      <section css={sectionStyle}>
        <ProjectColoringSpace />
        <ProjectName nameRef={nameRef} />
        <ProjectPeriod startDateRef={startDateRef} endDateRef={endDateRef} />
        <ProjectPersonnel personnelRef={personnelRef} />
        <ProjectTechStack searchTechStackRef={searchTechStackRef} />
        <ProjectDescription descriptionRef={descriptionRef} />
        <ProjectFunction
          projectFuntionRef={projectFuntionRef}
          projFuncContRef={projFuncContRef}
        />
        <ProjectProblem
          pDefinitionRef={pDefinitionRef}
          pReasonRef={pReasonRef}
          pSolutionRef={pSolutionRef}
        />
        <ProjectLink linkNameRef={linkNameRef} linkRef={linkRef} />
        <ProjectTakeaway />

        <div css={[flexCenterX2, templateBottomStyle]}>
          <button css={[createButtonStyle]}>생성</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
