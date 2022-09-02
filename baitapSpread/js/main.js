let heading = document.querySelector('.heading').innerHTML.split('');
let arrs = [...heading];
let content = ''
for (let key of arrs) {
    content += `<span>${key}</span>`
}
document.querySelector('.heading').innerHTML = content;
// document.body.style.backgroundColor = 'red'