//your JS code here. If required.
let count = 0;
document.getElementById("incrementBtn").addEventListener("click",(e)=>{
	e.preventDefault();
	alert(count)
	++count;
	document.getElementById("counter").innerText = count;
})