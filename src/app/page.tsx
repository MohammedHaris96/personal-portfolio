import Header from "../components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 h-screen">
      <div className="flex-col md:flex md:flex-row w-full h-100">
        <div className="border w-full md:w-1/2 flex flex-col justify-around h-full">
          <p className="text-3xl">
            Hey! I am{" "}
            <span className="text-5xl md:text-6xl lg:text-7xl">
              Mohammed Haris
            </span>
          </p>
          <p className="text-1xl">
            A passionate software engineer working in a dynamic organization. My
            expertise lies in building robust web applications using
            cutting-edge technologies like React JS, Redux, Javascript and much
            more.
          </p>
        </div>
        <div className="border w-full md:w-1/2 h-full">
          <p>right Page</p>
        </div>
      </div>
      {/* <div className="flex-col md:flex md:flex-row w-full h-screen ">
        <div className="border w-full md:w-1/2 flex flex-col justify-around h-full">
          <p className="text-3xl">
            Hey! I am{" "}
            <span className="text-5xl md:text-6xl lg:text-7xl">
              Mohammed Haris
            </span>
          </p>
          <p className="text-1xl">
            A passionate software engineer working in a dynamic organization. My
            expertise lies in building robust web applications using
            cutting-edge technologies like React JS, Redux, Javascript and much
            more.
          </p>
        </div>
        <div className="border w-full md:w-1/2 h-full">
          <p>right Page</p>
        </div>
      </div> */}
    </main>
  );
}
