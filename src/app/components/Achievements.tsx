"use client";

import AchievmentList from "../data/achievements.json";
import { FreeMode } from "swiper/modules"; // Import Pagination as well
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

console.log(AchievmentList);

interface Achievement {
  title: string;
  desc: string;
  tags: string[];
  image: string;
}

const achievements: Achievement[] = AchievmentList.achievements;

export default function Achievements() {
  return (
    <div className="py-8 w-10/12 mx-auto">
      <div className="container">
        <h1 className="text-4xl text-center font-bold text-p4 mb-8">
          Achievements
        </h1>
        <div className="mt-5 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent from-80% to-background z-10 pointer-events-none" />

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper relative"
            mousewheel={true}
            touchEventsTarget="container"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.title}>
                <div className="p-8 rounded-2xl shadow-lg bg-p6/50 h-[450px] flex flex-col justify-between gap-2 w-96">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-bold text-p5 mt-2">
                    {achievement.title}
                  </h2>
                  <p className="text-p5 mt-2">{achievement.desc}</p>
                  <div className="mt-2">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-p3 text-p5 text-sm px-2 py-1 rounded-lg mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
