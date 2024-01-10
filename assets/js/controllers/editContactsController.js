import { getContact } from './listContactsController.js';

function openUpdateModal() {
    document.getElementById('updateModal').classList.add('active');

    document
        .getElementById('updateCloseModal')
        .addEventListener('click', () => {
            document.getElementById('updateModal').classList.remove('active');
        });

    document.getElementById('saveEdition').addEventListener('click', () => {
        document.getElementById('updateModal').classList.remove('active');
        location.reload();
    });
}

function showModalWithInformation(dataToEdit) {
    openUpdateModal();
    document.getElementById('updateName').value = dataToEdit.name;
    document.getElementById('updateLastName').value = dataToEdit.lastName;
    document.getElementById('updateEmail').value = dataToEdit.email;
    document.getElementById('updatePhone').value = dataToEdit.phone;
    document.getElementById('updateTitle').value = dataToEdit.title;
}

function updateDatabase(id) {
    const name = document.getElementById('updateName').value;
    const lastName = document.getElementById('updateLastName').value;
    const email = document.getElementById('updateEmail').value;
    const phone = document.getElementById('updatePhone').value;
    const title = document.getElementById('updateTitle').value;

    const updateContact = {
        id,
        name,
        lastName,
        email,
        phone,
        title,
    };

    if (
        updateContact.name &&
        updateContact.lastName &&
        updateContact.email &&
        updateContact.phone &&
        updateContact.title
    ) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateContact),
        };

        fetch('./api/editContacts.php', options).then((data) => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        });
    } else {
        alert('O formulário não pode estar em cinza');
    }
}

export default async function editContactsInDatabase(clickIndex) {
    const data = await getContact();
    let dataToEdit = data[clickIndex];

    showModalWithInformation(dataToEdit);

    document.getElementById('saveEdition').addEventListener('click', (e) => {
        e.preventDefault();
        updateDatabase(dataToEdit.id);
    });
}
