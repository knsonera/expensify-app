import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*
const database = firebase.database();

// removed
database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

// changed
database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

// added
database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val()
            });
        });

        console.log(expenses);
    });

setTimeout(() => {
    database.ref('expenses').push({
        description: 'Haircut',
        note: '',
        amount: 100,
        createdAt: 879756865456
    });
}, 2000);


const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
}, (err) => {
    console.log('Failed!', err);
});

database.ref().set({
    name: 'Alina U',
    age: 27,
    location: {
        city: "Seattle",
        country: "United States"
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

setTimeout(() => {
    database.ref().update({
        age: 29,
        'location/city': "Boston"
    });
}, 3000);

setTimeout(() => {
    database.ref().update({
        stressLevel: 9,
        job: {
            title: 'Software Engineer',
            company: 'Amazon'
        },
        'location/city': 'Seattle'
    });
}, 5000);

setTimeout(() => {
    database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
    database.ref().update({
        stressLevel: 7,
        'job/company': 'Google'
    });
}, 9000);

database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Failed.', e);
    });

database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('Removed.');
    })
    .catch((e) => {
        console.log('Failed.', e);
    });
*/