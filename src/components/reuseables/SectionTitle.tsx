

const SectionTitle = (props:any) => {
  return (
    <div className="w-full">
        <h2 className="text-[24px] font-semibold">{props.h2}</h2>
          <p className="text-[15px]">
            {props.p}
          </p>
    </div>
  )
}

export default SectionTitle