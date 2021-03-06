var firebaseConfig = {
      apiKey: "AIzaSyBMbLsmo627ZSdKWGrmQhlRtwNtEBl7S88",
      authDomain: "kwitter-project-82c4d.firebaseapp.com",
      databaseURL: "https://kwitter-project-82c4d-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-82c4d",
      storageBucket: "kwitter-project-82c4d.appspot.com",
      messagingSenderId: "334979863250",
      appId: "1:334979863250:web:9175d1927cf90677fd530b"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "Kwitter_Chat.html";
  }

  function getData(){
        firebase.database().ref("/").on('value', function(snapshot)
        {
              document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
              {
                    childKey = childSnapshot.key; Room_names = childKey;
                    console.log("Room Name - " + Room_names); 
                    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                    document.getElementById("output").innerHTML += row;
                }); }); }
                getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_Chat.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "Kwitter.html";
}