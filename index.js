//下拉菜单
window.onload=function(){

var dropdown=document.getElementById("dropdown");

// console.log(dropdown);
var dropdownList=dropdown.getElementsByTagName("li");
// console.log(dropdownList)


for(var i=0; i<dropdownList.length; i++){
    // console.log(i)
    if(i==1){
        continue;
    }

         
dropdownList[i].onmouseover=function(){
 this.classList.add('show');

}
dropdownList[i].onmouseout=function(){

   this.classList.remove('show');

}
}




// 分类菜单

var navLi=document.getElementsByClassName("nav-li");
// console.log(navLi)

for(var j=0;j<navLi;j++){
    // console.log(j)

    navLi[j].onmouseover=function(){
        this.classList.add('show');
        console.log(navLi[j])

    }
    navLi[j].onmouseout=function(){
        this.classList.remove('show');
    }
}
}