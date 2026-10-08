//your JS code here. If required.
const submitbtn=document.getElementById("submit");
const checkBox=document.getElementById("checkbox");
const usernameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");	
const existingBtn=document.getElementById("existing");

function checkSavedCredentials() {
	const savedUser=localStorage.getItem('username');
	const savedPass=localStorage.getItem('password');

	if(savedUser && savedPass){
		existingBtn.style.display='block';
	}else{
		existingBtn.style.display='none';
	}
}

submitbtn.addEventListener('click',function(e){
	e.preventDefault();
	const username=usernameInput.value;
	const password=passwordInput.value;

	alert(`Logged in as ${username}`);
	if(checkBox.checked){
		localStorage.setItem('username',username);
		localStorage.setItem('password',password);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	checkSavedCredentials();
});
existingBtn.addEventListener('click',function () {
	const savedUser=localStorage.getItem('username');
	if(savedUser){
		alert(`Logged in as ${savedUser}`);
	}
});
checkSavedCredentials();



