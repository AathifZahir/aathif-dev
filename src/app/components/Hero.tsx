import React from "react";
import styles from "../styles/mouse.module.css";

export default function Hero() {
  return (
    <div className="bg-background py-4 items-center min-h-screen">
      <div className="container mx-auto space-y-4 p-20 text-center h-[80%]">
        <div className="flex justify-between w-full">
          <div className="w-1/2 text-left">
            <div className="text-8xl">
              Hello, <br />
              World
            </div>
            <div>
              Hey, I'm Aathif Zahir, a Software Engineer <br />
              passionate about building awesome web and mobile apps. <br />
              Check out some of the cool projects <br />
              I've been working on below!
            </div>
          </div>{" "}
          <div className="w-1/2 text-right flex items-center justify-center">
            <img
              src="/images/me.png"
              alt="Portrait of Aathif"
              className="rounded-full w-64"
            />
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center mt-20 h-[20%]">
        <div className={styles.mouse}>
          <span></span>
        </div>
        <div className="text-white text-center mt-4">Scroll Down</div>
      </div>
    </div>
  );
}
