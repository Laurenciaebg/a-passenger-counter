 let counTel =document.getElementById('count-el')
 let saveEl= document.getElementById('save-el')
 let count=0;
console.log(count);
 function increment(){
    count+=1
    counTel.innerText=count
    console.log(count)
 }
 function save(){
    let value= count+' - ' ;
    saveEl.innerHTML+=value;
    count=0;
    counTel.textContent=count
    console.log(count)
    console.log(value);
 }
    






