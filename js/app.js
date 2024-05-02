//sign up form



// function submit() {
//     let username = document.getElementById('username').value;
//     let password = Number(document.getElementById('password').value)
//     if (username === "admin") {
//         if (password === "123") {
//             alert("Success");
//         } else {
//             alert("Wrong password");
//         }
//     } else {
//         if (password === "123") {
//             alert("Wrong username");
//         } else {
//             alert("Wrong username and password");
//         }
//     }
// }


// const isShow = () => {

//     let password = document.getElementById('password')
//     if (password.type === "password") {
//         password.type = "text"
//     } else {
//         password.type = "password"
//     }
// }


//create element

// const create = (e) => {
//     e.preventDefault()
//     let result = document.getElementById('result')
//     let width = e.target[0].value
//     let height = e.target[1].value
//     let bg_color = e.target[2].value
//     let border_r = e.target[3].value
//     console.log(width, height, bg_color, border_r)
//     result.style.width = `${width}px`
//     result.style.height = `${height}px`
//     result.style.backgroundColor = bg_color
//     result.style.borderRadius = `${border_r}px`
// }


//find words

// function countWords() {
//     const textarea = document.getElementById('myTextarea');
//     const wordCount = document.getElementById('wordCount');

//     const text = textarea.value.trim();
//     const words = text.split(/\s+/).filter(word => word.length > 0);
//     wordCount.textContent = words.length + ' word';
// }