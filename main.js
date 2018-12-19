let usernameDOM = document.getElementById("username")
let passwordDOM = document.getElementById("password")

let ditemukan = false
let akun = ["rendi", "malica", "talenta", "nanda"]
let sandi = ["123", "234", "456", "567"]


function login(){
    for(let i = 0; i < akun.length; i++){
        if(usernameDOM.value == akun[i] && passwordDOM.value == sandi[i]){
            ditemukan = true
        }
    }
       if(ditemukan == true){
           alert("berhasil")
           ditemukan = false
    }  else {
        alert("gagal")
    }  
}