var currentUser          

function writeSchedule() {
    //define a variable for the collection you want to create in Firestore to populate data
    var scheduleRef = db.collection("schedule");

    scheduleRef.add({
        title: 'BLT sandwich',
        start: '2022-11-01T12:00:00',
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    scheduleRef.add({
        title: 'Ramen',
        start: '2022-11-01T18:00:00',
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    scheduleRef.add({
        title: 'Avocado toast',
        start: '2022-11-07T12:00:00',
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    scheduleRef.add({
        title: 'Butter chicken',
        start: '2022-11-07T18:00:00',
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    scheduleRef.add({
        title: 'PB jelly sandwich',
        start: '2022-11-12T10:30:00',
        end: '2022-11-12T12:30:00'
    });
    scheduleRef.add({
        title: 'Tomato soup',
        start: '2022-11-12T12:00:00'
    });
    scheduleRef.add({
        title: 'Fruits',
        start: '2022-11-12T14:30:00'
    });
    scheduleRef.add({
        title: 'Grilled cheese',
        start: '2022-11-12T17:30:00'
    });
    scheduleRef.add({
        title: 'Smoothie bowl',
        start: '2022-11-12T20:00:00'
    });
}