let parag = document.querySelector(".paragraph")
let button = document.querySelector(".button")

let arr = ["“Be yourself; everyone else is already taken.”― Oscar Wilde",
 "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe", 
 "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
 "“So many books, so little time.”― Frank Zappa",
 "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
 "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
 "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
 "“You only live once, but if you do it right, once is enough.”― Mae West"
]



button.addEventListener("click", function(){
   let a = Math.floor(Math.random() *arr.length)
   parag.innerHTML = arr[a]
   console.log(parag);
})

