import './Login.css'

function Login () {
    var users = [{username: "Kilvyn", password: "imawesome"}];

    function checkUser () {
        //get username and password
        var usrname = document.getElementById('username').value;
        var pswrd = document.getElementById('password').value;
        
        var actutalUser = users.find((x) => x.username == usrname);
        if (actutalUser){
            if (actutalUser.password === pswrd) alert("Your credentials are correct!");
            else document.getElementById('pswrdAlert').textContent = "Incorrect password";
        }
        else alert("User does not exist. Please create an account.");
    }
    
    return (
        <>
        <form>
            <div>
                <label>Enter username:</label>
                <input id="username" type="text" required></input>
            </div>
            <div>
                <label>Enter password:</label>
                <input id="password" type="password" required></input>
                <p id="pswrdAlert"></p>
            </div>
            <button type="button" onClick={checkUser}>LOGIN</button>
        </form>
        <button>CREATE ACCOUNT</button>
        </>
    )
}

export default Login