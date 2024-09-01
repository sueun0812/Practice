import React from 'react'

type User = {
  name: string;
  age: number;
  email: string;
  };

type UserCardProps = { user: User };

// 자식 컴포넌트
const UserCard = ({ user }: UserCardProps) => {
  const { name, age, email } = user;

  return (
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
};

// 부모 컴포넌트
export default function Props02() {
  const userData = {
    name: '송하예',
    age: 10,
    email: 'qwe@naver.com'
  };

  return (
    <div>
      <UserCard user={userData} />
      <UserCard user={{ name: '이무진', age: 12, email: '@naver.com'}} />
    </div>
  );
};
