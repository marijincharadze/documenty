function myfunction(){
    let x=document.getElementsByClassName("mytopnav")
    if (x.classname === "topnav"){
        x.classname += "responsive"
    }else{
      x.classname = "topnav"
    }
}