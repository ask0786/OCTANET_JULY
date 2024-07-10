const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("List-container");

function addTask() {
  if (inputbox.value === "") {
    alert("You must write something !");
  } else {
    // in this condition is creating an HTML element with the tag name li .. and in is stoing this element in the li variable
    let li = document.createElement("li");
    // and in the li we will have to add the text also, and the text will be that which we have entered in the input feild
    li.innerHTML = inputbox.value;
    // now we have to display this li and this li should be visible in this list container
    listcontainer.appendChild(li);
    //append or add a new child element (li in this case) to a parent container (listcontainer)

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // this is the code for cross icon
    li.appendChild(span);
  }

  // after adding the text in the list .. we want it to be empty afterwards
  inputbox.value = "";
  saveData(); // this is the functin which is being called ..so that the updated data can remains saved even after refreshing the page
}

// if we click on the list then it will get checked... and if we click on the cross icone it will get removed

listcontainer.addEventListener(
  "click",
  function (
    e // after clicking:
  ) {
    if (e.target.tagName === "LI") {
      // its checks -it clicked li or not then it will add the checked class name and if the checked class name is already there then it will remove that - because we have used classList.toggle
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // if we clicked on span then it will remove the parent element and the parent element is the li elemet
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// now as of now what is happening is whenever we are refreshing the page .. all the task is getting removed -- we need to fix it
function saveData() {
  // now whenever the new data is added the system should call the function to save
  localStorage.setItem("data", listcontainer.innerHTML);
}

// now we need to display the data whenever we open this website again after some time
function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
