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


let edit = document.getElementById('edit')