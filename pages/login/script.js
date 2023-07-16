// Show && hide Password ------------------------------------

// Elements
const eyeShowPath = "../../public/images/eye-show.svg",
  eyeHidePath = "../../public/images/eye-hide.svg";

const toggleEye = document.querySelectorAll(".toggle-eye");

toggleEye.forEach((eye) => {
  let isEye = false;
  eye.addEventListener("click", () => {
    if (isEye) {
      eye.src = eyeHidePath;

      // Prev element is = input filed
      eye.previousElementSibling.type = "password";

      isEye = !isEye;
    } else {
      eye.src = eyeShowPath;

      // Prev element is = input filed
      eye.previousElementSibling.type = "text";

      isEye = !isEye;
    }
  });
});

// Switch pages ------------------------------------
const registerBtn = document.getElementById("register-btn"),
  loginBody = document.getElementById("login"),
  loginBtn = document.getElementById("login-btn"),
  registerBody = document.getElementById("register");

registerBtn.addEventListener("click",()=>{
  loginBody.style.display = 'none';
  registerBody.style.display = "flex";
})

loginBtn.addEventListener("click",()=>{
  loginBody.style.display = "flex";
  registerBody.style.display = "none";
})