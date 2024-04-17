// test19.js(정규식 연습)
'use strict';

function regexCheck() {
  // 정규표현식변수를 미리 만들어 놓고 수행시켜준다.
  const regex1 = /atom/gm;  // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 'false'반환
  const regex2 = /mbc|kbs|sbs|cjb/g;  //  mbc또는 kbs 또는 sbs 또는 cjb 문자열을 포함하느냐?
  const regex3 = /홍길(동|순)/g;  //  홍길동 또는 홍길수 문자ㅁㄴㅇㄹ열을 포ㅁㄴㅇㄹ함하느냐?
  const regex4 = /[a-z]/g;        // 영문 소문자 포함?
  const regex5 = /[A-Z]/g;        // 영문 대문자 포함?
  const regex6 = /[가-힣]/g;        // 한글 포함?
  const regex7 = /[^a-z]/g;        // 영문 소문자만 포함?
  const regex8 = /[^a-zA-Z0-9]/g;        // 영문 소문자, 영문대문자, 숫자만 포함?
  const regex9 = /[^a-zA-Z가-힣]/g;        // 영문 소문자, 영문대문자, 한글만 포함?
  const regex10 = /[^a-zA-Zㄱ-ㅎ가-힣]/g;        // 영문 소문자, 영문대문자, 한글만 포함?
  const regex11 = /[^a-zA-Z0-9_-]/g;        // 영문 소문자, 영문대문자, _, - 만 포함?

  const regex21 = /\./g;      // '.'을 포함하고 있느냐?
  const regex22 = /\d/g;      // 숫자를 포함하고 있느냐?
  const regex23 = /\D/g;      // 숫자를 포함하고 있지 않느냐?
  const regex24 = /\w/g;      // 영문자/숫자/_ 을 포함하고 있느냐?
  const regex25 = /\W/g;      // 영문자/숫자/_ 만 포함하고 있느냐?
  const regex26 = /\s/g;      // 문장안에 공백(탭포함)을 포함하고 있느냐?

  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요");
    return false;
  } 

  // if(!content.match(regex1)) alert("본문에 atom문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regex2)) alert("본문에 mbc/ksb/sbs/cjb문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regex3)) alert("본문에 홍길동/홍길순문자열을 포함하고 있지 않습니다.");
  // if(!regex4.test(content)) alert("영문소문자를 포함하고 있지 않습니다.");
  // if(!regex5.test(content)) alert("영문대문자를 포함하고 있지 않습니다.");
  // if(!regex6.test(content)) alert("한글을 포함하고 있지 않습니다.");
  // if(regex7.test(content)) alert("영문소문자가 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex8.test(content)) alert("영문소문자/대문자/숫자 가 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex9.test(content)) alert("영문소문자/대문자/한글 이 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex10.test(content)) alert("영문소문자/대문자/한글 이 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex11.test(content)) alert("영문소문자/대문자/한글 이 아닌 다른 문자를 포함하고 있습니다.");
  // if(!regex21.test(content)) alert("'.'이 아닌 다른 문자를 포함하고 있습니다.");
  // if(!regex22.test(content)) alert("숫자를 포함하고 있지 않습니다.");
  // if(regex23.test(content)) alert("숫자 가 아닌 다른 문자를 포함하고 있습니다.");
  // if(!regex24.test(content)) alert("영문/숫자/밑줄(_)을 포함하고 있지 않습니다.");
  // if(regex25.test(content)) alert("영문/숫자/밑줄(_)외에 다른문자를 포함하고 있습니다.");
  if(!regex26.test(content)) alert("문장안에 공백(탭문자포함)을 포함하고 있지 않습니다.");
  else {
    alert("자료가 잘 입력되었습니다. 통과~~~");
    // location.href = "서버로 전송...  url?변수=값&변수2=값2....";
    // myform.submit();
  }
  document.getElementById("content").focus();
}