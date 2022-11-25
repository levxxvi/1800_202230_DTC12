    function addSchedule() {
       //inside add schedule
        let Date = document.getElementById("date").value;
        let Breakfast = document.getElementById("breakfast").value;
        let Lunch = document.getElementById("lunch").value;
        let Snack = document.getElementById("snack").value;
        let Dinner = document.getElementById("dinner").value;
    
        firebase.auth().onAuthStateChanged(user => {
            // if user is signed in
            if (user) {
                var currentUser = db.collection("users").doc(user.uid)
                var userID = user.uid;
                //get the document for current user.
                currentUser.get()
                    .then(userDoc => {
                        var userEmail = userDoc.data().email;
                        db.collection("users").doc(user.uid).collection("user schedule").add({
                            code: scheduleID,
                            userID: userID,
                            date: Date,
                            breakfast: Breakfast,
                            lunch: Lunch,
                            snack: Snack,
                            dinner: Dinner,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        }).then(()=>{
                            window.location.href = "thanks.html"; //new line added
                        })
                    })
            } else {
                //error message to tell user they are not signed in 
                console.log("No user is signed in.")
            }
        });
    }