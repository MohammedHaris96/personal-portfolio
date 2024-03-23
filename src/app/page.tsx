import Header from "../components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="flex-col md:flex md:flex-row w-full h-screen">
        <div className="border w-full md:w-1/2 flex flex-col">
          <p className="text-3xl py-10">Hey! I am</p>
          <p className="text-5xl md:text-6xl lg:text-7xl py-10">
            Mohammed Haris
          </p>
          <p className="text-1xl py-10">
            A passionate software engineer working in a dynamic organization. My
            expertise lies in building robust web applications using
            cutting-edge technologies like React JS, Redux, Javascript and much
            more.
          </p>
        </div>
        <div className="border w-full md:w-1/2">
          <p>right Page</p>
        </div>
      </div>
    </main>
  );
}
