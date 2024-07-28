document.getElementById('login').addEventListener('click', (event) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

    clearErrors();

    let valid = true;
    switch (true) {
        case username === "":
            showError('usernameError', "Please enter a username");
            valid = false;
    
            break;
        case password === "":
            showError('passwordError', "Please enter a password");
            valid = false;
            break;
        default:
            // All fields are valid
            break;
    }

    // Prevent form submission if there are validation errors
    if (!valid) {
        event.preventDefault();
    }
  
const getUsers = ()=>{
    return new promise((resolve,reject)=>{
        const users = JSON.parse(localStorage.getItem('users'));
        if(users){
            resolve(users);
        }else{
            reject('No user found');
        }
    });
};

getUsers().then(users =>{
 const user = users.find(user => user.username === username && user.password === password);
 if(user){
    alert('login');
    window.location.href = 'product.html';
 }else{
    alert('invalid')
 }
}).catch(error =>{
    alert(error);
});

   

});





// // Function to display error messages
// function showError(elementId, message) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.style.color = 'red';
//     errorElement.innerHTML = message;
// }

// // Function to clear all error messages
// function clearErrors() {
//     document.querySelectorAll('.error').forEach(el => {
//         el.innerHTML = '';  // Clear the error message
       
//     });
// }


// document.getElementById('username').addEventListener('input', () => {
//     const username = document.getElementById('username').value;
//     if (username !== "") {
//         clearError('usernameError');
//     }
// });

// document.getElementById('password').addEventListener('input', () => {
//     const password = document.getElementById('password').value;
//     if (password !== "") {
//         clearError('passwordError');
//     }
// });

// // Function to clear a specific error message
// function clearError(elementId) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.innerHTML = '';
// }

// document.getElementById('login').addEventListener('click',()=>{
//     const custId = document.getElementById('username').value;
//     const customerId = localStorage.getItem('username');
  
    
    