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

// $('#tekst').html('PROMENJEN TEKST...');
// $('#tekst').on('click', function() {
//     $(this).fadeOut(2000);
// });
// $('#klasa').on('click', function() {
//     $(this).toggleClass('red');
// });


// $("button").click(function(){
//     $.ajax({url: "data/demo_test.txt", success:
//         function(result){
//             $("#div1").html(result);
//     }});
// }); 

// document.querySelector('button').addEventListener('click', function() {
//     fetch('data/demo_test.txt')
//     .then((json) => {
//         return json.text();
//     })
//     .then((data) => {
//         document.querySelector('#div1').innerHTML = data;
//     })
// });

let svePesme;

$('button').on('click', function() {
    $.ajax({
        url: 'data/domacepesme.json',
        success: function(result) {
            svePesme = result.pesme;
            popuniHtml();
        },
        error: function(err) {
            let el = document.createElement('div');
            el.classList = 'error_div';
            el.classList += (err.status >= 400 && err.status < 500) ? ' red' : '';
            el.classList += (err.status >= 500 && err.status < 600) ? ' orange' : '';
            el.innerHTML = err.statusText;
            document.body.append(el);
            setTimeout(() => {
                document.body.removeChild(el);
            }, 7500);
        }
    })
});

function popuniHtml() {
    let text = '<tr><th>Broj numere</th><th>Naziv pesme</th><th>Izvodjac</th><th>Obrisi</th><th>Izmeni</th></tr>';
    svePesme.forEach((el) => {
        text += `<tr><td>${el.id}</td><td>${el.ime}</td><td>${el.izvodjac}</td><td><span data-id="${el.id}" class="fa fa-trash" aria-hidden="true"></span></td><td><span class="fa fa-pencil" aria-hidden="true"></span>
        </td></tr>`;
    });
    $('table').html(text);
    document.querySelectorAll('.fa-trash').forEach((el) => {
        el.addEventListener('click', function() {
            let id = this.getAttribute('data-id');
            svePesme = svePesme.filter((el) => {
                if (el.id != id) {
                    return el;
                }
            });
            popuniHtml();
        });
    });
    // $('.fa-trash').click(function() {
    //     let id = Number($(this).attr('data-id'));
    //     svePesme = svePesme.filter((el) => {
    //         if (el.id !== id) {
    //             return el;
    //         }
    //     });
    //     popuniHtml();
    // });
}

// let users;

// $('button').click(function() {
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/users',
//         success: function(data) {
//             users = data;
//             let rand = Math.ceil(Math.random() * 10);
//             fetch(`https://jsonplaceholder.typicode.com/users/${rand}`)
//                 .then(json => json.json())
//                 .then(data => {
//                     console.log(data);
//                 })
//         },
//         error: function(err) {
//             console.log(err);
//         }
//     });
// });