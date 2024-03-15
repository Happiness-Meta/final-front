// components
import WorkspaceHeader from "@/app/components/workspaceComponents/WorkspaeHeader";
import WorkspaceUserProfile from "@/app/components/workspaceComponents/WorkspaceUserProfile";
import WorkspaceResume from "@/app/components/workspaceComponents/WorkspaceResume";
import WorkspaceProject from "@/app/components/workspaceComponents/workspaceProject";

// css
import { Container } from "@/app/styleComponents/workspaceStyles/headerStyles";

const WorkspacePage = () => {
  return (
    <div css={Container}>
      <WorkspaceHeader />
      <WorkspaceUserProfile />
      <WorkspaceResume />
      <WorkspaceProject />
    </div>
  );
};

export default WorkspacePage;
