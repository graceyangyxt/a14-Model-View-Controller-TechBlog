
const signupFormHandler = async(event) => {
    event.preventDefault();
    
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if(username && password) {
        const response = await fetch("/api/user",{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers: {"Content-Type": "application/json"}
        });
        console.log("responseOK: ", response.ok) 
        console.log('this is response'+JSON.stringify(response))
        if(response.ok){
            document.location.replace("/dashboard");
        }else {
            alert("failed to create account!");
        }
    }
};
document.querySelector('#signupButton').addEventListener("click",signupFormHandler);