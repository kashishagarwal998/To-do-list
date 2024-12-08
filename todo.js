
function addtask()
{const inputv = document.getElementById('taskInput');
    let value=inputv.value;
    
    if(value==="")
    {
       alert("it is empty");
       return;
    }
    else{
        const newkey=Date.now();
        savetaskinls(newkey,value);
        create(newkey,value);
        inputv.value="";
        inputv.placeholder="add new task";

        
    }

}
function create(newkey,value){
    const ele=document.createElement("button");
    ele.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
    ele.style.marginRight="10px";
    ele.style.backgroundColor="peachpuff"
    ele.style.border="none";
    ele.style.fontSize="large";
    const div=document.createElement("div");
   
    div.dataset.id=newkey;
    const spans=document.createElement("span");
    
    spans.innerText= value;
    // spans.style.border="2px solid black";
    spans.style.textTransform="capitalize";
    spans.style.fontWeight="90px"
    spans.style.fontFamily="Pacifico, cursive";
    spans.style.fontSize="x-large";
    const delbut=document.createElement("button");
    delbut.innerHTML='<i class="fa-regular fa-circle-xmark"></i> '
    delbut.style. marginLeft="20px";
    delbut.style.border="none";
    delbut.style.fontSize="x-large";
    delbut.style.backgroundColor="peachpuff"
    const done=document.createElement("button");
    done.innerHTML='<i class="fa-solid fa-check"></i>' ;
    done.style.border="none";
    done.style.marginLeft="10px";
    done.style.fontSize="x-large";
    done.style.backgroundColor="peachpuff"
    delbut.addEventListener("click",()=>{
    delbut.parentElement.remove();
    deletefromlocalstorage(newkey);
   
});
done.addEventListener("click",()=>{
    if (spans.style.textDecoration === "line-through") {
        spans.style.textDecoration = "none"; 
    } else {
        spans.style.textDecoration = "line-through";  
    }
})
div.append(ele);
  div.append(spans);
  div.append(delbut);
  div.append(done);
const div2=document.getElementsByClassName("container")[0];
  div2.append(div);

 
 
}

function savetaskinls(newkey, value){
const lvalue=localStorage.

getItem("task");
let obj;
if(lvalue==null)
{
 obj={};
}
else{
obj=JSON.parse(lvalue);


}
obj[newkey]=value;
localStorage.setItem("task",JSON.stringify(obj));


}
function  deletefromlocalstorage(newkey){
    const otpvalue=localStorage.getItem("task");
    const xobj=otpvalue?JSON.parse(otpvalue):{};
    delete xobj[newkey];
    const tos=JSON.stringify(xobj);
    localStorage.setItem("task",tos);
}
document.addEventListener("DOMContentLoaded",()=>{
    reloadalltask();
})
function reloadalltask(){
    const otpvalue=localStorage.getItem("task");
    const xobj=otpvalue?JSON.parse(otpvalue): {};
    for(const key in xobj){
        create(key,xobj[key]);
    }
}

