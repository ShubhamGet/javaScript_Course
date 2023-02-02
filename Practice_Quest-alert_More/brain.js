let runagain = true;
const canDrive = () => {
    if (age > 18) {
        return true
    }
    else {
        return false
    }
}
while (runagain) {
    let age = prompt("Enter ur age ");
    age = Number.parseInt(age);

    if (canDrive(age)) {
        alert("Yes ur can Drive");
    }
    else {
        alert("U cant Drive");
    }
    runagain = confirm("Do u want to play again ")
}