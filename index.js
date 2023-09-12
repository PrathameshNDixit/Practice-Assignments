const sub = document.getElementById("Submit")
const para = document.getElementById("para")
sub.addEventListener("click", (e) => {
    e.preventDefault()
    validate()
})
function showWarning() {
    para.classList.add("toggle")
}
function validate() {

    if (document.myForm.name.value == "") {
        alert("Please provide your name!");
        para.innerHTML = "Please provide your name!"
        showWarning()
        return false;
    }
    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        para.innerHTML = "Please provide your email!"
        showWarning()
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.email.value !== ""){
        validateEmail()
    }
    if (document.myForm.address.value == "") {
        alert("Please provide your address!");
        para.innerHTML = "Please provide your address!"
        showWarning()
        return false;
    }
    if (document.myForm.gender.value == "") {
        alert("Please select your gender!");
        para.innerHTML = "Please select your gender!"
        showWarning()
        return false;
    }
    
    return (true);
}
function validateEmail() {
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus();
        return false;
    }
}