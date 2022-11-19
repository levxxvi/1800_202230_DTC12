    function addSchedule() {
        console.log("inside add schedule")
        let Date = document.getElementById("date").value;
        let Breakfast = document.getElementById("breakfast").value;
        let Lunch = document.getElementById("lunch").value;
        let Snack = document.getElementById("snack").value;
        let Dinner = document.getElementById("dinner").value;
        console.log(Date, Breakfast, Lunch, Snack, Dinner);
    
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var currentUser = db.collection("users").doc(user.uid)
                var userID = user.uid;
                //get the document for current user.
                currentUser.get()
                    .then(userDoc => {
                        var userEmail = userDoc.data().email;
                        db.collection("userSchedule").add({
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
                // No user is signed in.
            }
        });
    }