import React from 'react'


function Div() {
  return (
    <>
    <div className="hello">ㅎㅇ</div>
    <div className="hello">ㅎㅇ</div>
    <div className="hello">ㅎㅇ</div>
    </>
  )
}

export default function JSX01() {
  const welcomeMsg = '환영합니다!';

  const greeting = (name: string) => `안녕하세요 ${name}님^^`;

  const userInfo = {
    name: '아이브',
    age: 15
  };

  const handleClick = (value: string) => {
    console.log(`${value}`);
  }

  const divStyle = {
    backgroundColor: 'orange',
    color: 'width',
    padding: '10px'
  };

  return (
    <>
    <div>{welcomeMsg}</div>
    <div>{greeting('쪼꼬')}</div>
    <div>
      이름 : {userInfo.name} /
      나이 : {userInfo.age}
    </div>

    <hr />
    <Div />
    <hr />

    <button onClick={() => handleClick('클릭')}>클릭해주세요!</button>
    
    <div style={divStyle}>
      div 요소 ! 스타일~~
    </div>
    </>
  );
}
