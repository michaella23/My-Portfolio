const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

let parts = ["micha", "ella", "com", "&#46;", "&#64;", "hotmail"];
let email = parts[0] + parts[3] + parts[1] + parts[4] + parts[5] + parts[3] + parts[2];
const emailEl = document.getElementById("email")
emailEl.innerHTML = email
emailText = emailEl.innerHTML;

// emailEl.addEventListener("click", copyToClipboard)

// function copyToClipboard() {

//    // Copy the text inside the text field
//   navigator.clipboard.writeText(emailText);

//   // Alert the copied text
//   alert("Copied the text: " + emailText);
// }

function query() {
    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      alert("Write access granted!");
    }
  });
}
query()