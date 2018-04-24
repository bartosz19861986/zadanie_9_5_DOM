var buttonsItemsClass = document.getElementsByClassName('buttons');

console.log(buttonsItemsClass);

var lengthOfButtons = (buttonsItemsClass.length);
console.log (lengthOfButtons);

for ( i = 0 ; i < lengthOfButtons ; i++) {

		var x = document.getElementsByClassName('buttons').innerText;
		document.write (x);
	}

