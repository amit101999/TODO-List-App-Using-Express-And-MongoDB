const addBtn = document.getElementById("add"); // for  adding new itmes
const todoText = document.getElementById("todoText"); //  for adding text
const addingTodo = document.getElementsByClassName("todoItems")[0]; // todo item container
const notification = document.getElementById("notification"); // notification container
let checked; // checked wheter item is checked or not

const notificationMessage = (msg) => {
  let text = ""; // toast text
  let toast = document.createElement("p"); // created empty toast

  if (msg.includes("success")) {
    //for success  msg
    toast.classList.add("success"); // added success class ,now color of this toasst will be green using css
    text = `Todo Added successfully <i class="fa-solid fa-thumbs-up fa-beat"></i>`;
  }
  if (msg.includes("deleted")) {
    //for deleted msg
    toast.classList.add("delete"); // added delete class ,now color of this toasst will be red using css
    text = `Todo Deleted <i class="fa-solid fa-thumbs-up fa-beat"></i>`;
  }

  if (msg.includes("empty")) {
    toast.classList.add("empty"); // added delete class ,now color of this toasst will be red using css
    text = `Please write something !!!!`;
  }

  toast.innerHTML = text;
  notification.appendChild(toast); // appending text int the toast container

  setTimeout(() => {
    // now after 3s seconds taost will disappered
    toast.remove();
  }, 3000);
};

const addTodo = (e) => {
  const text = todoText.value; // taking the user input from intput text
  if (text === "") {
    // checking if user entered empty text
    notificationMessage("empty");
  } else {
    notificationMessage("success"); // displaying todo msg
  }
};

const deleteTodo = (e) => {
  notificationMessage("deleted");
};

addBtn.addEventListener("click", addTodo);
addingTodo.addEventListener("click", function (e) {
  if (e.target.type === "checkbox") {
    // if user clicks checkbox
    checked = true;
  }
  if (e.target.tagName === "I") {
    // if user clicks deletd box
    deleteTodo(e, checked);
  }
});
