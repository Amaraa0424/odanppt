"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import TimeCounter from "@/components/TimeCounter";
import Show from "@/components/Show";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Процесс гэж юу вэ?",
      description:
        "Програмд ​​заасан зохих үйлдлүүдийг гүйцэтгэх боломжийг олгодог программын гүйцэтгэлийг процесс гэнэ.",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
    },
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thread гэж юу вэ?",
      description:
        "Thread нь процессын нэг хэсэг болох гүйцэтгэх нэгж юм. Олон хэлхээ нь өгөгдөл, код, файл гэх мэт мэдээллийг хуваалцдаг. Бид thread-ийг гурван өөр аргаар хэрэгжүүлж болно: ",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Цөмийн түвшний хэлхээнүүд",
        "⦁	Хэрэглэгчийн түвшний хэлхээс",
        "⦁	Гибрид утаснууд"
      ]
    },
  ];

  return (
    <>
      <TimeCounter />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Show
              image={item.image}
              title={item.title}
              description={item.description}
              titleClassName={item.titleClassName}
              descClassName={item.descClassName}
              isImageOnly={item.isImageOnly}
              list={item.list}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
