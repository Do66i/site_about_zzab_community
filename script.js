// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username')
// console.log(elnIputUsername)

// let elFailuerMessage = document.querySelector('.failuer-message')
// console.log(elFailuerMessage)

// elFailuerMessage.classList.remove('hide')

// 
//   console.log(elInputUsername.value)

  let elFailuerMessage = document.querySelector('.failure-message')
  let elSuccessMessage = document.querySelector('.success-message')
  let elPassword = document.querySelector('#password')
  let elPasswordRetype = document.querySelector('#password-retype')
  let elMissMatchMessage = document.querySelector('.mismatch-message')

  elInputUsername.onkeyup = function () {
    if(isMoreThan4Length(elInputUsername.value)) {
      //성공 메세지가 보여야 함
      elSuccessMessage.classList.remove('hide')

      //실패 메세지가 가려져야 함
      elFailuerMessage.classList.add('hide')
    }
    else {
      //성공 메세지가 가려져야 함
      elSuccessMessage.classList.add('hide')

      //실패 메세지가 보여야 함
      elFailuerMessage.classList.remove('hide')
    }
  }

  elPasswordRetype.onkeyup = function () {
    if(isMatch(elPassword.value, elPasswordRetype.value) === true) {
      elMissMatchMessage.classList.add('hide')
    } else {
      elMissMatchMessage.classList.remove('hide')
    }
  }

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (password1 === password2) {
    return true
  }
  else {
    return false
  }
}

