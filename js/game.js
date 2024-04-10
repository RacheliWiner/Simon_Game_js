let arr = []
let arrchoise = []
let buttons = []
let count2 = 0;
var sounds = []
//הוספת הכפתורים למערך
buttons.push(document.getElementById("b0"));
buttons.push(document.getElementById("b1"));
buttons.push(document.getElementById("b2"));
buttons.push(document.getElementById("b3"));
buttons.push(document.getElementById("b4"));
buttons.push(document.getElementById("b5"));

//הוספת שמע למערך
sounds.push(new Audio('../audio/0.wav'));
sounds.push(new Audio('../audio/1.wav'));
sounds.push(new Audio('../audio/2.wav'));
sounds.push(new Audio('../audio/3.wav'));
sounds.push(new Audio('../audio/4.wav'));
sounds.push(new Audio('../audio/5.wav'));

//פונקציה המגרילה מספרים 
function random() { 
    arr.push(Math.floor(Math.random() * (6)))
    arrchoise = []
}

//פונקציה שמדליקה את הצבע המתאים ומפעילה את הצליל המתאים
function light(x) {

    if (x == buttons[0]) {
        x.style.backgroundImage = "url('../image/red.jpg')";
        sounds[0].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
    else if (x == buttons[1]) {
        x.style.backgroundImage = "url('../image/blue.jpg')";
        sounds[1].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
    else if (x == buttons[2]) {
        x.style.backgroundImage = "url('../image/green.jpg')";
        sounds[2].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
    else if (x == buttons[3]) {
        x.style.backgroundImage = "url('../image/yellow.jpg')";
        sounds[3].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
    else if (x == buttons[4]) {
        x.style.backgroundImage = "url('../image/orange.jpg')";
        sounds[4].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
    else {
        x.style.backgroundImage = "url('../image/purple.jpg')";
        sounds[5].play();
        setTimeout(() => { lightoff(x) }, 350);
    }
}

//פונקציה שמחזירה את הכפתור למצבו המקורי
function lightoff(x) {
    x.style.backgroundImage = "url('../image/ga/9.jpg')";
}

//המשחק לוחץ על כפתור וכאן הפונקציה בודקת האם לחץ נכון והאם גמר ללחוץ את כל הסדר
function choise(x) {
    light(buttons[x])
    if ((x) == arr[count2]) {
        arrchoise.push(x)
        count2++;
        if ((arr.length) == count2) {
            let score = document.getElementById("counter")
            score.innerText = "your score is " + count2
            count2 = 0;
            random();
            setTimeout(() => { computerlight(0) }, 800);
        }
    }
    else {
        document.getElementById("btn").innerHTML = '<img src="../image/g.gif" style="height: 90vh;width:90vh;margin-left:35%";/>';
    }
}

//פונקציה רקורסיבית שמדליקה את כל הנורות שנבחרו עד עכשיו
function computerlight(i) {
    if (i == arr.length - 1) {
        light(buttons[arr[i]])
    }
    else {
        light(buttons[arr[i]]);
        setTimeout(() => { computerlight(i + 1) }, 400);
    }
}

//פונקצית ההתחלה
function start() {
    arr = [];
    random();
    light((buttons[arr[0]]));
}



//כפתור לחזרה לעמוד ההרשמה
function logOut() {
    localStorage.removeItem('curentUser');
    window.location = "login.html";
}

//כפתור לחזרה לעמוד הבית
function goHome() {
    window.location = "home.html";
}

//כפתור להפעלת משחק מחדש
function newGame() {
    window.location = "game.html";
}

//כפתור להוראות
function instructions() {
    window.location = "instructions.html";
}


//הפעלת המשחק
start()