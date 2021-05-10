class Light {
    turnOnOff() {
        document.getElementById("Light").addEventListener("click", function () {
            if (document.getElementById("Light").style.backgroundColor == "rgb(47, 45, 45)") {
                document.getElementById("Light").style.backgroundColor = "Orange";
                document.getElementById("Light").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("Light").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("Light").style.borderColor = "Orange";
            }

        })
    }
}

class Lock {
    openClose() {
        document.getElementById("Lock").addEventListener("click", function () {
            if (document.getElementById("Lock").style.backgroundColor == "rgb(47, 45, 45)") {
                document.getElementById("LockImg").src = "img/lock a.png";
                document.getElementById("Lock").style.backgroundColor = "Orange";
                document.getElementById("Lock").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("LockImg").src = "img/lock b.png";
                document.getElementById("Lock").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("Lock").style.borderColor = "Orange";
            }
        })
    }
}

class Temperature {
    changeTemp() {
        document.getElementById("Temp").addEventListener("click", function () {
            if (document.getElementById("Temp").style.backgroundColor == "rgb(47, 45, 45)") {
                let degrees = prompt("Enter the temperature in degrees per Celsius", "20");

                if (degrees == null) {
                    return;
                }

                if (isNaN(degrees) || degrees == "") {
                    alert("You did not enter the temperature. Try again");
                    return;
                }

                if (Number(degrees) > 30) {
                    alert("Max temperature is 30 degrees. Try again");
                    return;
                }

                if (Number(degrees) < -5) {
                    alert("Min temperature is -5 degrees. Try again");
                    return;
                }

                document.getElementById("degrees").innerHTML = " " + degrees + " degrees";
                document.getElementById("Temp").style.backgroundColor = "Orange";
                document.getElementById("Temp").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("Temp").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("Temp").style.borderColor = "Orange";
                document.getElementById("degrees").innerHTML = "";
            }
        })
    }
}

class Tv {
    turnOnOff() {
        document.getElementById("tv").addEventListener("click", function () {
            if (document.getElementById("tv").style.backgroundColor == "rgb(47, 45, 45)") {
                document.getElementById("tv").style.backgroundColor = "Orange";
                document.getElementById("tv").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("tv").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("tv").style.borderColor = "Orange";
            }
        })
    }
    showChannelsList() {
        document.getElementById("tv").addEventListener("mouseover", function () {
            document.getElementById("tv").title = "DoubleClick to see the list of channels";
        })
        document.getElementById("tv").addEventListener("dblclick", function () {
            alert("First channel\nNew channel\nSTB\nICTV\nFootball1");
        })
    }
}

class Router {
    turnOnOff() {
        document.getElementById("Router").addEventListener("click", function () {
            if (document.getElementById("Router").style.backgroundColor == "rgb(47, 45, 45)") {
                document.getElementById("Router").style.backgroundColor = "Orange";
                document.getElementById("Router").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("Router").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("Router").style.borderColor = "Orange";
            }
        })
    }
    showConnectionState() {
        document.getElementById("Router").addEventListener("mouseover", function () {
            document.getElementById("Router").title = "DoubleClick to see the connection state";
        })
        document.getElementById("Router").addEventListener("dblclick", function () {
            alert("The connection is stable");
        })
    }
}

class Garage {
    openClose() {
        document.getElementById("Garage").addEventListener("click", function () {
            if (document.getElementById("Garage").style.backgroundColor == "rgb(47, 45, 45)") {
                document.getElementById("Garage").style.backgroundColor = "Orange";
                document.getElementById("Garage").style.borderColor = "rgb(47, 45, 45)";
            } else {
                document.getElementById("Garage").style.backgroundColor = "rgb(47, 45, 45)";
                document.getElementById("Garage").style.borderColor = "Orange";
            }
        })
    }
}

function addComponents() {
    document.getElementById("AddButton").addEventListener('click', () => {
        let elementToAddIndex = document.getElementById("Add").selectedIndex;
        if (document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].value == 'tv') {

            let element = document.createElement('div');
            element.classList.add("element");
            element.id = "tv";
            let inner = `<img class="elementImg" src="img/tv.png">`;
            element.innerHTML = `${inner}`;
            document.querySelector("script").before(element);

            let tv = new Tv;
            tv.showChannelsList();
            tv.turnOnOff();
        }
        if (document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].value == 'router') {

            let element = document.createElement('div');
            element.classList.add("element");
            element.id = "Router";
            let inner = `<img class="elementImg" src="img/router.png">`;
            element.innerHTML = `${inner}`;
            document.querySelector("script").before(element);

            let router = new Router;
            router.turnOnOff()
            router.showConnectionState()
        }
        if (document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].value == 'garage') {

            let element = document.createElement('div');
            element.classList.add("element");
            element.id = "Garage";
            let inner = `<img class="elementImg" src="img/garage.png">`;
            element.innerHTML = `${inner}`;
            document.querySelector("script").before(element);

            let garage = new Garage;
            garage.openClose();
        }
       
        let newItem = document.createElement('option');
        newItem.value = document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].value;
        newItem.innerHTML = document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].innerHTML;
        document.getElementById("Delete").appendChild(newItem);
        document.getElementById("Add").querySelectorAll("option")[elementToAddIndex].remove();
    })
}

function deleteComponents() {
    document.getElementById("DeleteButton").addEventListener('click', () => {
        let elementToDeleteIndex = document.getElementById("Delete").selectedIndex;
      
        if (document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].value == 'tv') {
            document.getElementById("tv").remove();
        }
        if (document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].value == 'router') {
            document.getElementById("Router").remove();
        }
        if (document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].value == 'garage') {
            document.getElementById("Garage").remove();
        }

        let newItem = document.createElement('option');
        newItem.value = document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].value;
        newItem.innerHTML = document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].innerHTML;
        document.getElementById("Add").appendChild(newItem);
        document.getElementById("Delete").querySelectorAll("option")[elementToDeleteIndex].remove();
    })
}

addComponents();
deleteComponents();

let bulb = new Light;
bulb.turnOnOff();

let lock = new Lock;
lock.openClose();

let temp = new Temperature;
temp.changeTemp();