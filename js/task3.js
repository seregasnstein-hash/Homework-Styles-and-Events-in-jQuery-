const btnBook = $(".btn__book");
let checkbox = $("input:checkbox");
$(".table__container").hide();

function getDate() {
  let date = $("#date").val();
  if (date === "") {
    return alert("Выберите дату");
  }
  date = date.split("-").reverse().join(".");
  return date;
}

function checkboxOn() {
  let result = [];
  checkbox.each(function (elem, index) {
    if ($(this).is(":checked")) {
      let labelText = $(this).siblings("label").text();
      result.push(labelText);
    }
  });
  if (result.length === 0) {
    return alert("Выберите место");
  }
  $('.price__text').text(`Total price: ${64 * result.length}$`)
  return result;
}

function getObj() {
  return {
    seat: checkboxOn(),
    date: getDate(),
    direction: $("#direction").val(),
  };
}

btnBook.click(function () {
  const ticket = getObj();
  ticket.seat.forEach(function (elem) {
      let newRow = `<tr>
      <td>${ticket.direction}</td>
      <td>${ticket.date}</td>
      <td>${elem}</td>
      </tr>`;
      $("#myTable tbody").append(newRow);
    });
    $(".table__container").show();
});

$(".btn__close").click(function () {
  $(".table__container").hide();
  window.location.reload();
});
