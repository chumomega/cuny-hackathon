var ref = firebase.database().ref();                           
ref.on("value", function(snapshot){
    document.getElementById("data").innerHTML = JSON.stringify(snapshot.val(), null, 2);
});