var arr=document.getElementsByClassName('card');
arr=Array.from(arr);
var p=710;
var scroll_count=1;

console.log(arr);
arr.forEach(
    (c, index)=>{
        c.style.left=`${index*380}px`;
    }
)

function myFunction(){
    if(window.matchMedia("(max-width: 480px").matches){
        arr.forEach(
            (c, index)=>{
                c.style.left=`${index*100}%`;
            }
        ) 
        p=111; 
        scroll_count=11;      
    }
    else if(window.matchMedia("(max-width: 820px").matches){
        arr.forEach(
            (c, index)=>{
                c.style.left=`${index*50}%`;
            }
        )  
        p=222
        scroll_count=5
    }
    else if(window.matchMedia("(max-width: 1920px").matches){
        arr.forEach(
            (c, index)=>{
                c.style.left=`${index*25}%`;
            }
        )  
        p=435 
        scroll_count=2
    }
}
myFunction()




var count=0
function moveLeft(){
    count-=1;
    if(count>=0){
        for(let i=0;i<arr.length; i++){
            arr[i].style.transform=`translate(-${count*p}%)`;
        }
    }
    else{
        count=0;
    }
}
function moveRight(){
    count+=1;
    if(count<=scroll_count){
        for(let i=0;i<arr.length; i++){
            arr[i].style.transform=`translate(-${count*p}%)`;
        }
    }
    else{
        count=scroll_count;
    }
}

