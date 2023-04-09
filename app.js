const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);

/////////////////////////////////////////////////////
const fucking = document.querySelector(".what h1");

function handleWhat() {
  fucking.classList.toggle("clicked");
}

fucking.addEventListener("click", handleWhat);
////////////////////////////////////

const make = document.querySelector(".why h1");

function handleWhy() {
  const activeClass = "active sexty-font";
  if (make.className === activeClass) {
    make.className = "";
  } else {
    make.className = activeClass;
  }
}

make.addEventListener("click", handleWhy);

////////////////////////////
const world = document.querySelector(".hi h1");

function handleHi() {
  const currentColor = world.style.color;
  let newColor;
  if (currentColor === "tomato") {
    newColor = "pink";
  } else {
    newColor = "tomato";
  }
  world.style.color = newColor;
}

function handeMouseEnter() {
  world.innerText = "Mouse is here";
}

function handeMouseLeave() {
  world.innerText = "Mouse is gone";
}

function handleResize() {
  document.body.style.backgroundColor = "blue";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS No Wifi !");
}
function handleWindowOnline() {
  alert("All Good!");
}

world.addEventListener("click", handleHi);
world.addEventListener("mouseenter", handeMouseEnter);
world.addEventListener("mouseleave", handeMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
