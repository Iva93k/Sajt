var firstMenu = document.querySelector('.menu.first'),
    secondMenu = document.querySelector('.menu.second'),
    thirdMenu = document.querySelector('.menu.third'),
	fourthMenu = document.querySelector('.menu.fourth'),
	fifthMenu = document.querySelector('.menu.fifth'),
	sixtMenu = document.querySelector('.menu.sixth');

var firstDropdown = document.querySelector('.dropdown.first'),
    secondDropdown = document.querySelector('.dropdown.second'),
    thirdDropdown = document.querySelector('.dropdown.third'),
	fourthDropdown = document.querySelector('.dropdown.fourth'),
	fifthDropdown = document.querySelector('.dropdown.fourth'),
	sixthDropdown = document.querySelector('.dropdown.sixth');

	firstMenu.addEventListener('mouseover', function () {
    firstDropdown.style.display = 'inline';
});

firstMenu.addEventListener('mouseout', function () {
    firstDropdown.style.display = 'none';
});

secondMenu.addEventListener('mouseover', function () {
    secondDropdown.style.display = 'inline';
});

secondMenu.addEventListener('mouseout', function () {
    secondDropdown.style.display = 'none';
});

thirdMenu.addEventListener('mouseover', function () {
    thirdDropdown.style.display = 'inline';
});

thirdMenu.addEventListener('mouseout', function () {
    thirdDropdown.style.display = 'none';
});

fourthMenu.addEventListener('mouseover', function () {
    fourthDropdown.style.display = 'inline';
});

fourthMenu.addEventListener('mouseout', function () {
    fourthDropdown.style.display = 'none';
});

fifthMenu.addEventListener('mouseover', function () {
    fifthDropdown.style.display = 'inline';
});

fifthMenu.addEventListener('mouseout', function () {
    fifthDropdown.style.display = 'none';
});

sixthMenu.addEventListener('mouseover', function () {
    sixthDropdown.style.display = 'inline';
});

sixthMenu.addEventListener('mouseout', function () {
    sixthDropdown.style.display = 'none';
});

