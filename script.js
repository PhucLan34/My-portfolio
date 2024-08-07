
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})


function sendEmail() {
    Email.send({
        SecureToken: "e50d6e7e-9c99-4c84-8573-d3fb139add57",
        To : 'mitthong12@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value 
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent")
    );
}