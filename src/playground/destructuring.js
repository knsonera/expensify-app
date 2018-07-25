/*// exercise 1

const person = {
    //name: 'Alina',
    age: 26,
    location: {
        city: 'Bellevue',
        temp: 88
    }
};

const {name: firstName = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

// exercise 2

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/

// array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = "New York"] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2', '$2.5', '$2.75'];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);
