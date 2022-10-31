import React from "react";

interface ButtonPropsType {
  onClick: () => void; //()안에는 params받는곳
  buttonText: string;
  width: string;
  height: string;
  fontSize: string;
  borderRadius: string;
  cursor: string;
}

const Button = ({
  onClick,
  buttonText,
  width,
  height,
  fontSize,
  borderRadius,
  cursor,
}: ButtonPropsType) => {
  return (
    <div>
      <button style={{ width, height, fontSize, borderRadius, cursor }}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

// 1. 여기서 기본틀을 만들고, 다른곳에서 사용하면 reuseable 된다.
