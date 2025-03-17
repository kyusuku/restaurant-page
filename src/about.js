export function loadAbout() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    const contact = document.createElement('div');
    contact.classList.add('about-contact');
    const ownerName = document.createElement('h2');
    ownerName.textContent = 'Suku Hirosaki';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+81 90-1234-5678';
    const email = document.createElement('p');
    email.textContent = 'suku.hirosaki@matchaco.jp';
    contact.appendChild(ownerName);
    contact.appendChild(phoneNumber);
    contact.appendChild(email);

    content.appendChild(title);
    content.appendChild(contact);
};