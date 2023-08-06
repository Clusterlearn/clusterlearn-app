const frame = ({
  digit,
  color,
  textColor,
  borderColor,
  borderWidth,
  borderRadius,
}) => {
   

  const containerStyle = {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: color,
    fontFamily: "verdana",
    color: textColor,
    // Add any other desired styles
  };

  return (
    <div
      style={containerStyle}
      className="rounded-full w-[82px] h-[82px] p-4 gap-3 justify-center items-center text-white
            font-normal text-[36px] leading-[45px]
        "
    >
      {digit}
    </div>
  );
};

export default frame;
