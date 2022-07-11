function login(e) {

    e.preventDefault()

    let form = document.getElementById("form")

    let name = document.getElementById("email").value

    let pass = document.getElementById("password").value

    console.log(name, pass)

    alert("Login successful!")
}