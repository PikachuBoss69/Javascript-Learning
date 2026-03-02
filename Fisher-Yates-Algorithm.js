//A Way to shuffel the elements of array ..........
const cards = [2,4,6,8,1,3,'f','u','P','W','v',0]; 

shuffle(cards);
console.log(cards);


function shuffle(array){
    for(let i = array.length-1;i>0;i++){
        let random = Math.floor(Math.random() *(i+1));
        [array[random],array[i]] = [array[i],array[random]];
    }
}