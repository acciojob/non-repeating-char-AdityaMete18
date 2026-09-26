function firstNonRepeatedChar(str) {
 // Write your code here
	for(i=0 ; i<=str.length ; i++){
		if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
			return str[i];
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
