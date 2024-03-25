import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutGetData } from "@/app/types/aboutProjectView";

interface AboutProjectName {
  data: AboutGetData;
}

const ProjectName: React.FC<AboutProjectName> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="name" css={[labelStyles.style1]}>
        프로젝트 이름
      </label>
      <hr />
      <p>{data.projectName}</p>
    </div>
  );
};

export default ProjectName;
