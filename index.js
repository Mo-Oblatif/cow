const student = require("./information")
const cowsay = require("cowsay");

console.log(cowsay.say({
	text : (`Je m'appelle ${student.name} et j'étudie dans la promo ${student.campus}`),
}));