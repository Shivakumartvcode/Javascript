/* 1. Create variables with different data types available in JS and 
      print their data types along with each variable name in the console. */

// 
//number
var num1 = 1;
console.log(num1 + " is a " + typeof num1);
var num2 = 1.0;
console.log(num2 + " is a " + typeof num2);

//string
var str = "shiva";
console.log(str + " is a " + typeof str);

//Boolean
var bool1 = true;
var bool2 = false;
console.log(bool1 + " is a " + typeof bool1);
console.log(bool2 + " is a " + typeof bool2);

//undefined
var x;
console.log("x is a " + typeof x);

//null
var y=null;
console.log(typeof y);


//2. Write a JS program to show an alert message on the loading of the website.
alert("this is alert message");


//3 a. Remove number "6" from the array and console the length of the array
var array = ["1", "2", "3", "4", "5", "6", "7"];
var index = array.indexOf("6")
array.splice(index,1);
console.log(array.length);

/*3 b. Convert all the items of the array to data type number and console each 
items data type, use any of the array iteration methods provided by JS for iteration.*/
var array = ["1", "2", "3", "4", "5", "6", "7"];
var newArr = new Array();
for(var i=0;i<array.length;i++){
    newArr[i]=Number(array[i]);
}
console.log(newArr);

for(var i in newArr){
    console.log(typeof newArr[i]);
}

/*c. Remove last three items of the array, use JS provided array method, then console 
the array and then add "one" and "two" (strings) to the beginning of the array and console the array.*/
var array = ["1", "2", "3", "4", "5", "6", "7"];
array.splice(4,3);
console.log(array);
array.unshift("two");
array.unshift("one");
console.log(array);

/*d. Using any one of the array iteration methods console the string concatenation of all items of the 
array and also console the sum of all the items ( convert to integer before calculating).*/
var array = ["1", "2", "3", "4", "5", "6", "7"];
console.log(array.join(''));
var sum = 0;
for(var i=0;i<array.length;i++){
    sum = sum + parseInt(array[i]);
}
console.log("sum of array elements: "+sum);

//e. Filter out item "3" from the array and console the array (use array method)
var array = ["1", "2", "3", "4", "5", "6", "7"];
var filArray = array.filter(function(num){
    return num!= "3";
})
console.log(filArray);

//f. Iterate the array and console the item, when item is either "3", "6" or "7"
var array = ["1", "2", "3", "4", "5", "6", "7"];
for(i of array){
    if(i=="3" || i=="6" || i=="7"){
        console.log(i);
    }
}

/*g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and 
console only if both items of the array have same data type. (Compare each item of 
this array with each item of the other array)*/
var array1 = ["1", "2", "3", "4", "5", "6", "7"];
var array2 = [1, 2, "3", 4, 5, 6,"7"];

for(i of array1){
    for(j of array2){
        if(i===j){
            console.log(i);
            
        }
    }
}

/*h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and
 console the result only if result is greater than 40.*/
var array = [0,2,3,7,5,6,8];
array.forEach(function(item,index){
    var result = item*index;
    if(result > 40){
        console.log(result);
        
    }
});

//i. Create two arrays with five items each and merge the array into a single array and then console it.
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];
var result = new Array();
var k=0;
for(i in array1){
    result[k]=array1[i];
    k++;
}

for(j in array2){
    result[k]=array2[j];
    k++;
}
console.log(result);
