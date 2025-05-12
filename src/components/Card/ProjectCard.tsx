import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface ProjectCardTypes {
  images: StaticImageData[];
  title: string;
  name: string;
  description: string[];
  techStack?: StaticImageData[];
}

const ProjectCard: FC<ProjectCardTypes> = ({
  images,
  title,
  description,
  name,
  techStack,
}) => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl pt-2 pb-2 text-blue-200">{title}</h1>
      <div className="grid grid-flow-col grid-cols-1 row-auto gap-3">
        <div className="bg-gray-600 row-span-6 rounded-lg p-5">
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-1 auto-rows-auto">
            {images.map((image, index: number) => (
              <div key={`${index}`} className="row-span-6">
                <Image
                  src={image}
                  alt="SalesMLoginImg"
                  className="rounded-lg inline-block"
                />
              </div>
            ))}
          </div>
          <h1 className="text-md font-bold pt-5">Name:</h1>
          <span>{name}</span>
          <h1 className="text-md font-bold pt-5">Description:</h1>
          <ul>
            {description.map((desc, index: number) => (
              <li key={`${index}`}>{desc}</li>
            ))}
          </ul>
          {techStack && (
            <React.Fragment>
              <h1 className="text-md font-bold pt-5">Tech Stack:</h1>
              <ul className="pt-2">
                {techStack.map((techImg, index: number) => (
                  <Image
                    key={`${index}`}
                    src={techImg}
                    alt="TechImg"
                    width={50}
                    height={50}
                    className="rounded-lg inline-block pr-3 pt-3"
                  />
                ))}
              </ul>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
