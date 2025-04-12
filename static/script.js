// static/script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const idSpan = document.getElementById("google-id");
  const pwSpan = document.getElementById("google-pw");

  // 예시용 학생 데이터
  const students = [
    { studentId: "202301", name: "김철수", googleId: "chulsoo.kim@school.com", password: "abcd1234" },
    { studentId: "202302", name: "이영희", googleId: "younghee.lee@school.com", password: "pass5678" },
    { studentId: "202303", name: "박지민", googleId: "jimin.park@school.com", password: "hello2023" },
    // 원하는 만큼 추가 가능
  ];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputId = document.getElementById("student-id").value.trim();
    const inputName = document.getElementById("student-name").value.trim();

    // 학생 검색
    const found = students.find(student =>
      student.studentId === inputId && student.name === inputName
    );

    if (found) {
      idSpan.textContent = found.googleId;
      pwSpan.textContent = found.password;
    } else {
      idSpan.textContent = "해당 정보를 찾을 수 없습니다.";
      pwSpan.textContent = "-";
    }
  });
});
