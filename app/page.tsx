import CountdownTimerComponent from "./components/CountdownTimerComponent";
import MusicPlayerComponent from "./components/MusicPlayerComponent";
import SnowfallComponent from "./components/SnowfallComponent";

const Page = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-[#ba0c0c]  to-[#5c0000] overflow-hidden">
      <SnowfallComponent />

      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <header className="text-center mb-8 md:mb-12 flex text-3xl md:text-5xl lg:text-7xl ">
          <div className="hidden md:block">🎄</div>
          <h1 className="font-bold text-white">Christmas Countdown</h1>
          <div className="hidden md:block">🎄</div>
        </header>

        <div className="space-y-8 w-full flex flex-col items-center">
          <CountdownTimerComponent />
          <MusicPlayerComponent />
        </div>
      </div>
    </main>
  );
};

export default Page;
