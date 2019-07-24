let coffeeIsGrinding = true;

const pressGrindBeans = () => {
    if(coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans()
/*
const drinksOrder = (size, drinktype) => {
    console.log(`Ordering cup size ${size} ${drinktype}`);
}
drinksOrder("Large","Coke");
drinksOrder("Medium","Pepsi");
drinksOrder("Small","OJ");
*/
/*
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(3,5));
*/

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("the temperature is " + getFahrenheit(15) + "°F");
// for calculating Farenheit - first equation becomes celsius *(9/5)
//recursive functions are USEFUL

/*
let orderCount = 0;
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount ++;
}
takeOrder("margherita","olives");
takeOrder("salami","basil");
takeOrder("pineapple","ham");
*/

/*const cashWithdrawal = (pinNum, balance) => {
    return pinNum.length == 5;
}
const 100>=balance{
    console.log()
}*/


//cash withdrawal=<balance, fixed: pin number, balance
//if(age > 17 && country == "UK"){

/*let accbalance = 1000;
let accpin = 1234;

const cashMachine == (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal){
        console.log("your pin is correct and the ${cash} you requested is being dispensed."); {
        }            
else if (pinNum != accPin){

    }
*/
