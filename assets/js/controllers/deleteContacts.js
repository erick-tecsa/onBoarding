import { getContact } from '../controllers/listContactsController.js';
import configurableMessage from '../view/view.js';

function deleteContact(id) {
    try {
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

        configurableMessage('Cadastro deletado com sucesso!', '#ff6666');

        setTimeout(() => {
            location.reload();
        }, 500);
    } catch (e) {
        console.log(e);
        location.reload();
    }
}

export default async function deleteContactsInDatabase(index) {
    const data = await getContact();
    const dataToDelete = data[index];

    deleteContact(dataToDelete.id);
}
