function addArt() {
    const image = document.getElementById('art-image').files[0];
    const name = document.getElementById('art-name').value;
    const cost = document.getElementById('art-cost').value;

    if (image && name && cost) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newArt = document.createElement('div');
            newArt.classList.add('art');
            newArt.innerHTML = `
                <img src="${e.target.result}" alt="${name}">
                <p class="cost">$Rs.{cost}</p>
            `;
            document.getElementById('gallery').appendChild(newArt);
        };
        reader.readAsDataURL(image);

        // Clear input fields
        document.getElementById('art-image').value = '';
        document.getElementById('art-name').value = '';
        document.getElementById('art-cost').value = '';
    } else {
        alert('Please fill in all the fields.');
    }
}
