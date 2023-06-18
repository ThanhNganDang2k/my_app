

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-login');

    console.log(signUpButton);
// console.log(signInButton);
// console.log(container);
if (signUpButton) {

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        console.log(signUpButton);
    });
} 
if(signInButton) {
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        console.log(signInButton);
    });
}


    // signUpButton.addEventListener('click',buttonClicked, true, () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click',buttonClicked, true, () => {
    //     container.classList.remove("right-panel-active");
    // });
