/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program */
function foodItems(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste,
    };
}
var bakeryItems = [
    foodItems("Chocolaty Cake", "Brown", "Sweet"),
    foodItems("Pizza", "Yellowish Golden", "spicy"),
    foodItems("Sandwich", "White", "Spicy"),
    foodItems("Burger", "Light Brown", "spicy"),
];
var wrongIndex = 8;
console.log("Food Item at index".concat(wrongIndex, ":"), bakeryItems[wrongIndex]);
bakeryItems.forEach(function (bakeryItem) { console.log("Name:".concat(bakeryItem.name, " , Color:").concat(bakeryItem.color, ", Taste:").concat(bakeryItem.taste)); });
