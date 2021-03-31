const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+-=<>?;'{}[]/";

const plength = document.getElementById("password-length");
const pupper= document.getElementById("password-uppercase");
const plower = document.getElementById("password-lowercase");
const pnumber = document.getElementById("password-number");
const psymbol = document.getElementById("password-character");
const ppassword = document.getElementById("Password");
const psubmit = document.getElementById("submit") ;

psubmit.addEventListener("click",() => {
	let initial = empty;
	(pupper.checked) ? initial += ucase : "";
	(plower.checked) ? initial += lcase : "";
	(pnumber.checked) ? initial += number : "";
	(psymbol.checked) ? initial += symbol : "";

	ppassword.value = generaterandompassword(plength.value,initial);

 });
function generaterandompassword(len, initial)
{
	let ans = "";
	for(let i = 0 ;i < len ; i++)
	{
		ans += initial.charAt(Math.floor(Math.random()*initial.length));
	}
	return ans;
}
const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
if(ppassword.value == "")
{
	alert("Please generate a password");
}
else
{
	/*The HTMLInputElement.select() method selects all the text in a <textarea> element or in an <input> element that includes a text field.
*/
ppassword.select();
document.execCommand("copy");
alert("Password has been copied to clipboeard");


}

});


