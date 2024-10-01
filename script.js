let boldwords=document.querySelectorAll("strong")

function highlight() {
    //Write your code here
	for(let i=0;i<boldwords.length;i++){
		boldwords[i].style.color="green";
	}
	
	


}


function return_normal() {
    //Write your code here
	for(let i=0;i<boldwords.length;i++){
		boldwords[i].style.color="black";
	}

    
}
