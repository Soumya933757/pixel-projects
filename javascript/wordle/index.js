const words = [
    "which", "there", "their", "about", "would", "these", "other", "words", "could", "write", "first", "water", 
    "after", "where", "right", "think", "three", "years", "place", "sound", "great", "again", "still", "every", 
    "small", "found", "those", "never", "under", "might", "while", "house", "world", "below", "asked", "going", 
    "large", "until", "along", "shall", "being", "often", "earth", "began", "since", "study", "night", "light", 
    "above", "paper", "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means", 
    "music", "miles", "thing", "today", "later", "using", "money", "lines", "order", "group", "among", "learn", 
    "known", "space", "table", "early", "trees", "short", "hands", "state", "black", "shown", "stood", "front", 
    "voice", "kinds", "makes", "comes", "close", "power", "lived", "vowel", "taken", "built", "heart", "ready", 
    "quite", "class", "bring", "round", "horse", "shows", "piece", "green", "stand", "birds", "start", "river", 
    "tried", "least", "field", "whose", "girls", "leave", "added", "color", "third", "hours", "moved", "plant", 
    "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman", "alone", "plane", 
    "spell", "watch", "carry", "wrote", "clear", "named", "books", "child", "glass", "human", "takes", "party", 
    "build", "seems", "blood", "sides", "seven", "mouth", "solve", "north", "value", "death", "maybe", "happy", 
    "tells", "gives", "looks", "shape", "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed", 
    "women", "metal", "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs", 
    "rocks", "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight", "terms", "catch", 
    "works", "board", "cover", "songs", "equal", "stone", "waves", "guess", "dance", "spoke", "break", "cause", 
    "radio", "weeks", "lands", "basic", "liked", "trade", "fresh", "final", "fight", "meant", "drive", "spent", 
    "local", "waxes", "knows", "train", "bread", "homes", "teeth", "coast", "thick", "brown", "clean", "quiet", 
    "sugar", "facts", "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps", 
    "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods", "crops", "fruit", 
    "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones", "apart", "turns", "moves", "touch", 
    "angle", "based", "range", "marks", "tired", "older", "farms", "spend", "shoes", "goods", "chair", "twice", 
    "cents", "empty", "alike", "style", "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint", 
    "heads", "shook", "serve", "angry", "crowd", "wheel", "quick", "dress", "share", "alive", "noise", "solid", 
    "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved", "usual", "faces", 
    "drove", "cabin", "boats", "towns", "proud", "court", "model", "prime", "fifty", "plans", "yards", "prove", 
    "tools", "price", "sheet", "smell", "boxes", "raise", "match", "truth", "roads", "threw", "enemy", "lunch", 
    "chart", "scene", "graph", "doubt", "guide", "winds", "block", "grain", "smoke", "mixed", "games", "wagon", 
    "sweet", "topic", "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter", 
    "broad", "steam", "atoms", "press", "lying", "basis", "clock", "taste", "grows", "thank", "storm", "agree", 
    "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved", "sorry", "giant", "trail", "offer", 
    "ought", "rough", "daily", "avoid", "keeps", "throw", "allow", "cream", "laugh", "edges", "teach", "frame", 
    "bells", "dream", "magic", "occur", "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple", 
    "climb", "outer", "pitch", "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten", 
    "youth", "tones", "honor", "globe", "gases", "doors", "poles", "loose", "apply", "tears", "exact", "brush", 
    "chest", "layer", "whale", "minor", "faith", "tests", "judge", "items", "worry", "waste", "hoped", "strip", 
    "begun", "aside", "lakes", "bound", "depth", "candy", "event", "worse", "aware", "shell", "rooms", "ranch", 
    "image", "snake", "aloud", "dried", "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt", 
    "flour", "drops", "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade", 
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue", "birth", "feels", 
    "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned", "trick", "yours", "sizes", "noted", 
    "width", "burst", "route", "lungs", "uncle", "bears", "royal", "kings", "forty", "trial", "cards", "brass", 
    "opera", "chose", "owner", "vapor", "beats", "mouse", "tough", "wires", "meter", "tower", "finds", "inner", 
    "stuck", "arrow", "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh", 
    "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot", "sales", "swept", "lucky", 
    "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk", "error", "porch", "slave", "exist", 
    "faced", "mines", "marry", "juice", "raced", "waved", "goose", "trust", "fewer", "favor", "mills", "views", 
    "joint", "eager", "spots", "blend", "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates", 
    "drill", "trace", "skins", "waxed", "seats", "stuff", "ratio", "minds", "silly", "coins", "hello", "trips"]

const container = document.querySelector('.container');
const gameBox = document.querySelector('.game-box')
const box = document.querySelectorAll('.box')
const button = document.querySelector('button')
const input=document.querySelector('input')

let randomIndex,index=0,chances=6,win=0;
document.addEventListener('DOMContentLoaded',()=>{
     randomIndex = Math.floor(Math.random()*(599-0+1))+0;
     index=0;
     chances=6;
})
const arr=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[25,26,27,28,29]];
button.addEventListener('click',(e)=>{
    e.stopPropagation()
    win=0;
   if(chances>0 && input.value!='' && win<5){const word = input.value.toLowerCase();
   input.value="";
   if(word[0]==words[randomIndex][0]){ gameBox.children[arr[index][0]].style.backgroundColor="green";win++; }
   else if(words[randomIndex].includes(word[0])) gameBox.children[arr[index][0]].style.backgroundColor="yellow";
   else gameBox.children[arr[index][0]].style.backgroundColor="gray"; 
    gameBox.children[arr[index][0]].textContent=word[0];

    if(word[1]==words[randomIndex][1]) {gameBox.children[arr[index][1]].style.backgroundColor="green"; win++;} 
    else if(words[randomIndex].includes(word[1])) gameBox.children[arr[index][1]].style.backgroundColor="yellow";
    else gameBox.children[arr[index][1]].style.backgroundColor="gray"; 
    gameBox.children[arr[index][1]].textContent=word[1];

    if(word[2]==words[randomIndex][2]) {gameBox.children[arr[index][2]].style.backgroundColor="green";win++;} 
    else if(words[randomIndex].includes(word[2])) gameBox.children[arr[index][2]].style.backgroundColor="yellow";
    else gameBox.children[arr[index][2]].style.backgroundColor="gray"; 
    gameBox.children[arr[index][2]].textContent=word[2];

    if(word[3]==words[randomIndex][3]){ gameBox.children[arr[index][3]].style.backgroundColor="green";win++ ;}
    else if(words[randomIndex].includes(word[3])) gameBox.children[arr[index][3]].style.backgroundColor="yellow";
    else gameBox.children[arr[index][3]].style.backgroundColor="gray"; 
    gameBox.children[arr[index][3]].textContent=word[3];

    if(word[4]==words[randomIndex][4]) {gameBox.children[arr[index][4]].style.backgroundColor="green"; win++;}
    else if(words[randomIndex].includes(word[4])) gameBox.children[arr[index][4]].style.backgroundColor="yellow";
    else gameBox.children[arr[index][4]].style.backgroundColor="gray"; 
    gameBox.children[arr[index][4]].textContent=word[4];

    chances--;
    index++;
    if(win==5){
        const winner = document.createElement('div');
        winner.classList.add('winner');
        winner.textContent=`Congratulations! You guessed the word!`;
        winner.style.cssText=" font-weight:bold; width:100%; margin:10px; font-size:20px; text-align:center"
        gameBox.appendChild(winner);
    }
    if(chances==0){
        const loser = document.createElement('div');
        loser.classList.add('loser');
        loser.textContent=`Sorry! You lose the word is ${words[randomIndex]}!`;
        loser.style.cssText=" font-weight:bold; width:100%; margin:10px; font-size:20px; text-align:center"
        gameBox.appendChild(loser);
    }
}
})

