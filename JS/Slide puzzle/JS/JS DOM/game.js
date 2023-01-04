let score = 0;
const scoreTarget = document.querySelector("#scoreTarget");

function updateScore(point) {
  score += point;
  scoreTarget.innerHTML = score;
}

const parent = document.querySelector("ul");

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  // RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
const tileCount = 9;

function getDifferentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 100;
  } else {
    color += 100;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

function reDraw() {
  parent.innerHTML = "";
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, tileCount - 1);

  for (let i = 0; i < tileCount; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    } else {
      li.style.backgroundColor = getDifferentColor(colors);
    }
    li.addEventListener("click", function () {
      if (!isNormal) {
        updateScore(1);
        reDraw();
      } else {
        updateScore(-2);
      }
    });
    parent.appendChild(li);
  }
}

reDraw();

function running() {
  console.log("Running");
}

console.log("Start");

// ariin seconds ni milliseconds baidag 10iin hasah 3 zeregt
setTimeout(running, 2000);

console.log("End");
