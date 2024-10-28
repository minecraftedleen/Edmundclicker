let count = 0;
function increment() {
    count = count + 1;
    console.log(count);
    document.getElementById("count-el").innerText = count;
    document.getElementById("count-el").style.color = "yellow"
    setTimeout(document.getElementById("count-el").style.color = "black")
    
    
}

function save() {
    document.getElementById("preventries").innerText += " " + count + " -"
}