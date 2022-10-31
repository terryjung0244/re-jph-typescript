import styled from "styled-components";
import { ButtonPropsType } from "./Button.interface";

export const ButtonStyle = styled.button<Partial<ButtonPropsType>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
`;

//button은 styled에서 기본으로 제공되므로 <>로 사용해야한다.
