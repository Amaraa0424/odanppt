const Intro = (props: any) => {
  return (
    <div className="flex relative items-center justify-center w-full h-full bg-zinc-950">
      <div
        className={`flex flex-col text-white font-bold text-5xl items-center justify-center gap-4 ${
          props.titleClassName
        } ${props.isImageOnly && "hidden"}`}
      >
        <div>
          <p>Процесс болон салбар процессын ялгаа</p>
        </div>
        <div className="absolute right-6 bottom-6 flex items-center gap-6">
          <h1>С.Од-Ангараг</h1>
          <h1>B231870085</h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Intro;
