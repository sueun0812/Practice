// # review.js

// ! 1. Todo 리스트 만들기

// ? 객체 구성
// - id : 할일의 고유 식별자 숫자or문자열로 표현
// - content : 할일의 내용을 문자열로 저장
// - completed : 할일의 완료 상태를 나타내는 boolean 데이터

// ? 프로젝트 구조
// 1. 할일 추가 : 객체를 사용하여 할일 저장, 배열에 객체 추가
// 2. 할일 수정 : 완료된 할일의 completed값을 전환(토글)
// 3. 할일 삭제 : 원하는 할일 목록에서 제거
// 4. 할일 목록 출력 : 현재 목록 상태 출력

let todos = [];

function addTodo(content) {
  const newTodo = {
    id: todos.length + 1,
    content: content,
    completed: false
  };

  todos.push(newTodo);
  displayTodos();
}

function toggleTodo(id) {
  
}
