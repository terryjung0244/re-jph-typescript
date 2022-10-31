import React from "react";
import { useState } from "react";
import Name from "./components/Name";
import Button from "./components/reusableComponents/button/Button";
import Input from "./components/reusableComponents/input/Input";

interface JphResponse {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface JphModel {
  id: number;
  title: string;
  userId: number;
}

const App = () => {
  const [data, setData] = useState<JphModel[]>([]); // state에 실질적으로 사용될 데이터는 JphModel이다.
  const onClickFunc = async () => {
    //이름 잘못 지었음.
    const JphApiBase = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const JphResponse: JphResponse[] = await JphApiBase.json();
    const parsedData: JphModel[] = JphResponse.map((jphData: JphResponse) => {
      return {
        //Map을 돌렸을때, 리턴되는값은 배열이다.
        id: jphData.id ?? 0,
        title: jphData.title ?? "",
        userId: jphData.userId ?? 1,
      };
    });
    setData(parsedData);
  };

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
        {data.map((element: JphModel) => {
          return (
            <div key={element.id}>
              {element.title} | {element.userId}
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
