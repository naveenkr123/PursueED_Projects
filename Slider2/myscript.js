var arr=document.querySelectorAll('img');
arr.forEach(
    (slide, index)=>{
        slide.style.left=`${index*100}%`;
    }
)

var count=0;
console.log(count);

function prev(){
    count-=1;
    if(count>=0){
        bar();
        move();
    }
    else{
        count=0
    }

}
function next(){
    count+=1;
    if(count<=3){
        bar();
        move();
    }
    else{
        count=3
    }
    
    
}

function move(){
    console.log(count);
    arr.forEach(
        (slide)=>{
            slide.style.transform=`translate(-${count*100}%)`;
        }
    )
}

function bar(){
    switch(count){
        case 0:
            document.getElementById('bar-1').style.opacity='1';
            document.getElementById('bar-2').style.opacity='0.3';
            document.getElementById('bar-3').style.opacity='0.3';
            document.getElementById('bar-4').style.opacity='0.3';
            break;
        case 1:
            document.getElementById('bar-1').style.opacity='0.3';
            document.getElementById('bar-2').style.opacity='1';
            document.getElementById('bar-3').style.opacity='0.3';
            document.getElementById('bar-4').style.opacity='0.3';
            break;
        case 2:
            document.getElementById('bar-1').style.opacity='0.3';
            document.getElementById('bar-2').style.opacity='0.3';
            document.getElementById('bar-3').style.opacity='1';
            document.getElementById('bar-4').style.opacity='0.3';
            break;
        case 3:
            document.getElementById('bar-1').style.opacity='0.3';
            document.getElementById('bar-2').style.opacity='0.3';
            document.getElementById('bar-3').style.opacity='0.3';
            document.getElementById('bar-4').style.opacity='1';
            break;
    }
}

function navMove(num){
    count=num;
    bar();
    move();
}