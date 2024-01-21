/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectsList = ({ projects }) => {
  const [selectedStack, setSelectedStack] = useState(null);

  const handleStackChange = (stack) => {
    setSelectedStack(stack);
  };

  const filteredProjects = selectedStack
    ? projects.filter((project) => project.stacks.includes(selectedStack))
    : projects;

  return (
    <div>
      {/* Barra com as stacks em destaque */}
      <div>
        <span onClick={() => handleStackChange(null)}>Todos</span>
        {[
          'Angular',
          'JavaScript',
          'TypeScript',
          'HTML & CSS',
          'API',
          'DOM',
          'React',
          'Redux',
          'Node',
          'Express',
          'MongoDB',
          'CRUD',
        ].map((stack) => (
          <span key={stack} onClick={() => handleStackChange(stack)}>
            {stack}
          </span>
        ))}
      </div>

      {/* Lista de Projetos Filtrada */}
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.stacks.join(', ')}</p>
            <p>
              Deploy:{' '}
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.deploy}
              </a>
            </p>
            {/* Adicione mais informações conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
