const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
};

const myArray = [1, 2, 8, 'bee', 'last', 'first', 'Greg']

indexAndPrint(myArray, 2);

const isIncluded = (arr, name) => {
    if (arr.includes(name)) {
        return `${name} is found!`;
    }  else {
        return `${name} is not here!`;
    };
}

console.log(isIncluded(myArray, 'Greg'));
console.log(isIncluded(myArray, 'Frank'));

// console.log(arr.indexOf(name));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isPalindrome = (str) => {
    const arrayFromStr = str.split('');
    const reversedArray = arrayFromStr.reverse();
    const opposite = reversedArray.join();

    //const opposite = str.split('').reverse().join('')

    if (str === opposite) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('cat')); //false
console.log(isPalindrome('racecar')); //true
console.log(isPalindrome('mom')); //true
console.log(isPalindrome('bear')); //false
