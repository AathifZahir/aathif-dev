import CustomCursor from "./components/CustomCursor";
import ProjectData from "./data/projects.json";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      {/*background border*/}
      <div
        className="absolute top-10 left-0 bg-p2"
        style={{ width: "100%", height: "0.5px" }}
      ></div>{" "}
      <div
        className="absolute bottom-10 left-0 bg-p2"
        style={{ width: "100%", height: "0.5px" }}
      ></div>{" "}
      <div
        className="absolute top-0 left-10 bg-p2"
        style={{ width: "0.5px", height: "100%" }}
      ></div>{" "}
      <div
        className="absolute top-0 right-10 bg-p2"
        style={{ width: "0.5px", height: "100%" }}
      ></div>{" "}
      <CustomCursor />
      {/*container*/}
      <div>
        <Header />
      </div>
    </div>
  );
}
