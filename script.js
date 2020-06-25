 /*
var icons = document.getElementsByClassName('fa');

Array.from(icons).forEach(function(icon){
	console.log(icon);
});

var lis = document.getElementsByTagName('li');
console.log(lis);

var h2 = document.querySelector('header h2');
//h2.className = 'changeBg';
//h2.classList.add('changeFt');

//console.log(h2.classList);
 
h2.addEventListener('click', a);

function a() {
	console.log('clicked')
}
*/




/* manipulating DOM USING ATTRIBUTE METHOD



var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');

btn.addEventListener('click', function(e) {
	e.preventDefault();
	
	input.setAttribute('type', 'submit');
	input.setAttribute('value', input.value);
});		
*/
									
/* dom navigation 

var listItem = document.getElementById('list-item');
*/


// ------------ADD INPUT AND LIST

let ul = document.querySelector('ul');
let addInput = document.getElementById('add-input');
	

document.getElementById('add-btn').addEventListener('click', (e) => {
	e.preventDefault();
	
	
	if(addInput.value !== '') {
	
	let li = document.createElement('li'),
	firstPar = document.createElement('p'),
	secondPar = document.createElement('p'),
	firstIcon = document.createElement('i'),
	secondIcon = document.createElement('i'),
	input = document.createElement('input');
	
	firstIcon.className = "fa fa-pencil-square-o";
	secondIcon.className = "fa fa-times";
	
	input.className = "edit-note";
	input.setAttribute = ('type', 'text');
	
	firstPar.textContent = addInput.value;
	secondPar.appendChild(firstIcon);
	secondPar.appendChild(secondIcon);
	li.appendChild(firstPar);
	li.appendChild(secondPar);
	li.appendChild(input);
	ul.appendChild(li);
	addInput.value = '';
	}
	
	
});

//*******EDIT AND DELETE ITEMS**********
ul.addEventListener('click', function(e) {
	if (e.target.classList[1] === "fa-pencil-square- o") {
		let parameter = e.target.parentNode;
		parentPar.style.display = 'none';
		
		let note = parentPar.previousElementSibling;
		let input = parentPar.nextElementSibling;
		
		input.style.display = 'block';
		input.value = note.textContent;
		
		input.addEventListener('keyPress', function(e) {
			if(e.keyCode === 13) {
				if(input.value !== '') {
					note.textContent = input.value;
					parentPar.style.display = 'block';
					input.style.display = 'none';
				}else{
					let li = input.parentNode;
					li.parentNode.removeChild(li);
                }
			}
		});
	}else if(e.target.classList[1] === "fa-times") {
		let list = e.target.parentNode.parentNode;
		list.parentNode.removeChild(list);
	}
});

//***************HIDE ITEMS//* ******************

let hideItem = document.getElementById('hide');
hideItem.addEventListener('click', function() {
	
	let label = document.querySelector('label');
	label.textContent = 'Reveal notes';
	if(hideItem.checked) {
		
		ul.style.display = 'none'; 
	}else {
		label.textContent = 'Hide notes';
		ul.style.display = 'block';
		
	}
});

//**********SEARCH FILTER**************//
let searchInput = document.querySelector('#search-note input');
searchInput.addEventListener('keyup', function(e) {
	//********add event object(e) and property target****
	let searchChar = e.target.value.toUpperCase();
	
	let notes = ul.getElementsByTagName('li');
//*****	**TO COMPARE THE VALUE OF 'LI' TO EACH LIST ITEM*
	//*** LOOP THROUGH THE ITEMS USING FOR LOOP OR forEach*******
	Array.from(notes).forEach(function(note) {
		let parText = note.firstElementChild.textContent;
if(parText.toUpperCase().indexOf(searchChar) !== -1) {
		note.style.display = 'block';
	
		}else {
			note.style.display = 'none';
		}
	});
});
 
