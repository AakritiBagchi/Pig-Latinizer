


// Take the first letter of each word and put it at the end + ay for each word as well

$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$( "button" ).click(function pigLatin(str) {
    str = $("input").val();
    let words = str.split(" ");
    let result = "";
    
    let firstWord = words.forEach(function separate(eachWord){
        
        str = str.toLowerCase();
        
        const vowels = ["a", "e", "i", "o", "u"];
        
        let vowelIndex = 0;
  // char becomes the value of each element of str  
        
        for (let char of eachWord) {
                if (vowels.includes(char)) {
                vowelIndex = eachWord.indexOf(char);
                break;
             }
             
        }
    const pigLatinized = eachWord.slice(vowelIndex) + eachWord.slice(0, vowelIndex) + "ay";   
    result = result + " " + pigLatinized;
    });
    
    
  $(".output").text(result);
});

});