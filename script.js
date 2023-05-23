//your JS code here. If required.
let user1=document.getElementById("player1").value.trim();
let user2=document.getElementById("player2").value.trim();
function openGame(){
	if(user1===user2){
		alert("both name can't be same");
			  return;
	}
	else{
		let form=document.getElementById("id");
		form.style.display="none";
	}
}