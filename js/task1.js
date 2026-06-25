let elements = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
	'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];

let stringLength = $(".string__length-input");
let inputCharacters = [...$(".input__characters")];

function checkboxOn() {
  let result = [];
  inputCharacters.forEach((elem, index) => {
    if (elem.checked) {
      result = [...result, ...elements[index]];
    }
  });

  return result;
}

function randomString(arr, length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += arr[Math.floor(Math.random() * arr.length)];
  }
  return string;
}

$(".btn_generate").click(function () {
  let chars = checkboxOn();
  let length = +stringLength.val();

  if (length <= 0) {
    return alert("Выберите нужное количество символов!");
  }

  if (chars.length === 0) {
    return alert("Выберите из каких символов будет состоять ваша строка!");
  }

  $(".result__input").val(randomString(chars, length))
    .css('color','green')
    .css('font-weight', 'bold');
});
