"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import TimeCounter from "@/components/TimeCounter";
import Show from "@/components/Show";
import Intro from "@/components/Intro";
import Outro from "@/components/Outro";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

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
      title: "Процессын шинж чанарууд",
      description:
        "Thread нь процессын нэг хэсэг болох гүйцэтгэх нэгж юм. Олон хэлхээ нь өгөгдөл, код, файл гэх мэт мэдээллийг хуваалцдаг. Бид thread-ийг гурван өөр аргаар хэрэгжүүлж болно: ",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Цөмийн түвшний хэлхээнүүд",
        "⦁	Хэрэглэгчийн түвшний хэлхээс",
        "⦁	Гибрид утаснууд",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thread гэж юу вэ?",
      description: "Процессын чухал шинж чанаруудыг доор жагсаав:",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Процесс бүрийг бий болгохын тулд процесс тус бүрт тусдаа системийн дуудлага шаардагдана.",
        "⦁	Энэ нь тусгаарлагдсан гүйцэтгэх байгууллага бөгөөд өгөгдөл, мэдээллийг хуваалцдаггүй.",
        "⦁	Процессууд нь IPC (Inter-Process Communication) механизмыг ашигладаг бөгөөд энэ нь системийн дуудлагын тоог ихээхэн нэмэгдүүлдэг.",
        "⦁	Процессын удирдлага нь илүү олон системийн дуудлага шаарддаг.",
        "⦁	Процесс нь стек, санах ой бүхий овоолгын санах ой, өгөгдлийн зураглалтай байдаг.",
      ],
    },

    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thread гэж юу вэ?",
      description: "Процессын чухал шинж чанаруудыг доор жагсаав:",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Процесс бүрийг бий болгохын тулд процесс тус бүрт тусдаа системийн дуудлага шаардагдана.",
        "⦁	Энэ нь тусгаарлагдсан гүйцэтгэх байгууллага бөгөөд өгөгдөл, мэдээллийг хуваалцдаггүй.",
        "⦁	Процессууд нь IPC (Inter-Process Communication) механизмыг ашигладаг бөгөөд энэ нь системийн дуудлагын тоог ихээхэн нэмэгдүүлдэг.",
        "⦁	Процессын удирдлага нь илүү олон системийн дуудлага шаарддаг.",
        "⦁	Процесс нь стек, санах ой бүхий овоолгын санах ой, өгөгдлийн зураглалтай байдаг.",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thread-ийн шинж чанарууд",
      description: "Thread-ийн чухал шинж чанаруудыг доор жагсаав: ",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Нэг системийн дуудлага нь нэгээс олон хэлхээ үүсгэж болно",
        "⦁	Threads нь өгөгдөл, мэдээллийг хуваалцдаг.",
        "⦁	Threads нь заавар, глобал болон нуруулдан бүсүүдийг хуваалцдаг. Гэсэн хэдий ч энэ нь өөрийн бүртгэл, стектэй.",
        "⦁	Thread Management нь хуваалцсан санах ойг ашиглан гүйлгээ хоорондын холболтын улмаас системийн дуудлагыг маш бага зарцуулдаг эсвэл огт байдаггүй.",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Гол ялгаа",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
      list: [
        "⦁	Процесс гэдэг нь програм ажиллаж байна гэсэн үг, харин thread гэдэг нь процессын хэсэг гэсэн үг.",
        "⦁	Процесс нь хөнгөн биш, харин утас нь хөнгөн байдаг.",
        "⦁	Процессыг дуусгахад илүү их цаг зарцуулдаг ба хэлхээг дуусгахад бага хугацаа шаардагдана.",
        "⦁	Процесс бүтээхэд илүү их цаг зарцуулдаг бол Thread хийхэд бага хугацаа шаардагдана.",
        "⦁	Үйл явц нь контекст шилжихэд илүү их цаг зарцуулдаг бол Threads контекст шилжихэд бага хугацаа шаардагддаг.",
        "⦁	Процесс нь ихэвчлэн тусгаарлагдсан байдаг бол Threads нь санах ойг хуваалцдаг.",
        "⦁	Процесс нь өгөгдөл хуваалцахгүй бөгөөд Threads нь өөр хоорондоо өгөгдлийг хуваалцдаг.",
      ],
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*b3Id83fP8zgIXdKXLzAZVQ.png",
      isImageOnly: true,
    },
    {
      image:
        "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Multithreading гэж юу вэ?",
      description:
        "Multithreading гэдэг нь үйлдлийн систем доторх олон урсгалын гүйцэтгэлийг хэлнэ. Энгийнээр хэлбэл, нэг процессын хоёр ба түүнээс дээш хэлхээг нэгэн зэрэг гүйцэтгэнэ ",
      titleClassName: "text-white",
      descClassName: "text-gray-200",
      isImageOnly: false,
    },
  ];

  React.useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  return (
    <>
      <TimeCounter />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Intro isActive={activeIndex === 0} />
        </SwiperSlide>
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
              isActive={index + 1 === activeIndex}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Outro isActive={activeIndex === 0} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
