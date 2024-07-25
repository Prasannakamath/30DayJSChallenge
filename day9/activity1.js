//task1: Select Html element by its Id and change its text content.
let pTag = document.getElementById("id1");
console.log(pTag.innerHTML);
pTag.innerHTML = "DOM Manipulated";

//task2: Select Html element by classname and change its background color.
let mainClassElements = document.getElementsByClassName("main");
if (mainClassElements.length === 1) {
  mainClassElements[0].style.backgroundColor = "blue";
} else {
  mainClassElements.array.forEach((element) => {
    element.style.backgroundColor = "blue";
  });
}
