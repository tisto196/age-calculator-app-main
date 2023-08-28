const inputs = document.querySelectorAll(".input");
const frontd = document.querySelector(".frontd");
const frontm = document.querySelector(".frontm");
const fronty = document.getElementById("fronty");
const btn = document.querySelector(".cbtn");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.style.borderColor = "hsl(259, 100%, 65%)";
  });
});

const date = new Date();
const currentDay = date.getUTCDay();
const currentMonth = date.getUTCMonth() + 1;
const currentyear = date.getUTCFullYear();

// console.log(byear);

btn.addEventListener("click", () => {
  if (day || month || year != null) {
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    if (currentDay > day) {
      const bday = currentDay - day;

      frontd.innerHTML = bday;
    }
    if (currentMonth > month) {
      const bmonth = currentMonth - month;
      frontm.innerHTML = bmonth;
    }
    if (month > currentMonth) {
      const bmonth = month - currentMonth;
      frontm.innerHTML = bmonth;
    }
    if (day > currentDay) {
      const bday = day - currentDay;

      frontd.innerHTML = bday;
    }
    const byear = currentyear - year;

    // const now = fronty.innerHTML;
    console.log(currentyear);
    console.log(year);
    console.log(byear);
    // console.log(now);
    fronty.innerHTML = byear;
  } else {
    alert("input required to proceed");
  }
});
