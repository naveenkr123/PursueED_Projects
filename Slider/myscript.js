var element=document.getElementById('slider');
var index=1;

function leftClick(){
    index-=1;
    change();
}
function rightClick(){
    index+=1;
    change();
}

function change(){
    if(index>4){index=1;}
    else if(index<1){index=4;}

    switch(index){
        case 1:
            element.style.backgroundImage="url('images/img1.jpg')";
            break;
        case 2:
            element.style.backgroundImage="url('images/img2.jpg')";
            break;
        case 3:
            element.style.backgroundImage="url('images/img3.jpg')";
            break;
        case 4:
            element.style.backgroundImage="url('images/img4.jpg')";
            break;
    }

    
}