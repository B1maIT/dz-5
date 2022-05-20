let button = document.querySelector('.save');
let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let ul = document.querySelector('ul');
let deleteBtn = document.querySelector('.delete-all')



button.addEventListener('click', function (event) {
    event.preventDefault();

    let formName = inputName.value;
    let formPhone = inputPhone.value;
    let user = {};

    if (formName !== '' && formPhone !== '') {
        user.name = formName;
        user.phone = formPhone;

        userInfo = [`${user.name} - ${user.phone}`]

        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = userInfo;
        
        li.addEventListener('click', function (event) {
            li.className = 'delete'

        })

        console.log(`${user.name} ${user.phone}`);

        localStorage.setItem(`user${localStorage.length}`, JSON.stringify(user));

        inputName.value = '';
        inputPhone.value = '';
    } else {
        alert('Fill the form');
    }
   
});

deleteBtn.addEventListener('click', function (event) {
    event.preventDefault()
    localStorage.clear();
    ul.innerHTML = ''
})

