const Outro = (props: any) => {
    return (
      <div className="flex relative items-center justify-center w-full h-full bg-zinc-950">
        <div
          className={`flex flex-col text-white font-bold text-5xl items-center justify-center gap-4 ${
            props.titleClassName
          } ${props.isImageOnly && "hidden"}`}
        >
          <div>
            <p>Анхаарал тавьсанд баярллаа.</p>
          </div>
          <div className="absolute right-6 bottom-6 flex items-center gap-6">
            <h1>Congratulations!</h1>
            <h1></h1>{" "}
          </div>
        </div>
      </div>
    );
  };
  
  export default Outro;
  