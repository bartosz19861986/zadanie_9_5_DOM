var buttonsItemsClass = document.getElementsByClassName('buttons');

var lengthOfButtons = (buttonsItemsClass.length);
console.log (lengthOfButtons);

for ( i = 0 ; i < lengthOfButtons ; i++) {

		var x = buttonsItemsClass[i].innerText;
		alert(x);
	}

