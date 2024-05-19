let arr=["hoa","hao","han","anh","thu","nam","tan","tai","tho" ];
let remainingGuess = arr.length;
let selectedWord = arr[Math.floor(Math.random() * arr.length)];
console.log(selectedWord);
// lấy giá trị ô input  
 
 function checkAnswer(){
    let a=document.getElementById("answer").value;
    console.log(a);
    if(a===selectedWord){
        alert("Bạn đã đúng!");
    }else{
        remainingGuess--;
            alert("Bạn chưa đúng!");
        }
    }
 
 

 
