// window.onscroll=function (e){
//     let y = window.scrollY;
//     console.log('current y:'+y);
//     if (y>100 && y<500) {
//         let scale = getPercentOfIndex(100,y,499);
//         scale*=5;
//         scale+=100;
//         scale = Math.max(100, scale);
//         image.style.transform = 'scale(' + scale + '%)';
//     }else if (y>499 && y<600){
//         let opacity = 100 - Math.round(getPercentOfIndex(500,y,599));
//         image.style.opacity= opacity+'%';
//     }
// }
//
// function getPercentOfIndex(start,index,end){
//     let result = (index-start)/(end-start)*100;
//     console.log("percent: "+result)
//     return result;
// }




// part two

function x2(t1,t2,m,x){
    let dif = t2-t1;
    let result = (-1) * m * x * (x-dif);
    result /= ((dif/2)*(dif/2))
    if (result<0)
        return -1;
    return result;
}
function x(t1,t2,ft1,ft2,x) {
    if (x>t2)
        return ft2;
    if (x<t1)
        return ft1;
    let diffF = ft2-ft1;
    let diff = t2-t1;
    let a = (diffF)/(diff);
    let b = ft1 - (a*t1);
    return a*x +b;
}
function getScale(percent){
    if (percent<100)
        return '';
    return 'scale('+percent+'%)';
}

let image = document.getElementById('image');
let works = document.getElementById('works');
let video = document.getElementById('video');
let work0 = document.getElementById('work-0');
let work1 = document.getElementById('work-1');
let work2 = document.getElementById('work-2');
let work3 = document.getElementById('work-3');


window.onscroll=()=>{
    console.log(window.scrollY);
    let y = window.scrollY;
    // part one
    // zoom and move and fade welcome image
    image.style.backgroundSize= x(100,400,130,160,y)+'%';
    image.style.backgroundPositionX= x(100,400,0,70,y)+'%';
    image.style.opacity=x(300,400,100,0,y)+'%';

    //part two
    //move video left and projects come in
    works.style.left=x(900,1800,100,0,y)+'%';
    video.style.left=x(900,1800,0,-100,y)+'%';
    work0.style.transform=getScale(100+x2(0,150,50,y));
    work1.style.transform=getScale(100+x2(150,450,50,y));
    work2.style.transform=getScale(100+x2(950,1050,50,y));
    work3.style.transform=getScale(100+x2(1300,1600,50,y));

    console.log('x:'+x(100,400,130,160,y));

}

$("body").niceScroll();
