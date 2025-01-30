function onload() {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let name = month[d.getMonth()];
    document.getElementById("month").innerHTML = name;
    var saved_username = localStorage.getItem("username")
    if (saved_username === null) {
        document.getElementById('oobe').style.display = 'grid';
        document.getElementById('body').style.display = 'none';
        document.getElementById('login_div').style.display = 'none';
    }
    else {
        experience(saved_username)
    }
}

function username() {
    event.preventDefault()
    var username = document.getElementById("oobe_name").value.trim();
    if (username === "") {
        document.getElementById("oobe").reportValidity()
        return;
    }
    document.getElementById('oobe').classList.toggle('fade')
    setTimeout(() => {
        experience(username)
    }, 250);
}

function experience(username) {
    document.title = "Expense Tracking System"
    var d = new Date();
    var currtime = d.getHours() * 100 + d.getMinutes();
    if (currtime > 0) {
        document.getElementById("welcome").innerHTML = "Good evening, " + username;
    }
    if (currtime > 600) {
        document.getElementById("welcome").innerHTML = "Good morning, " + username;
    }
    if (currtime > 1200) {
        document.getElementById("welcome").innerHTML = "Good afternoon, " + username;
    }
    if (currtime > 1800) {
        document.getElementById("welcome").innerHTML = "Good evening, " + username;
    }
    document.getElementById("login_text").innerHTML = username;
    document.getElementById('oobe').style.display = 'none';
    document.getElementById('body').style.display = 'grid';
    document.getElementById('login_div').style.display = 'flex';
    document.getElementById('horizontal-menu').style.position = 'fixed';
    localStorage.setItem("username", username);
}

function reset() {
    localStorage.removeItem("username");
    window.location.href = 'index.html'
}