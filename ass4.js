let person = prompt("Please enter your name");

if (person != null) {
    document.getElementById("demo").innerHTML =
        person.replace("a", "x")
    alert(person.replace("a", "x"))
}

let age = prompt("Please enter your age");
if (age < 18) {
    alert("You are too young")
} else {
    alert("you can enter")
}