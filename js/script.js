// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		console.log(JSON.parse(xhttp.responseText));
// 	}
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// xhttp.send();

// console.log(1);
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(json => {
//         console.log(json);
//         return json.json();
//     })
//     .then(data => {
//         console.log(data);
//     });
// console.log(2);


//TODO: JQuery

$('#tekst').html('PROMENJEN TEKST...');
$('#tekst').on('click', function() {
    $(this).fadeOut(2000);
});
$('#klasa').on('click', function() {
    $(this).toggleClass('red');
});