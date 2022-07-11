function store(a, b, c) {

    this.name = a

    this.eamil = b

    this.pass = c
}

var arr = JSON.parse(localStorage.getItem("user")) || []

function login(e) {

    e.preventDefault()

    let form = document.getElementById("form")

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    let pass = document.getElementById("password").value

    let storage = new store(name, email, pass)

    arr.push(storage)

    localStorage.setItem("user", JSON.stringify(arr))

    alert("Sign Up successfully !")


    alert("user already exists !")


}