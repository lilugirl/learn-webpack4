import avatar from "./images/avator.jpg";
import angular from "angular";
import "./style.scss";
console.log("hello");
console.log("avatar", avatar);
console.log("angular", angular);
var img = new Image();
img.src = avatar;
img.classList.add("avatar");
var root = document.getElementById("root");
root.append(img);

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map(item => {
  console.log(item);
});
