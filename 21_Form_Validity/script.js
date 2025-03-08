let nameError = document.querySelector("#nameError");
let phoneError = document.querySelector("#phoneError");
let emailError = document.querySelector("#emailError");
let textError = document.querySelector("#textError");
let mainError = document.querySelector("#mainError");
let button = document.querySelector("#button");

let contactName = document.querySelector("#contactName");
let contactPhone = document.querySelector("#contactPhone");
let contactEmail = document.querySelector("#contactEmail");
let contactText = document.querySelector("#contactText");
let contactMain = document.querySelector("#contactMain");

contactName.addEventListener("keyup", validateName);
contactPhone.addEventListener("keyup", validatePhone);
contactEmail.addEventListener("keyup", validateEmail);
contactText.addEventListener("keyup", validateText);

function validateName() {
  let name = contactName.value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validatePhone() {
  let phone = contactPhone.value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is required";
    return false;
  } else if (phone.length != 10) {
    phoneError.innerHTML = "Write proper phone number";
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Write proper phone number";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateEmail() {
  let email = contactEmail.value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Write proper Email";
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateText() {
  let message = contactText.value;

  if (message.length == 0) {
    textError.innerHTML = "message is required";
    return false;
  } else if (message.length < 30) {
    textError.innerHTML = 30 - message.length + "more words required";
    return false;
  } else {
    textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateText()
  ) {
    mainError.style.display = "block";
    mainError.innerHTML = "Please fix the error to submit";
    setTimeout(() => {
      mainError.style.display = "none";
    }, 3000);
    return false;
  }
}
