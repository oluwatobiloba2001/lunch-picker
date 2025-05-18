# Lunch Menu Manager

This project is a simple JavaScript application for managing a lunch menu. It allows you to perform operations such as adding items to the start or end of the menu, removing items, displaying the current menu, and selecting a random lunch item.

## Features

### 1. Add Lunch Items

* **`addLunchToEnd(arr, str)`**: Adds a lunch item to the end of the menu.

  * Parameters:

    * `arr`: The menu array.
    * `str`: The lunch item to add.
  * Returns:

    * Updated menu array.

* **`addLunchToStart(arr, str)`**: Adds a lunch item to the start of the menu.

  * Parameters:

    * `arr`: The menu array.
    * `str`: The lunch item to add.
  * Returns:

    * Updated menu array.

### 2. Remove Lunch Items

* **`removeLastLunch(arr)`**: Removes the last lunch item from the menu.

  * Parameters:

    * `arr`: The menu array.
  * Returns:

    * Updated menu array or a message if the menu is empty.

* **`removeFirstLunch(arr)`**: Removes the first lunch item from the menu.

  * Parameters:

    * `arr`: The menu array.
  * Returns:

    * Updated menu array or a message if the menu is empty.

### 3. View Lunch Menu

* **`showLunchMenu(arr)`**: Displays all items currently in the menu.

  * Parameters:

    * `arr`: The menu array.
  * Returns:

    * A message showing the menu items or indicating the menu is empty.

### 4. Select a Random Lunch

* **`getRandomLunch(arr)`**: Randomly selects a lunch item from the menu.

  * Parameters:

    * `arr`: The menu array.
  * Returns:

    * A message showing the randomly selected lunch or indicating the menu is empty.

## Example Usage

```javascript
const lunches = [];

console.log(addLunchToEnd(lunches, "rice")); // rice added to the end of the lunch menu.
console.log(addLunchToStart(lunches, "amala")); // amala added to the start of the lunch menu.
console.log(addLunchToStart(lunches, "garri")); // garri added to the start of the lunch menu.
console.log(addLunchToStart(lunches, "Pizza")); // Pizza added to the start of the lunch menu.

console.log(removeLastLunch(lunches)); // rice removed from the end of the lunch menu.
console.log(removeFirstLunch(lunches)); // Pizza removed from the start of the lunch menu.

showLunchMenu(lunches); // Menu items: garri, amala
getRandomLunch(lunches); // Randomly selected lunch: garri (example output)
```

## Setup and Installation

1. Clone the repository or copy the code into a `.js` file.
2. Run the file using Node.js or a browser console to interact with the menu management functionality.

## How It Works

1. **Initialization**: A `lunches` array is used to hold the menu items.
2. **Adding Items**: Use `addLunchToEnd` or `addLunchToStart` to add items to the array.
3. **Removing Items**: Use `removeLastLunch` or `removeFirstLunch` to remove items.
4. **Viewing Menu**: Use `showLunchMenu` to display all items in the array.
5. **Random Selection**: Use `getRandomLunch` to pick a random item.

## Contributing

If you would like to contribute or improve this script, feel free to fork the repository and submit a pull request.
