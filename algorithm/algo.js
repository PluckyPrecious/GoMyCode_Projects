//The length of the sentence (the number of characters).
function getCounts(string) {}


//The number of words in the sentence (assuming that the words are separated by a single space).
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
    }
 document.write("The Number of words in the sentence -"+
 "Hello World! I am Plucky, and a proud FullStack Developer.:"
 + countWords("Hello World! I am Plucky, and a proud FullStack Developer."));


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
" Hello World! I am Plucky, and a proud FullStack Developer.:" 
+ getVowels("Hello World! I am Plucky, and a proud FullStack Developer."));
