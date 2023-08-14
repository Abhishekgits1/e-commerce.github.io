
function validate(form) {
    let userName = form.username.value;
    const password = form.password.value;
    // console.log(userName, password);
    if (userName == "admin@admin.com" && password == "123456") {
        alert("Login successful!") ;
    }else{
        alert("Invalid credentials. Please try again.");
    }
}