import React from "react";
import { useState } from "react";

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

  return (
    <div>
      <button onClick={() => onClickFunc()}>Click Me</button>
      <div>
        {data.map((element: JphModel) => {
          return <div key={element.id}>{element.title}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
