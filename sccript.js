function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);
    let formattedDate =new Date(input.value).toLocaleDateString("en-IN");
    outputdate.value=formattedDate;
}