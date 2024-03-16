import React from "react";

function index() {
  const experience = [
    {
      id: 1,
      company: "Zazz IT Solutions Pvt. Ltd",
      title: "Software Developer",
      location: "Remote",
      timeSpan: "March 2022-Current",
    },
    {
      id: 2,
      company: "ALP Savy",
      title: "Software Developer",
      location: "Srinagar",
      timeSpan: "February 2021-March 2022",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Application",
      institute: "Galgotias University",
      timeSpan: "2017-2020",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Application",
      institute: "Universty of Kashmir",
      timeSpan: "2014-2017",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-10 h-full">
      <div className="flex-col md:flex md:flex-row w-full h-full">
        <div className="w-full md:w-1/2 flex flex-col h-full">
          <div>
            <p className="text-5xl md:text-6xl lg:text-7xl py-10 text-slate-500 underline ">
              About Me
            </p>
          </div>
          <div>
            <p className="text-1xl">
              A passionate software engineer working in a dynamic organization.
              My expertise lies in building robust web applications using
              cutting-edge technologies like React JS, Redux, Javascript and
              much more.
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl lg:text-5xl pt-10 text-slate-500 underline">
              Work Experience
            </p>
          </div>

          {experience.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col border-b border-gray-300 py-5"
              >
                <div className="flex items-center justify-between py-2">
                  <p>{item?.company}</p>
                  <p>{item?.title}</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p>{item?.location}</p>
                  <p>{item?.timeSpan}</p>
                </div>
              </div>
            );
          })}
          <div>
            <p className="text-3xl md:text-4xl lg:text-5xl py-10 text-slate-500 underline">
              Education
            </p>
          </div>

          {education.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col border-b border-gray-300 py-5"
              >
                <div className="flex items-center justify-between py-2">
                  <p>{item?.degree}</p>
                  <span className="bg-green-200 px-2 rounded-2xl">
                    Full Time
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p>{item?.institute}</p>
                  <p>{item?.timeSpan}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default index;
