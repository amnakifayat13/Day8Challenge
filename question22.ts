/*Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program */

function foodItems(name: string, color: string, taste: string ){
    return{
        name,
        color,
        taste,
    };
}
let bakeryItems = [
    foodItems("Chocolaty Cake", "Brown", "Sweet"),
    foodItems("Pizza", "Yellowish Golden", "spicy"),
    foodItems("Sandwich", "White", "Spicy"),
    foodItems("Burger", "Light Brown", "spicy"),
];
 let wrongIndex = 8;
 console.log(`Food Item at index${wrongIndex}:` , bakeryItems[wrongIndex]);




 bakeryItems.forEach((bakeryItem)=>
 {console.log(`Name:${bakeryItem.name} , Color:${bakeryItem.color}, Taste:${bakeryItem.taste}`)}
 
 )
