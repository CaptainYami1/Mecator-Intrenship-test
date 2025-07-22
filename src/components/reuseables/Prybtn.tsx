

const Prybtn = (props:any) => {
  return (
    <>
        <button onClick={props.onClick} disabled={props.disabled} className={`${
        props.disabled
          ?"bg-blue-300 text-white font-semibold w-full py-[16px] px-4 rounded-md text-md" : "bg-[#0066FF] hover:bg-blue-500 text-white font-semibold w-full py-[16px] px-4 rounded-md text-md"}`}>
            {props.text}
        </button>
    </>
  )
}

export default Prybtn