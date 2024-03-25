"use client";

import { useEffect, useState } from "react";

// components
import WorkspaceHeader from "@/app/components/workspaceComponents/WorkspaeHeader";
import WorkspaceUserProfile from "@/app/components/workspaceComponents/WorkspaceUserProfile";
import WorkspaceResume from "@/app/components/workspaceComponents/WorkspaceResume";
import WorkspaceProject from "@/app/components/workspaceComponents/workspaceProject";

// css
import { Container } from "@/app/styleComponents/workspaceStyles/headerStyles";
import axios from "axios";

//types
import { portPoliosThumbnailData } from "@/app/types/aboutWorkspace";

//constants

const WorkspacePage = () => {
  const [project, setProject] = useState<portPoliosThumbnailData[]>();
  const [resumeData, setResumeData] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/workspaceProjectData"
      );
      const data = response.data;
      setProject(data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = (data: portPoliosThumbnailData) => {
    const remove = project?.filter(
      (item) => item.projectName !== data.projectName
    );

    setProject(remove);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // console.log("data: ", data);
  }, [project]);

  return (
    <div css={Container}>
      <WorkspaceHeader resumeData={resumeData} />
      <WorkspaceUserProfile />
      <WorkspaceResume />
      {project && (
        <WorkspaceProject projectData={project} removeData={removeData} />
      )}
    </div>
  );
};

export default WorkspacePage;
