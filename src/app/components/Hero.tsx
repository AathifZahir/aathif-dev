import React from "react";
import styles from "../styles/mouse.module.css"; // Import the CSS module

export default function Hero() {
  return (
    <div className="bg-background py-4  items-center  min-h-screen">
      <div className="container mx-auto space-y-4 p-20 text-center">
        <h1 className="text-8xl font-bold text-white">AATHIF ZAHIR</h1>
        <h1 className="text-4xl text-white">Software Engineer</h1>
      </div>
      <div className="text-center flex flex-col items-center justify-center mt-20">
        <div className={styles.mouse}>
          <span></span>
        </div>
        <div className="text-white text-center mt-4">Scroll Down</div>
      </div>
    </div>
  );
}
