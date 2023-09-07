import React from "react";
import * as Section from "../Section";
import ProjectCard from "./ProjectCard";
import fetchRepositories from "../../services/fetchRepositories";
import data from "../../config.json";

const Projects = () => {
  const repositories = fetchRepositories();
  const projectData = data.pt.projects;
  return (
    <Section.Structure name="projects">
      <Section.Title title={projectData.title} />
      <Section.Content>
        <Section.Content  customClass={"grid lg:grid-cols-2 grid-cols-1 gap-8"}>
          {repositories.length ? (
            repositories.map((repo) => (
              <ProjectCard key={repo.id} project={repo} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Section.Content>
      </Section.Content>
    </Section.Structure>
  );
};

export default Projects;
