let queen = {
  direction1: "N",
  position: {
    X: 0,
    Y: 0
  }
};
var givendata = prompt("Give the data of direction and steps");
var array = givendata.split("");
var direction = givendata.slice(0, -1);
for (i = 0; i < array.length; i++) {
  var steps = array[i].slice(-1);
}
changeDirection(steps, direction);
console.log("Number of steps= " + steps);
console.log("Given direction= " + direction);
function changeDirection(steps, direction) {
  var dir = direction;
  console.log(dir);
  switch (dir) {
    case "S":
      queen.position.X = queen.position.X + steps;
      console.log("Moving south with " + steps + " steps");
      break;
    case "N":
      queen.position.X = queen.position.X - steps;
      break;
    case "W":
      queen.position.Y = queen.position.Y - steps;
      break;
    case "E":
      queen.position.Y = queen.position.Y + steps;
      break;
    case "NE":
      queen.position.X = queen.position.X - steps;
      queen.position.Y = queen.position.Y + steps;
      break;
    case "SE":
      queen.position.X = queen.position.X + steps;
      queen.position.Y = queen.position.Y + steps;
      break;
    case "NW":
      queen.position.X = queen.position.X - steps;
      queen.position.Y = queen.position.Y - steps;
      break;
    case "SW":
      queen.position.X = queen.position.X + steps;
      queen.position.Y = queen.position.Y - steps;
      break;
  }
  console.log(queen.direction);
  console.log(queen.position);
}
