//module for creating the contact page
const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElementent('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const phoneInput = document.createElementent('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter phone';
    form.appendChild(addressInput);

    const addressInput = document.createElementent('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';
    form.appendChild(pageContent);
}
export default createContactPage;