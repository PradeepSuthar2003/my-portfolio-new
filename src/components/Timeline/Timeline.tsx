import React, { FC } from "react";

interface TimelineTypes {
  title: string;
  timeline: {
    title: string;
    date: string;
    description: (string | string[])[];
  }[];
}

const Timeline: FC<TimelineTypes> = ({ timeline, title }) => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl pt-2 pb-2 text-blue-200">{title}</h1>

      {timeline.map((time) => (
        <div key={time.title} className="border-l-2 border-blue-500 p-2">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-200 -translate-x-[13px]"></div>
            <div>
              <span className="font-semibold">{time.title}</span>
              <div className="text-sm text-gray-500">{time.date}</div>
            </div>
          </div>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {time.description.map((desc) => {
              if (Array.isArray(desc)) {
                return desc.map((text) => (
                  <span key={text} className=" block">
                    {text}
                  </span>
                ));
              }
              return (
                <li key={desc} className="font-semibold pt-2 text-blue-300">
                  {desc}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
