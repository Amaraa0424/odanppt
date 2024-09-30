import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Show = (props: any) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (props.isActive) {
      const tl = gsap.timeline();

      // Reset initial states
      gsap.set([imageRef.current, titleRef.current, textRef.current], {
        clearProps: "all",
      });

      // Image animation
      tl.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: props.isImageOnly ? 0.8 : 1, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Title animation
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0, rotationX: -45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Text animation
      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      tl.fromTo(
        listRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      // Add a subtle hover effect to the title and text
      !props.isImageOnly && gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      gsap.to([textRef.current, listRef.current],{
        y: 10,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      })
      gsap.to(titleRef.current,{
        y: 10,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      })
    }
  }, [props.isActive]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-full"
    >
      <img
        ref={imageRef}
        src={props.image}
        className={`absolute left-0 top-0 ${
          props.isImageOnly ? "object-fill h-screen w-screen z-50" : "-z-10 brightness-[30%] object-cover w-screen h-screen"
        }`}
      />
      <div
        className={`flex flex-col items-center justify-center gap-4 ${
          props.titleClassName
        } ${props.isImageOnly && "hidden"}`}
      >
        <h2 ref={titleRef} className="font-bold text-4xl mb-4 text-center">
          {props.title}
        </h2>
        <p
          ref={textRef}
          className={`w-[600px] font-bold text-lg text-center opacity-0 ${props.descClassName}`}
        >
          {props.description}
        </p>
        {props.list && (
          <ul ref={listRef} className="opacity-0 flex flex-col gap-3 w-[600px]">
            {props.list.map((item: any, index: number) => (
              <li key={index} className="">
                <p className="text-start">{item}</p>
                <hr className="bg-white mt-2 text-base" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Show;
