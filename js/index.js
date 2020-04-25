/* function declaratiion */
// function toggleMenu() {

// }

/*function expression */
// const toggleMenu = function() {

// }


/*arrow syntax*/
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
}

document.querySelector('#navigation').addEventListener('click', toggleMenu);