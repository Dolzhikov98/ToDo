"use strict"

function change_color() {
    let check = document.getElementsByClassName('check_f');
    let block = document.getElementsByClassName('elemetns-content');
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            block[i].style.background = 'rgb(157, 238, 157)';
        } else {
            block[i].style.background = 'rgb(217, 221, 224)';
        }
    }
}

function newElements() {

    let inp_text = document.getElementById('inp_require').value;
    if (inp_text === '') {
        alert('Вы ничего не ввели !!! ');
    } else {
        let content = document.getElementById('content');
        let div = document.createElement('div')
        div.className = 'elements';
        let div_check = document.createElement('div');
        div_check.className = 'check';
        let elemetns_content = document.createElement('div');
        elemetns_content.className = 'elemetns-content';
        let inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.className = 'check_f';
        inp.addEventListener('click', change_color);
        div_check.append(inp);
        let simple_div = document.createElement('div');
        let delete_div = document.createElement('div');
        delete_div.className = 'delete';
        delete_div.innerHTML = '&times';
        let text = document.createElement('p');
        simple_div.className = 'text_cont';
        text = inp_text;
        simple_div.append(text);
        elemetns_content.append(simple_div);
        elemetns_content.append(delete_div);
        div.append(div_check);
        div.append(elemetns_content);
        content.append(div);
        div.style.display = 'flex';

        document.getElementById('inp_require').value = '';
    }

}


let content = document.getElementById('content');
content.onclick = function(event) {
    let array = document.getElementsByClassName('elements');
    let deleted = document.getElementsByClassName('delete');
    if (event.target.className == 'delete') {
        for (let i = 0; i < deleted.length; i++) {
            if (event.target == deleted[i]) {
                array[i].remove();
            }
        }
    }
}

let serch_inp = document.getElementById('serch_inp');
let serch_btn = document.getElementById('Search_btn');

serch_inp.addEventListener('input', () => {
    let serch_inp_val = document.getElementById('serch_inp').value;
    let array = document.getElementsByClassName('text_cont');
    let main_array = document.getElementsByClassName('elements');
    // let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (!(array[i].innerHTML.includes(serch_inp_val))) {
            main_array[i].style.display = 'none';
        } else {
            main_array[i].style.display = 'flex';
        }
    }
})