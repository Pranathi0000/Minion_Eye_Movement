const iris = document.getElementsByClassName("iris");
//predefined methos= onmousemove
document.onmousemove=(a)=>{
    const x=(a.clientX *100)/window.innerWidth+'%';
    const y=(a.clientY *100)/window.innerHeight+'%';
    for(let i=0; i<100; i++)
    {
        iris[i].style.left=x;
        iris[i].style.top=y;
        iris[i].transform='translate(-'+x+',-'+y+')';
    }
}