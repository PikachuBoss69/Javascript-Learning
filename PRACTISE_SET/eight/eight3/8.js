
let mdn = document.getElementById("mdn web docs");
let stack = document.getElementById("stack overflow");
let wiki = document.getElementById("wikipedia");
let git = document.getElementById("github");

mdn.addEventListener('click',function(event){
    window.open('https://developer.mozilla.org/en-US','_blank');
});
stack.addEventListener('click',function(event){
    window.open('https://stackoverflow.com/','_blank');
});
git.addEventListener('click',function(event){
    window.open('https://github.com/','_blank');
});
wiki.addEventListener('click',function(event){
    window.open('https://www.wikipedia.org/','_blank');
});