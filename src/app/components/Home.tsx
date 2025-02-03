export default function Home() {
  return (
    <div className="container flex flex-col sm:flex-col-reverse md:flex-row justify-center items-center mt-20 gap-10 md:gap-20">
      {/* Text Section */}
      <div className="w-full md:w-2/5">
        <div className="text-6xl md:text-8xl text-p3 font-inika">
          Hello
          <br />
          World,
        </div>
        <div className="text-lg md:text-xl text-p4 mt-5 pr-20">
          I'm Aathif, passionate about creating and collaborating on impactful
          technologies. Explore my work, and let's connect to bring innovative
          ideas to life!
        </div>
        <div className="rounded-xl bg-p4 w-fit p-4 flex mt-10 hover:shadow-p4/50 transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-110">
          <a
            href="https://www.dropbox.com/scl/fi/92rqk09pwqc4psznzlyvn/Aathif_Zahir_CV.pdf?rlkey=3rra1ehgin0zwalytk2khl966&st=m970an65&dl=1"
            download={"Aathif_Zahir_CV.pdf"}
            className="flex items-center space-x-4"
          >
            <span className="font-medium">Resume</span>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.25 12.125V15.625C18.25 16.0891 18.0568 16.5342 17.713 16.8624C17.3692 17.1906 16.9029 17.375 16.4167 17.375H3.58333C3.0971 17.375 2.63079 17.1906 2.28697 16.8624C1.94315 16.5342 1.75 16.0891 1.75 15.625V12.125M5.41667 7.75L10 12.125M10 12.125L14.5833 7.75M10 12.125V1.625"
                stroke="#080909"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5">
        <div className="relative flex justify-center items-center">
          <img
            src="/images/me.png"
            alt="Aathif's Image"
            className="rounded-full w-64 md:w-80 transition ease-in-out duration-1000 hover:shadow-glow"
          />
        </div>
      </div>
    </div>
  );
}
