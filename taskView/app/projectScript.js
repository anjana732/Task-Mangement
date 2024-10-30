document.addEventListener("DOMContentLoaded", () => {
    console.log("in js file");
});

function toggleDropdown() {
    const dropdownList = document.getElementById('dropdownList');
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
}

function selectOption(status, color) {
    document.getElementById('selectedStatus').innerText = status;
    document.getElementById('selectedStatus').style.color = color;
    document.getElementById('dropdownList').style.display = 'none';
}

function filterOptions() {
    const searchInput = document.querySelector('.dropdown-search').value.toLowerCase();
    const options = document.querySelectorAll('.dropdown-option');

    options.forEach(option => {
        const text = option.innerText.toLowerCase();
        option.style.display = text.includes(searchInput) ? 'flex' : 'none';
    });
}

window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdownList').style.display = 'none';
    }
};


let edit = document.getElementById('edit');
let form = document.getElementById('desc-form');
edit.addEventListener('click',function(){
    document.getElementById('desc-form').style.display = 'block';
    edit.style.display = 'none';
})

let cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click',function(){
    
    document.getElementById('desc-form').style.display = 'none';
})

let saveBtn = document.getElementById('save-btn');
const descriptionEditior = document.getElementById('description-editor');
const descriptionText = null;
saveBtn.addEventListener('click',function(){
    descriptionText = descriptionEditior.value;
    console.log(descriptionText);
    document.getElementById('desc-form').style.display = 'none';
})

let extend = document.getElementById('extend');
let savedDesc =  document.getElementById('saved-desc');
extend.addEventListener('click',function(){
    if(descriptionText==null){
        savedDesc.innerHTML = `No Description Available`;
    }else{
        savedDesc.innerHTML = descriptionText;
    }
    if(savedDesc.style.display == 'none'){
        document.getElementById('saved-desc').style.display = 'block';
    }else{
        savedDesc.style.display = 'none';
    }
})

function showTab(tabId) {
    
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

   
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

let expandTask = document.getElementById('expand-task');
let expandTaskList = document.getElementById('task-expand-list');

expandTask.addEventListener('click',function(){
    if (expandTaskList.style.display === 'block') {
        expandTaskList.style.display = 'none';
    } else {
        expandTaskList.style.display = 'block';
    }
})

