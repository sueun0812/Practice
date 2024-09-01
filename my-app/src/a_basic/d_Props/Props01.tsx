import React from 'react'

type PropsA = {
  name: string;
  colorProps: string;
};

// 자식 컴포넌트
function MultiProps({ name, colorProps }: PropsA) {
  return (
    <div style={{ color: colorProps }}> 반갑습니다. {name}님 !</div>
  );
};

MultiProps.defaultProps = {
  name: '아이유'
};

function ChildComponent(props: { name: string, age: number }) {
  return <div>안녕하세요. {props.name}님 {props.age}살 입니다. </div>
}

// 부모 컴포넌트
export default function Props01() {
  const people = {
    name: '카리나',
    colorProps: 'orange'
  };

  return (
    <div>
      <MultiProps colorProps='lightcoral' />
      <MultiProps name='정수은' colorProps='pink' />
      <MultiProps name='아이유' colorProps='pink' />
      <MultiProps name='강동원' colorProps='blue' />
      <MultiProps {...people} />
      <MultiProps {...people} colorProps='blue' />
      <ChildComponent name='정쪼꼬' age={12} />
    </div>
  )
}
