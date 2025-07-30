const Prybtn = (props: any) => {
  return (
    <>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={`extra max-w-[360px] ${
          props.disabled
            ? "bg-blue-300 text-white font-semibold w-full py-[16px] px-4 rounded-lg text-md"
            : "bg-[#0062e1] hover:bg-blue-400 text-white font-semibold w-full py-[16px] px-4 rounded-md text-md"
        }`}
      >
        {props.text}
      </button>
    </>
  );
};

export default Prybtn;
