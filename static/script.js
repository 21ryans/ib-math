var firebaseConfig = {
apiKey: "AIzaSyDoznQPVPPLaUzKXn9sVEJAK8easxP-6rg",
authDomain: "bob-erqrfo.firebaseapp.com",
databaseURL: "https://bob-erqrfo.firebaseio.com",
projectId: "bob-erqrfo",
storageBucket: "bob-erqrfo.appspot.com",
messagingSenderId: "465444855156",
appId: "1:465444855156:web:162dd83c81189bea856021"
};
firebase.initializeApp(firebaseConfig);

function fpush(type, title, url, user_content, user_update, admin_content, admin_update, location, parent_post_id, poster) {
    var obj = {
        type: type,
        title: title,
        url: url,
        user_content: user_content,
        user_update: user_update,
        admin_content: admin_content,
        admin_update: admin_update,
        location: location,
        parent_post_id: parent_post_id,
        poster: poster
    };
    firebase.database().ref('posts').push().set(obj)
        .then(
            function(snapshot) {
                alert('ok');
            }, 
            function(error) {
                alert(error);
            }
        );
}

FirebaseDatabase.DefaultInstance
    .GetReference("Leaders")
    .GetValueAsync().ContinueWith(task => {
        if (task.IsFaulted) {
            alert('e');
        }
        else if (task.IsCompleted) {
            DataSnapshot snapshot = task.Result;
            alert(snapshot);
        }
    });
