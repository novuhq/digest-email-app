import Body from "./components/Body";
import "./app.css";
import Img from "./components/Img";

function App() {
  return (
    <div className="bg-[#303053] text-white h-screen w-screen overflow-hidden">
      {/* <Header /> */}
      <div className="flex justify-evenly">
        <div className=" mt-[3rem]">
          <Img />
        </div>
        <div className="w-1/2 py-20 pt-[10rem]">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
