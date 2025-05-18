const lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

console.log(addLunchToEnd(lunches, "rice"))

const addLunchToStart = (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

console.log(addLunchToStart(lunches, "amala"));
console.log(addLunchToStart(lunches, "garri"));
console.log(addLunchToStart(lunches, "Pizza"));

function removeLastLunch(arr) {
  if (arr.length === 0){
    console.log("No lunches to remove.")
    return;
  }
  let removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  return arr;
}

console.log(removeLastLunch(lunches));

const removeFirstLunch = (arr) => {
  if(arr.length === 0){
    console.log("No lunches to remove.");
    return;
  }
  let removedItem = arr.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr){
  if(arr.length === 0){
    console.log("No lunches available.");
    return;
  }
  let randomItem = arr[Math.floor(Math.random() * arr.length)]
  console.log(`Randomly selected lunch: ${randomItem}`);
}


const showLunchMenu = (arr) => {
  if (arr.length === 0){
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}

showLunchMenu(lunches);