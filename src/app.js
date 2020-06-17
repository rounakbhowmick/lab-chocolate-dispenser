var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    if (count > 0 && color.length > 2) {
        for (let i = 0; i < count; i++)
            //Unshift-Add new element to the beginning of the array
            chocolates.unshift(color);
    } else
        return "Number cannot be zero/negative";

}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let newarr = [];
    if (number <= 0) return 'Number cannot be zero/negative';
    if (number > 0 && chocolates.length >= number) {
        for (let i = 0; i < number; i++) {
            //Shift:Removes first element from the array
            newarr.push(chocolates.shift());
        }
        return newarr;
    } else {
        return "Insufficient chocolates in the dispenser";
    }

}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let dis = [];
    if (number <= 0) return 'Number cannot be zero/negative';
    if (number < chocolates.length) {
        for (let i = 0; i < number; i++) {
            dis.push(chocolates.pop());
        }
        return dis;
    } else
        return 'Insufficient chocolates in the dispenser';
}
//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    let dis = [];
    if (number <= 0) return 'Number cannot be zero/negative';
    if (number > chocolates.length) return "Insufficient chocolates in the dispenser";
    else {
        for (let i = 0; i < number; i++) {
            dis.push(chocolates.pop());

        }
        return dis;
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
//[13, 17, 13, 15, 17, 16, 9]
function noOfChocolates(chocolates) {
    var dis = [];
    var cho = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    if (chocolates.length == 1) return [1];
    if (chocolates.length == 0) return [];
    for (i = 0; i < cho.length; i++) {
        let count = 0;
        for (j = 0; j < chocolates.length; j++) {
            if (cho[i] == chocolates[j])
                count++
        }
        if (count != 0)
            dis.push(count);
    }
    return dis;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    //Finding unique element and storing it in array with the help of set 
    let myset = [...new Set(chocolates)];
    let chococount = [],
        maximumno, maximumnoindex, sortedArray = [];
    //Storing repeated choclate colours count values in new arrays(chococount)
    for (let i = 0; i < myset.length; i++) {
        let count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (myset[i] == chocolates[j])
                count++
        }
        chococount.push(count);
    }
    //Terminates when there is an ampty array
    while (chococount.length > 0) {
        //Stores maximum value in chocount array
        maximumno = Math.max(...chococount);
        maximumnoindex = chococount.indexOf(maximumno);
        //Pushing it to new array no of times it is repeatd in chocolate array(finding no of times from maximumno)
        for (i = 0; i < maximumno; i++) {
            sortedArray.push(myset[maximumnoindex]);
        }
        //Deleting the item and count value from two array
        chococount.splice(maximumnoindex, 1);
        myset.splice(myset, 1);
    }
    return (sortedArray);
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    let count = 0;
    if (number <= 0) return 'Number cannot be zero/negative';
    if (color == finalColor) {
        return "Can't replace the same chocolates";
    }
    //Checking wether number is more than 0 and color is valid or not
    if (color.length > 2 && finalColor.length > 2) {
        for (let i = 0; i < chocolates.length; i++) {
            if (number >= count && chocolates[i] == color) {
                chocolates[i] = finalColor;
                count++;
            } else
                break;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let count = 0;
    let arr = [];
    //Checking whether the colour is valid or invalid
    if (color.length > 2 && finalColor.length > 2) {
        if (color == finalColor)
            return "Can't replace the same chocolates";
        else {
            //Replacing the color
            for (let i = 0; i < chocolates.length; i++) {
                count++;
                chocolates[i] = finalColor;
            }
        }

    } else
        return "Invalid input of colour"
    arr = [count, chocolates];
    return arr;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed