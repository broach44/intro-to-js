
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