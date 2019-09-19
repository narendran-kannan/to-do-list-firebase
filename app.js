var firebaseConfig = {
      apiKey: "AIzaSyCmCREHfIWEPssX0d7dut0IPKPb8DBpml0",
      authDomain: "todolist-40a80.firebaseapp.com",
      databaseURL: "https://todolist-40a80.firebaseio.com",
      projectId: "todolist-40a80",
      storageBucket: "todolist-40a80.appspot.com",
      messagingSenderId: "910831599000",
      appId: "1:910831599000:web:fed9fc90b43e141960ffed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase
      .database()
      .ref()
      .child("list");
    //var li = db.child("todo");
    var uls = document.getElementById("list");

    db.on("child_added", snap => {
      var lis = document.createElement("li");
      lis.innerText = snap.val();
      lis.id = snap.key;
      uls.appendChild(lis);
    });
    db.on("child_changed", snap => {
      var lichanged = document.getElementById(snap.key);
      lichanged.innerText = snap.val();
    });
    function add() {
      var text = document.getElementById("in").value;
      var random = Math.floor(Math.random() * 100) + 1;
      var ref = firebase
        .database()
        .ref()
        .child("list");
      ref.child(random).set(text);
      document.getElementById("in").value = "";
    }
