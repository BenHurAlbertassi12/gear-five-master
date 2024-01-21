import ProjectsList from '../../Components/Portifoil/Search_Buttonn/Search_button';
import { projects } from '../../Components/Portifoil/projects';

export const Portifoil = () => {
  return (
    <div>
      <ProjectsList projects={projects} />
    </div>
  );
};
