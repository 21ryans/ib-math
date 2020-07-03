function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            alert('ok')
        }, function(error) {
            alert('error' + error)
        });
}

saveToFirebase(email);
