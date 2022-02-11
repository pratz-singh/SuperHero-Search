const token = 1291908281234705;
let charId = [];
var numeric = null;
charId = JSON.parse(localStorage.getItem("fav"));
charId.forEach(element => {
    $.getJSON('https://superheroapi.com/api/' + token + '/' + element, function (data) {
        if (element != null) {
            $('body').append('<div class="charDiv" onClick="charInfo(this.id)" id="char' + element + '" />');
            $('#char' + element).append('<div><img class="characterImage" src=' + data.image["url"] + '></div><div class="detail"><h2 id="characterName">Name: ' + data.name + '</h2><h2 id=""public>Character ID: ' + data.id + '</h2><h2>Publisher: ' + data.biography["publisher"] + '</h2><h2>Gender: ' + data.appearance["gender"] + '</h2></div><div class="close"><img src="close.png" width="50" height="50" id="' + element + '" onClick="reply_click(this.id)"></div>');
        }
    })
});

function reply_click(clicked_id) {
    const index = charId.indexOf(parseInt(clicked_id));
    if (index > -1) {
        charId.splice(index, 1); // 2nd parameter means remove one item only
    }
    var myobj = document.getElementById("char" + clicked_id);
    myobj.remove();
    localStorage.setItem("favlast", JSON.stringify(charId));
}

function back() {
    numeric = 0;
    localStorage.setItem("favId", numeric);
    localStorage.setItem("favlast", JSON.stringify(charId));
    window.location.replace("index.html");
}

function charInfo(clickId) {
    var myobj2 = document.getElementById(clickId);
    numeric = +myobj2.id.replace('char', '');
    localStorage.setItem("favId", numeric);
    window.location.replace("index.html");
}


localStorage.setItem("favlast", JSON.stringify(charId));