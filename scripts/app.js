<!-- SCRIPTS -->
<script type="text/javascript" src="scripts/app.js">
<!--
	$(document).ready(function() {
		$("#popUp").click(function() {
		});
	});
 -->


	$(document).ready(function() {
		$("#addNote").click(function() {
			$('#mydiv').toggle();
		});
	});


	$(document).ready(function() {
		$("#popUp").click(function() {
			var buttons = document.getElementsByClassName('dropdown-item');
			for (var i = 0; i < buttons.length; i++) {
				(function(index) {
					buttons[index].onclick = function() {
						alert("I am button " + index);
					};
				});
			}
		});
	});



	// $("#dropDownMenuID").click(function() {
	//   var buttons = document.getElementsByClassName('dropdown-item');
	//   for (var i = 0; i < buttons.length; i++) {
	//     (function(index) {
	//       buttons[index].onclick = function() {
	//         alert("I am button " + index);
	//       };
	//     });
	//   }
	// });

<!-- MOVEING DIV FROM HERE!!!!!!!!!!! -->

	//Make the DIV element draggagle:
	dragElement(document.getElementById("mydiv"));

	function dragElement(elmnt) {
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		if (document.getElementById(elmnt.id + "header")) {
			/* if present, the header is where you move the DIV from:*/
			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

<!-- MOVEING DIV END HERE!!!!!!!!!!! -->



<!--Google maps Script HERE!!!!!!!!!!!!!!!  -->

	///////////////////////////////////////////////////////////////////
	var map;

	function initMap() {
		//map options
		var options = {
			zoom: 8,
			center: {
				lat: 42.3601,
				lng: -710589
			}
		}

		////////////////new map/////////////////////////////////////////////
		map = new google.maps.Map(document.getElementById('map'), options);

		/////////////make clustor////////////////////////
		makeClustor();

		///////////////listen for a click on the map////////////////////
		google.maps.event.addListener(map, 'click',
			function(event) {
				//add marker after click
				addMarker({
					coords: event.latLng
				});
			});
		//////////////////////////////////////////////////////////////////////////////
		/////////make all initial markers///////////////////////////////
		//all the initial markers loaded up
		var markers = [{
				coords: {
					lat: 42.4668,
					lng: -70.9495
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: 22.4668,
					lng: -70.9495
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: 32.4668,
					lng: -70.9495
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -31.563910,
					lng: 147.154312
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -33.718234,
					lng: 150.363181
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -33.727111,
					lng: 150.371124
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -33.848588,
					lng: 151.209834
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -33.851702,
					lng: 151.216968
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -34.671264,
					lng: 150.863657
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -35.304724,
					lng: 148.662905
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -36.817685,
					lng: 175.699196
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -36.828611,
					lng: 175.790222
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -37.750000,
					lng: 145.116667
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -37.759859,
					lng: 145.128708
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			},
			{
				coords: {
					lat: -37.765015,
					lng: 145.133858
				},
				iconImage: 'img/home.png',
				content: '<h2> Nice choice beez</h2>'
			}
		];

		//loop through markers
		for (var i = 0; i < markers.length; i++) {
			//add markers to the map
			addMarker(markers[i]);
		}
		//////////////////////////////////////////////////////////////////
		////////////////////////add marker function/////////////////////
		function addMarker(props) {

			//get location form
			var locationForm = document.getElementById('location-form');

			locationForm.addEventListener('submit', geocode)

			var marker = new google.maps.Marker({
				position: props.coords,
				map: map,
			});
			//check for custom icom
			if (props.iconImage) {
				//set icon image
				marker.setIcon(props.iconImage);
			}
			//check label of marker
			if (props.content) {
				var InfoWindow = new google.maps.InfoWindow({
					content: props.content
				});
			}
		}
		/////////////////////////////////////////////////////////////////////////////
		////////////Clustor maker/////////////////////////////////////////////
		function makeClustor() {

			//locations in clustor
			var locations = [{
					lat: -31.563910,
					lng: 147.154312
				},
				{
					lat: -33.718234,
					lng: 150.363181
				},
				{
					lat: -33.727111,
					lng: 150.371124
				},
				{
					lat: -33.848588,
					lng: 151.209834
				},
				{
					lat: -33.851702,
					lng: 151.216968
				},
				{
					lat: -34.671264,
					lng: 150.863657
				},
				{
					lat: -35.304724,
					lng: 148.662905
				},
				{
					lat: -36.817685,
					lng: 175.699196
				},
				{
					lat: -36.828611,
					lng: 175.790222
				},
				{
					lat: -37.750000,
					lng: 145.116667
				},
				{
					lat: -37.759859,
					lng: 145.128708
				},
				{
					lat: -37.765015,
					lng: 145.133858
				},
				{
					lat: -37.770104,
					lng: 145.143299
				},
				{
					lat: -37.773700,
					lng: 145.145187
				},
				{
					lat: -37.774785,
					lng: 145.137978
				},
				{
					lat: -37.819616,
					lng: 144.968119
				},
				{
					lat: -38.330766,
					lng: 144.695692
				},
				{
					lat: -39.927193,
					lng: 175.053218
				},
				{
					lat: -41.330162,
					lng: 174.865694
				},
				{
					lat: -42.734358,
					lng: 147.439506
				},
				{
					lat: -42.734358,
					lng: 147.501315
				},
				{
					lat: -42.735258,
					lng: 147.438000
				},
				{
					lat: -43.999792,
					lng: 170.463352
				}
			]

			// Create an array of alphabetical characters used to label the markers.
			var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


			// Add some markers to the map.
			// Note: The code uses the JavaScript Array.prototype.map() method to
			// create an array of markers based on a given "locations" array.
			// The map() method here has nothing to do with the Google Maps API.
			var markers = locations.map(function(location, i) {
				return new google.maps.Marker({
					position: location,
					label: labels[i % labels.length]
				});
			});

			// Add a marker clusterer to manage the markers.
			var markerCluster = new MarkerClusterer(map, markers, {
				imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
			});
		}
		////////////////search bar geo response//////////////////////////////////
		/////////////////////////////////////////////////////////////////
		function geocode(e) {

			e.preventDefault(); //prevent it from doing a event, stops the blinking

			var location = document.getElementById('location-input').value; //grabbing the calue put into the search bar and storing it in var location
			axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
					params: {
						address: location,
						key: 'AIzaSyAbmwSaBUQ-qEG_JbVQ8XcSO-D9wfnCmak'
					}
				})
				.then(function(response) {
					//got all the data we needed
					console.log(response);

					//formatted address fetch
					var formattedAddress = (response.data.results[0].formatted_address);
					var formattedAddressOutput = `
		<ul class = "list-group">
			<li class = "list-group-item">${formattedAddress}</li>
		</ul>
		`; //the back dash allows me to put all this html togther and the $ is for a varialbles

					//address components, Its array this time
					var addressComponents = response.data.results[0].address_components;
					var addressComponentsOutput = '<ul class = "list-group">';
					for (var i = 0; i < addressComponents.length; i++) {
						addressComponentsOutput += `
			<li
			class = "list-group-item"><strong>${addressComponents[i].types[0]
			}</strong>: ${addressComponents[i].long_name}</li>
			`;
					}
					addressComponentsOutput += '</ul>';
					//end of section address components

					//Geometry
					var lat = response.data.results[0].geometry.location.lat;
					var lng = response.data.results[0].geometry.location.lng;
					var geometryOutput =
						`
				<ul class = "list-group">
					<li class = "list-group-item"><strong>Latitude</strong>:
					${lat}</li>
					<li class = "list-group-item"><strong>Longitude</strong>:
					${lng}</li>
				</ul>
				`;

					////////////Output to Form/////////////////
					document.getElementById('formatted-adress').innerHTML = formattedAddressOutput;
					document.getElementById('address-components').innerHTML = addressComponentsOutput;
					document.getElementById('geometry').innerHTML = geometryOutput;

					//////////////////////////////////////////////////
					//move map to be centered where user searched
					var center = new google.maps.LatLng(lat, lng);
					map.panTo(center);
					//////////////////////////////////////////////////
					addMarker({
						coords: {
							lat,
							lng
						}
					});

				})
				.catch(function(error) {
					console.log(error);
				});
		}
		/////////////////////////////////////////////////////////////
	}



//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


//Event handling, uder interaction is what starts the code execution.

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("button");//edit button

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");

	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.
