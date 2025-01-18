"use client";

import AchievmentList from "../data/achievements.json";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode"; // Import for FreeMode

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
    <div className="py-3 w-10/12 mx-auto">
      <div className="container">
        <h1 className="text-4xl text-center font-bold text-p4">Achievements</h1>
        <div className="gap-4 mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.title}>
                <div className="bg-background p-4 rounded-lg shadow-lg">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h2 className="text-2xl font-bold text-p4 mt-2">
                    {achievement.title}
                  </h2>
                  <p className="text-p4 mt-2">{achievement.desc}</p>
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
