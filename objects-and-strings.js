
const bouncer = (age) => {
    if (age >= 21) {
        console.log('Have a drink at the bar');
    } else {
        console.log('Nope');
    }
}

bouncer(12);
bouncer(90);

const me = 'Martin';
console.log(me.length);

const myObject = {
    name: 'john',
    age: '41'
}

console.log(myObject['name']);
console.log(myObject.name);

// CHALLENGE




const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant';
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
};

const person = {
    name: 'Michael',
    status: ''
}

findAndLogEmployeeStatus(person);
findAndLogEmployeeStatus({
    name: 'Lester',
    status: ''
});

// findAndLogEmployeeStatus({
//     name: prompt('Enter employee name'),
//     status: ''
// });

//STRINGS CHALLENGE//

const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";

console.log(sonnet.indexOf('orphans'));
console.log(sonnet.length);

const replaceWinter = sonnet.replace('winter', 'yuletide');
const newSonnet = replaceWinter.replace(/ the /gi, ' a large ');

document.getElementById('sonnet').innerHTML += newSonnet;


