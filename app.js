// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const newColor = `rgb(${r}, ${g}, ${b})`;
//   document.body.style.backgroundColor = newColor;
// });
// var title = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for(var i=0; i<odd.length;i)

// var lastItem = document.querySelector(".list-grup-item:last-child");
// lastItem.style.color = "coral ";

// const isEven = 10 % 2 === 0 ? true : false;
// console.log(isEven);

// console.log("Bruce" - "Wayne");
// console.log("5" - null);
// console.log(5 + undefined);

// console.log(parseInt(6));

// const var1 = 10;
// const var2 = "10";

// console.log(var1 == var2);
// console.log(var1 === var2);

// function greet(username) {
//   console.log("Good morning " + username);
// }
// // greet("bruce");
// // greet("clark");
// // greet("diana");

// function add(a, b) {
//   return a + b;
// }

// const sum = add(5, 10);
// console.log(sum);
// // **********************

// function add2(c, d) {
//   const sum2 = c + d;
//   console.log(sum2);
// }

// add2(5, 6);

// const myNum = 100;
// const myName = "Superman";
// if (true) {
//   const myName = "Vishwas";
//   console.log(myName);
//   console.log(myNum);
// }
// function testFn() {
//   const myName = "Batman";
//   console.log(myName);
//   console.log(myNum);
// }
// testFn();

// var p = document.createElement("p");
// p.textContent = "this is a paragraph";

// var li = document.querySelector("li");

// // li.appendChild(p);
// var a = li.firstElementChild;

// li.insertBefore(p, a);
// li.remove();

// document.getElementById("header").innerHTML = "tech with tim!";
// document.getElementById("inp").value = "hello";

// const items = [
//   { name: "bike", price: 100 },
//   { name: "keyboard", price: 25 },
//   { name: "TV", price: 200 },
//   { name: "album", price: 10 },
//   { name: "book", price: 5 },
//   { name: "phone", price: 500 },
//   { name: "computer", price: 1000 },
// ];

// const filterItems = items.filter((items) => {
//   return items.price <= 100;
// });
// console.log(filterItems);

// **************************************************************
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;

// GETELEMENTBYID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "googbye";
// headerTitle.innerHTML = "<h3>hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";

// queryselector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "helloWorld";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// var item = document.querySelector(".list-grup-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-grup-item:last-child");
// lastitem.style.color = "red";

// var secondChild = document.querySelector(".list-grup-item:nth-child(2)");
// secondChild.style.color = "blue";
// var thirdChild = document.querySelector(".list-grup-item:nth-child(3)");
// thirdChild.style.color = "yellow";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
// }

// ****************part2*********************
//  parentElelement
//  console.log()

// var itemList = document.querySelector("#items");
// console.log(itemList.children);

// ************create element

// var newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", " hello Div");
// var newDivText = document.createTextNode("Hello World");
// const container = document.querySelector(".container");
// container.appendChild(newDiv);
// console.log(newDiv);

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);
// var button = document
//   .getElementById("button1")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   const title = document.getElementById("header-title");
//   //   title.textContent = "changed";
//   //   const main = document.querySelector("#main");
//   //   const background1 = (main.style.backgroundColor = "blue");
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // var output = document.getElementById("output");

//   // console.log(e.type);
//   console.log(e.altKey);
// }

var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");
  var btn = document.createElement("button");
  //add class
  li.className = "list-grup-item";
  btn.innerText = "X";
  li.innerText = newItem;
  var newlia = itemsList.appendChild(li);
  newlia.appendChild(btn);

  //
}

// remove items
function removeItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
    }
  }
}
