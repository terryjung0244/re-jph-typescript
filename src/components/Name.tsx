import React from "react";

interface NamePropsType {
  name: string;
  age: number;
}

const Name = ({ name, age }: NamePropsType) => {
  return (
    <div>
      <div>
        {name} / {age}
      </div>
    </div>
  );
};

export default Name;
