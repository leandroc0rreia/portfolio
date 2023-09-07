import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import data from "../../config.json";

const projectData = data.pt.projects;

const ProjectCard = ({ project }) => {
  const {
    full_name,
    description,
    languages_url,
    repo_url,
    svn_url,
    stargazers_count,
    pushed_at,
  } = project;

  return (
    <ProjectContent>
      <ProjectTitle full_name={full_name} />
      <ProjectDescription description={description} />
      <ProjectLanguages languages_url={languages_url} repo_url={repo_url} />
      <ProjectFooter
        stargazers_count={stargazers_count}
        pushed_at={pushed_at}
      />
      <hr className="mb-4" />
      <ProjectButtons repo_url={repo_url} svn_url={svn_url} />
    </ProjectContent>
  );
};

const ProjectContent = ({ children }) => {
  return (
    <div className="bg-white hover:bg-gray-50 text-black dark:bg-warm-gray-600 dark:hover:bg-warm-gray-500 dark:text-white flex-col inline-grid rounded-md shadow-md p-6">
      {children}
    </div>
  );
};

const ProjectTitle = ({ full_name }) => {
  return (
    <div className="text-black dark:text-white text-xl text-left font-medium mb-4">
      {full_name}
    </div>
  );
};

const ProjectDescription = ({ description }) => {
  return (
    <div className="text-black dark:text-white text-lg text-left font-light mb-4">
      {description}
    </div>
  );
};

const ProjectLanguages = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="flex mb-4">
      <div className="text-black dark:text-white text-xs text-left font-bold">
        {projectData.text_lang}
      </div>
      {/* TODO: multiple languages */}
      <div className="flex flex-wrap text-left text-xs pl-1">
        {array.map((language, index) => (
          <div key={index} className="mb-4">
            <span className="bg-warm-gray-200 dark:bg-warm-gray-800 text-dark ml-1 p-1.5 rounded-lg">
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectFooter = ({ stargazers_count, pushed_at }) => {
  return (
    <div className="flex mb-2">
      <div className="flex items-center">
        <div className="text-black dark:text-white text-xs text-left font-bold">
          {projectData.text_stars}
        </div>
        <div className="text-left text-xs bg-gray-900 text-white dark:bg-white dark:text-warm-gray-800 ml-1 p-0.5 rounded-lg">
          {stargazers_count}
        </div>
      </div>
      <div className="flex items-center ml-2">
        <div className="text-black dark:text-white text-xs text-left font-light">
          <small>
            {projectData.text_updated}{" "}
            {new Date(pushed_at).toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  );
};

const ProjectButtons = ({ svn_url }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="rounded-md bg-blue-600 text-white p-2">
        <a
          href={svn_url + "/archive/refs/tags/v1.0.zip"}
          className="flex items-center justify-center"
        >
          <svg
            className="fill-white w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 8h-2v2h-2v-4h4v2zm8 16v-2h-6v2h6zm2-16h2v2h2v-4h-4v2zm2 12v2h-2v2h4v-4h-2zm-12 2h-2v-2h-2v4h4v-2zm14-10h-2v6h2v-6zm-16 6v-6h-2v4h-4v-14h14v4h-4v2h6v-8h-18v18h8z" />
          </svg>
          <span className="hidden sm:block">{projectData.text_clone}</span>
        </a>
      </button>
      <button className="rounded-md bg-warm-gray-800 text-white p-2">
        <a href={svn_url} className="flex items-center justify-center">
          <svg
            className="fill-white w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="hidden sm:block">{projectData.text_repo}</span>
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
