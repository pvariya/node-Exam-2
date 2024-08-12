const postData = async (userData) => {
  let req = await fetch("http://localhost:9080/user/singUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  let res = await req.json();

  if (res.status === "success") {
    alert("Signup successful! Welcome, " + userData.username + "!");
    window.location.href = "/view/login.html";
  } else if (res.status === "exists") {
    alert("User already exists. Please try logging in.");
    window.location.href = "/view/login.html";
  } else {
    alert("Signup failed: " + res.message);
  }
};

const signUpForm = (e) => {
  e.preventDefault();
  let userData = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  postData(userData);
};

document.getElementById("userData").addEventListener("submit", signUpForm);
