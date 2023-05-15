const btn = document.querySelector('#add');
const mytask = document.querySelector('#mytasks');
const time = document.querySelector('#time');
const input = document.querySelector('#input');


btn.addEventListener('click', () => {
    // validating empty input is not supported
    if (input.value.length === 0 || time.value.length === 0) {
        alert("All inputs are required");

    } else {
        mytask.innerHTML += `<div class="added"><span>${input.value}</span><span>${time.value}</span><button id="del">DELETE</button></div>`
            // deleting a task
        let del = document.querySelectorAll('#del')
        del.forEach(btn => {
                btn.addEventListener('click', function() {
                    this.parentNode.remove();
                })
            })
            // Underlining completed tasks
        let added = document.querySelectorAll(".added");
        added.forEach(complete => {
            complete.addEventListener('click', function() {
                this.classList.toggle('complete');
            })
        })

        input.value = "";
        time.value = "";
    }

});