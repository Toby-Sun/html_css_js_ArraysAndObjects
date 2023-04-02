var customerarray=[];
var i=0;

function addToArray() {
	var customerobject={lastname,firstname,postalcode,phone,email};
	customerobject.lastname=document.getElementById("lastname").value;
	customerobject.firstname=document.getElementById("firstname").value;
	customerobject.postalcode=document.getElementById("postalcode").value;
	customerobject.phone=document.getElementById("phone").value;
	customerobject.email=document.getElementById("email").value;
	customerarray.push(customerobject);
	displayList();	
}

function displayList() {
	var customer;
	var displayRadiobuttions=""
	
	for(var i=0; i< customerarray.length;i++)
 		{
 		var customerobject={lastname,firstname,postalcode,phone,email};
 		customerobject=customerarray[i];

 		customer=customerobject.firstname + " " +customerobject.lastname+ ", " +customerobject.postalcode+ ", " +customerobject.phone+ ", " +customerobject.email;
 		
 		//create radio button elements
 		displayRadiobuttions+="<input type=radio name=listitem ";
 		displayRadiobuttions+=" value="+i+" ";
 		displayRadiobuttions+=" onchange=deleteItem(this.value)>"
 		displayRadiobuttions+=customer+"<br>";		
 		}
 		
document.getElementById("showlist").innerHTML=displayRadiobuttions;
}

function deleteItem(i) {
	customerarray.splice(i,1);
	displayList();
	
}