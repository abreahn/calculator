const display = document.getElementById("display");
const button7 = document.getElementById("button7");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");

let result = ""

button0.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>0</span>`);
  result = result.concat("0")
});
button1.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>1</span>`);
  result = result.concat("1")
});
button2.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>2</span>`);
  result = result.concat("2")
});
button3.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>3</span>`);
  result = result.concat("3")
});
button4.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>4</span>`);
  result = result.concat("4")
});
button5.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>5</span>`);
  result = result.concat("5")
});
button6.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>6</span>`);
  result = result.concat("6")
});
button7.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>7</span>`);
  result = result.concat("7")
});
button8.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>8</span>`);
  result = result.concat("8")
});
button9.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>9</span>`);
  result = result.concat("9")
});

plus.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span> + </span>`);
  result = result.concat(" + ")
});
minus.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span> - </span>`);
  result = result.concat(" - ")
});
multiply.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span> × </span>`);
  result = result.concat(" * ")
});
divine.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span> ÷ </span>`);
  result = result.concat(" / ")
});

point.addEventListener("click", () =>{
  display.insertAdjacentHTML("beforeend", `<span>.</span>`);
  result = result.concat(".")
});

equal.addEventListener("click", () =>{
  result = Function('return ('+result+');')();
  result = String(result);
  display.innerHTML = (result + " ");
});

clear.addEventListener("click", () =>{
  display.innerHTML = ("");
});