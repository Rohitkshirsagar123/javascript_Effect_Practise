var body=document.querySelector("body");

var elem= document.querySelectorAll(".box");
console.log(elem)

elem.forEach(function(btn){
    // console.log(btn.id);

    btn.addEventListener("click",function(sel_btn){
        console.log(sel_btn.target.id)

        if(sel_btn.target.id ==='yellow'){
            body.style.backgroundColor=sel_btn.target.id;
        }
         if(sel_btn.target.id ==='red'){
            body.style.backgroundColor=sel_btn.target.id;
        }
         if(sel_btn.target.id ==='blue'){
            body.style.backgroundColor=sel_btn.target.id;
        }
         if(sel_btn.target.id ==='pink'){
            body.style.backgroundColor=sel_btn.target.id;
        }
        
    })
});