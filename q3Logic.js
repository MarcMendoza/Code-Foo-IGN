/*Author: Marc Mendoza
*	IGN Code Foo Submission
*	Question 3: License Plate Manufacturing Company
*	Summary: This takes input from the user and determines
*				the pattern with least excess plates.
*/

//the population is taken in and then the smallest pattern is found.
var getAnswer = function getAnswer(){
	//check if population is valid
	var population = document.getElementById("population").value;
	//The number of values in each pattern type, for easier code reading
	var alpha=26, num=10;
	
	//if it is not a number, place an Error in 2nd textbox
	if(isNaN(population) == true) {
		document.getElementById("pattern").value = "ERROR: Please enter an Integer";
	}
	
	//check if it is <= 0, place an Error in 2nd textbox
	else if(parseInt(population) <= 0){
		document.getElementById("pattern").value = "ERROR: Please enter a population >= 0";
	}
	
	//check if population is greater than the size of the biggest 
	//pattern, place an Error in 2nd textbox
	else if(parseInt(population) > Math.pow(alpha, 6)) {
		document.getElementById("pattern").value = "ERROR: No pattern large enough";
	}
	
	//input is good, calculate smallest pattern
	else {
		//parse the input into type int
		population = parseInt(population);
		//loop variables
		var a=6, n, aDecr;
		//variables for pattern and how big the pattern is
		var lowestAlpha=0, lowestNum=0, patternSize=0, excessPlates;
		//temp variable to hold sizes calculated
		var totalSize;
		
		//the worst case is assumed to be the smallest pattern of only
		//alphabet variables and this finds out how many are contained
		//in the pattern
		var worstCase = Math.ceil(Math.log(population)/Math.log(26));
		
		//this is set to the current best pattern
		lowestAlpha = worstCase;
		lowestNum = 0;
		patternSize = Math.pow(alpha, worstCase);
		
		//the following checks a pattern of 1 higher than the worst
		//case of only numbers, this is done because this number is
		//generally smaller than the worst case
		totalSize = Math.pow(num, worstCase+1);
		if((totalSize >= population) && (totalSize < patternSize)){
			lowestAlpha =0;
			lowestNum = worstCase+1;
			patternSize = Math.pow(num, lowestNum);
		}
		
		//These loops checks and compares each smaller pattern against
		//the current best pattern
		for(a=worstCase;a>0;a--) {
			//this allows the number of letters in the pattern to be 
			//decremented in the next step
			aDecr=a;
			for(n=0;n<=a;n++) {
				//checks if pattern contains zero of either variable
				if(aDecr == 0)
					totalSize = Math.pow(num,n);
				else if(n == 0)
					totalSize = Math.pow(alpha,aDecr);
				else
					totalSize = Math.pow(alpha,aDecr)*Math.pow(num,n);
				
				//best pattern is replaced if a better one is found
				if((totalSize >= population) && (totalSize < patternSize)){
					lowestAlpha = aDecr;
					lowestNum = n;
					patternSize = totalSize;
				}
				aDecr--;
			}
		}
		
		//excess plates in best pattern is found 
		excessPlates = patternSize - population;
		//all need information is outputted to a textarea field
		document.getElementById("pattern").value = "Numbers: " + lowestNum +
													"\nLetters: " + lowestAlpha +
													"\nTotal Plates: " + patternSize + 
													"\nExcess Plates: " + excessPlates;
	}
}