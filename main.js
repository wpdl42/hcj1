document.getElementById('time').innerHTML = new Date().toLocaleString()

// .toLocaleString() 메서드는 Date 객체의 날짜와 시간 부분을 읽기 쉬운 문자열로 반환합니다. 예를 들어, "2024/06/24 10:30:00"와 같은 형식으로 날짜와 시간을 표시합니다.

// 현재 날짜와 시간을 가져와서 'time'이라는 ID를 가진 요소의 HTML 내용으로 설정합니다. date() 객체는 현재 날짜와 시간을 나타내며, innerHTML 속성을 사용하여 해당 요소의 내용을 업데이트합니다.

function pink() {
  document.body.style.backgroundColor = 'pink'
  // 배경색을 핑크로 변경하는 함수입니다.
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
  // 배경색을 라이트블루로 변경하는 함수입니다.
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
  // 배경색을 노란색으로 변경하는 함수입니다.
}

function linen() {
  document.body.style.backgroundColor = 'linen'
  // 배경색을 리넨으로 변경하는 함수입니다.
}

function colorChange() {
  document.body.style.backgroundColor = prompt(
    '원하는 색상을 입력하세요 (예: red, blue, #ff0000)',
  )
  // 전달된 색상 값으로 배경색을 변경하는 함수입니다.
}

function showhtml() {
  document.getElementById('fig').src = 'HTML5.png'
  document.getElementById('desc').innerHTML =
    '<span style="color: red;"><b>HTML5</b></span>는 웹 개발에서 사용되는 마크업 언어입니다.'
}
function showcss() {
  document.getElementById('fig').src = 'css.png'
  document.getElementById('desc').innerHTML =
    '<span style="color: blue;"><b>CSS3</b></span>는 웹 개발에서 사용되는 스타일 시트 언어입니다.'
}
function showjs() {
  document.getElementById('fig').src = 'javascript.png'
  document.getElementById('desc').innerHTML =
    '<span style="color: green;"><b>JavaScript</b></span>는 웹 개발에서 사용되는 프로그래밍 언어입니다.' //
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}

// showhtml(), showcss(), showjs() 함수는 각각 HTML5, CSS3, JavaScript에 대한 이미지를 표시하고 설명을 업데이트하는 함수입니다. hide() 함수는 이미지와 설명을 숨기는 역할을 합니다.
// 각 버튼에 대한 이벤트 핸들러를 설정하여 사용자가 버튼을 클릭하거나 마우스를 올렸을 때 해당 함수가 실행되도록 합니다.
//<b> 태그는 텍스트를 굵게 표시하는 HTML 태그입니다. 예를 들어, '<b>HTML5</b>'는 "HTML5"라는 텍스트를 굵게 표시합니다.
// prompt() 함수는 사용자로부터 입력을 받을 때 사용되는 함수입니다. 예를 들어, prompt('원하는 색상을 입력하세요')는 사용자에게 "원하는 색상을 입력하세요"라는 메시지를 표시하고, 사용자가 입력한 값을 반환합니다.
//<span> 태그는 인라인 요소로, 텍스트의 일부분을 스타일링하거나 특정 부분에 대한 설명을 추가할 때 사용됩니다. 예를 들어, '<span style="color: red;">빨간색 텍스트</span>'는 "빨간색 텍스트"라는 텍스트를 빨간색으로 표시합니다.
//innerText는 요소의 텍스트 콘텐츠를 설정하거나 반환하는 속성입니다. 예를 들어, document.getElementById('desc').innerText = '설명 텍스트'는 'desc'라는 ID를 가진 요소의 텍스트 콘텐츠를 "설명 텍스트"로 설정합니다. innerHTML과 달리 innerText는 HTML 태그를 해석하지 않고 단순히 텍스트로 처리합니다.
