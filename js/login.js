function login() {
    var login = document.getElementById("user").value
    var senha = document.getElementById("password").value

    fetch(`http://localhost:8080/login/autenticacao?login=${login}&senha=${senha}`).then(
        (response) => {
            if (response.ok) {
                return window.location.replace("./pages/admin.html")
            }

            return Promise.reject(response)
        }
    ).catch(
        (response) => {
            if (response.status == 401) {
                document.getElementById("message").innerHTML = "Login ou senha errado."
                document.getElementById("message").style.visibility = "visible"
            } else {
                document.getElementById("message").innerHTML = response
                document.getElementById("message").style.visibility = "visible"
            }
        }
    )
}