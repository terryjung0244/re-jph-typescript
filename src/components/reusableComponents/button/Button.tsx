import React from "react";
import { ButtonPropsType } from "./Button.interface";
import * as Styled from "./Style.Button";

const Button = ({
  onClickFunc,
  buttonText,
  width = "300px",
  height = "100px",
  fontSize,
  borderRadius,
  cursor,
  color,
}: ButtonPropsType) => {
  return (
    <div>
      <Styled.ButtonStyle
        onClick={onClickFunc}
        buttonText={buttonText}
        width={width}
        height={height}
        fontSize={fontSize}
        borderRadius={borderRadius}
        cursor={cursor}
        color={color}
      >
        {buttonText}
      </Styled.ButtonStyle>
      <div></div>
    </div>
  );
};

export default Button;

// 1. 여기서 기본틀을 만들고, 다른곳에서 사용하면 reuseable 된다.
