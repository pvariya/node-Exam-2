const postData = async (userData) => {
  
      let req = await fetch("http://localhost:9080/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      let res = await req.json(); // Ensure that res is resolved 
  
      if (req.ok) {
        alert('Login successful!');
        window.location.href = "/view/index.html"
      } else {
        alert('Login failed: ' + res.message);
      }
  document.cookie=`id=${res.User._id}`
  };
  
  const logInFrom = async (e) => {
    e.preventDefault();
    let userData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    await postData(userData); 
  };
  
  document.getElementById("userData").addEventListener("submit", logInFrom);
  