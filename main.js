
let name=document.getElementById('name');
var email=document.getElementById('email');
var salary=document.getElementById('salary');
var city=document.getElementById('city');
var submit=document.getElementById('submit');
var tbody=document.getElementById('tbody');

// var datasub;
//  if(localStorage.person!=null){
// datasub=JSON.parse(localStorage.person)
// }
// else{
// datasub=[];
// }
// submit.onclick=function(){
 var datasub=[];
 function addPerson(){
var newPrice=Number(salary.value);
var system={
name:name.value,
email:email.value,
salary:salary.value,
city:city.value,
};
datasub.push(system);

clearData();
readData();
}


// clear inputs
function clearData(){
name.value='';
email.value='';
salary.value='';
city.value='';
}

function readData(){
var x='';
for (var i = 0; i < datasub.length; i++) {
    x +=`
    <tr>
    
    <td>${datasub[i].name}</td>
    <td>${datasub[i].email}</td>
    <td>${datasub[i].salary}</td>
    <td>${datasub[i].city}</td>
    <td>
    <button onclick="updated(${i})" id="edit">
    <i class="fa-solid fa-pen-to-square "></i>
    </button>
    <button onclick="deleted(${i})" id="delet">
    <i class="fa-solid fa-trash"></i>
    </button>
    </td>
    </tr>   
    `;
    
}
tbody.innerHTML=x;

}
 function deleted(i){
 datasub.splice(i,1);
 readData();
 var result=confirm("Are you sure to delete this data?")
 
 }
  function updated(i){
  name.value=datasub[i].name;
  email.value=datasub[i].email;
  salary.value=datasub[i].salary;
  city.value=datasub[i].city;
  }
