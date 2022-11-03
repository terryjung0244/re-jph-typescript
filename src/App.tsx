import React from "react";
import { useState } from "react";

import Name from "./components/Name";
import Button from "./components/reusableComponents/button/Button";
import { useAppDispatch } from "./components/reusableComponents/hook/useAppDispatch";
import useAppSelector from "./components/reusableComponents/hook/useAppSelector";
import Input from "./components/reusableComponents/input/Input";
import { getJphRequestAction } from "./redux/jph/jphAction";
import jphReducer from "./redux/jph/jphReducer";
import { JphModel } from "./service/type/model/jphUserModel";

const App = () => {
  const { loading, error, result } = useAppSelector(
    (state) => state.jphReducer
  );
  const dispatch = useAppDispatch();
  const [data, setData] = useState<JphModel[]>([]); // state에 실질적으로 사용될 데이터는 JphModel이다.
  const onClickFunc = async () => {
    dispatch(getJphRequestAction());
  };

  console.log(loading);

  const alertHello = (data: string = "testing") => {
    alert("Come on!");
  };

  return (
    <div>
      <Button
        onClickFunc={onClickFunc}
        buttonText="Hook Me"
        width="300px"
        height="100px"
        fontSize="60px"
        borderRadius="20px"
        cursor="pointer"
        color="black"
      />
      <Button
        onClickFunc={onClickFunc}
        buttonText="Silent Me"
        width="300px"
        height="100px"
        fontSize="60px"
        borderRadius="20px"
        cursor="pointer"
        color="pink"
      />
      <Button
        onClickFunc={() => alertHello()}
        buttonText="Alert Me"
        width="300px"
        height="100px"
        fontSize="60px"
        borderRadius="20px"
        cursor="pointer"
        color="Brown"
      />
      {/* <Input name="" value="" onChange={} placeholder="" /> */}

      <button onClick={() => onClickFunc()}>Click Me</button>
      <Name name={"terry"} age={50} />
      <div>
        {result.map((JphUser: JphModel) => {
          return (
            <div key={JphUser.id}>
              {JphUser.name} | {JphUser.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// const JphApiBase = await fetch("https://jsonplaceholder.typicode.com/todos");
// const JphResponse: JphResponse[] = await JphApiBase.json(); //처음 받아왔을때 기본틀인 JphResponse의 배열

// const parsedData: JphModel[] = JphResponse.map((jphData: JphResponse) => {
//   //그안에 들어가는 jphData는 배열이 아니고 그안에 들어가는 하나하나 즉, completed, id, title, userId이기에
//   //jphResponse이다. jphResponse[]가 아니라.
//   return <div key={el.id}></div>;
// });
