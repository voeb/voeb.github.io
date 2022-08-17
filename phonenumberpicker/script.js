const button = document.querySelector("button")
const pn = document.querySelector("#pn")

var phn = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
var phonenumber = phn.toString()
var args = phonenumber.split("")

console.log(args)

if (Math.random() < 0.5) {
    pn.innerHTML = `(+${phonenumber.slice(0, 2)}) ${phonenumber.slice(2, 9)}`
} else {
    pn.innerHTML = `(+${phonenumber.slice(0, 3)}) ${phonenumber.slice(3, 10)}`
}

button.onclick = function() {
    var phn = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
    var phonenumber = phn.toString()
    var args = phonenumber.split("")

    console.log(args)

    if (Math.random() < 0.5) {
        pn.innerHTML = `(+${phonenumber.slice(0, 2)}) ${phonenumber.slice(2, 9)}`
    } else {
        pn.innerHTML = `(+${phonenumber.slice(0, 3)}) ${phonenumber.slice(3, 10)}`
    }
}