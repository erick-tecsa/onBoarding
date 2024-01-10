import { getContact } from '../controllers/listContactsController.js';

function deleteContact(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    };

    fetch('./api/deleteContacts.php', options).then((data) => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    });

    location.reload();
}

export default async function deleteContactsInDatabase(index) {
    const data = await getContact();
    const dataToDelete = data[index];

    deleteContact(dataToDelete.id);
}
