import React from "react";
import { PROJECTS } from "../constants";
import webDev from "../images/webDev.jpg";
const images = [webDev, webDev, webDev, webDev, webDev, webDev];

const Project = () => {
  return (
<section className="px-10 py-24">
<h2 className="mb-20 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-[1.3] py-2">
                    My Projects
                </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <img
              src={images[index]}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
