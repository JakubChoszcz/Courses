"use strict";
const btn = document.querySelector('button');
// a comment
if (btn) {
    btn.addEventListener('click', () => {
        console.log('Clicked!');
    });
}
