// this is logic file app.js
const passwordBox = document.getElementById("password");

function createPassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHI{}[]+=JKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  // length of password = 12
  let password = "";

  for (let i = 0; i < 12; i++) {
    const ch = Math.floor(Math.random() * chars.length);
    password += chars[ch];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
