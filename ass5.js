let person = prompt("Please enter your name");
let d = new Date()
if (person != null) {
    alert("Hello " + person + "! How are you today?");
    let dd = d.toLocaleDateString();
    alert(dd)
}
document.write("<center><font size=+3 style='color: green;'>");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
    document.write("Good Morning!");
} else if (hr == 12) {
    document.write("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good Afternoon!");
} else {
    document.write("Good Evening!");
}
document.write("</font></center>");