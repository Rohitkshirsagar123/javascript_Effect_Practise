const search = () => {

    var searchval=document.getElementById("search-item").value.toUpperCase();
    var productList= document.querySelector("#product_list");
    var product= document.querySelectorAll(".product");

    var pname= productList.getElementsByTagName("h3")


    for(var i=0;i<pname.length;i++){
        var match = product[i].getElementsByTagName("h3")[0];
        // console.log(match);

        if(match){
            var textvalue= match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchval)>-1){
                console.log(product[i])
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
        }

    }
}