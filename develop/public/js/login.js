const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch("/api/user/login",{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers: {"Content-Type":"application/json"}
        })
        console.log("responseOK: ", response.ok) 
        if (response.ok){
            document.location.replace("/");
        }else {
            alert("fail to log in!");
        }
    }

};
document.querySelector("#loginButton").addEventListener("click",loginFormHandler);

