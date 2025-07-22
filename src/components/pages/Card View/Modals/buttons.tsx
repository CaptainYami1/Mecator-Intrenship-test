

const Buttons= ({onClick}:any) => {
const buttonValues = [1,2,3,4,5,6,7,8,9,"del",0,"clear"]

  return (
   <div className="grid grid-cols-3 gap-6 w-full h-full">
      {buttonValues.map((value, index) => (
        <button
          key={index}
          className=" text-black font-semibold p-3"
       onClick={()=> onClick(value)}
       >
          {value}
        </button>
      ))}
    </div>
  )
}

export default Buttons