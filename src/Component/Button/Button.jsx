
const Button = ({
  textColor,
  text,
  fontSize,
  borderColor,
  borderWidth,
  borderRadius,
  bgColor,
  width,
  height,
  marginTop,
  padding,
}) => {
  const buttonStyle = {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: bgColor,
    color: textColor,
    width: width,
    height: height,
    marginTop: marginTop,
    padding: padding,
    fontSize: fontSize,
    // Add any other desired styles
  };
  return <div className="cursor-pointer text-center font-ver font-normal" style={buttonStyle}>{text}
  </div>;
};

export default Button
