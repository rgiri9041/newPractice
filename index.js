const container = document.querySelector("#container");
const button = document.createElement('button');
button.textContent = "Click me";
button.classList.add('newbtn');
container.appendChild(button);

const count = document.createElement('div');
count.classList.add('count');
count.textContent = 1;
container.appendChild(count);
// let countnum  = 1;
button.onclick = function() {
    // countnum++;
    count.textContent++
    count.textContent = count.textContent;
    console.log(count.textContent);
}