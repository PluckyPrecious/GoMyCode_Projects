//The length of the sentence (the number of characters).
function getCounts(string) {} //


// The number of vowels in the sentence
function getVowels(string) {
var Vowels = 'aAeEiIoOuU';
var vowelsCount = 0;
for(var i = 0; i < string.length ; i++) {
 if (Vowels.indexOf(string[i]) !== -1) {
    vowelsCount += 1;
}
}
return vowelsCount;
}
document.write("The Number of vowels in -"+
" Hello World! I am plucky and a proud fullstack Developer.:" 
+ getVowels("Hello World! I am Plucky, and a proud FullStack Developer."));
