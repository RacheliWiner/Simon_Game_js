
let gamersArr = [];
window.onload =function()
{
    document.getElementById("logInContainer").style.display = 'none';
    const logIn = document.getElementById("logIn");
    const signUp = document.getElementById("signUp");
    logIn.addEventListener("click", () => { logInFunc('logInContainer', 'signUpContainer') });
    signUp.addEventListener("click", () => { logInFunc('signUpContainer', 'logInContainer') });
}


function logInFunc(id1, id2) {
    document.getElementById(id1).style.display = 'flex';
    document.getElementById(id2).style.display = 'none';
}



function logInIsValid(addEvent) {
    addEvent.preventDefault();

    const email = document.getElementById("logInEmail").value;
    const password = document.getElementById("logInPassword").value;
    gamersArr = JSON.parse(localStorage.getItem("users")) || [];
    const exist = gamersArr.find(element => element.email === email);

    if (!exist || exist == undefined) {
        document.getElementById("logInMassage").innerText = "No such account exists";
        return;
    }
    const validPassword = gamersArr.find(element => element.password === password);
    if (validPassword) {
        localStorage.setItem("curentUser", JSON.stringify(exist));
        self.location="home.html";
    }
    else {
        document.getElementById("logInMassage").innerText = "Incorrect login";
    }
}
 

function signUpIsValid(addEvent) {
    addEvent.preventDefault();

    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const name = document.getElementById("signUpName").value;
    gamersArr = JSON.parse(localStorage.getItem("users")) || [];
    const exist = gamersArr.find(element => element.email === email);
    if (exist) {
        document.getElementById("signUpMassage").innerText = "An account with this email already exists";
    }
    else {
        let newGamer = new gamer(name, email, password);
        gamersArr.push(newGamer);
        localStorage.setItem("users", JSON.stringify(gamersArr));
        localStorage.setItem("curentUser", JSON.stringify(newGamer));
        self.location="home.html";
    }
}

