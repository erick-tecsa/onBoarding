import { listInHtml } from '../controllers/listContactsController.js';
import createContactsInDatabase from '../controllers/createContactsController.js';
import editContactsInDatabase from '../controllers/editContactsController.js';
import deleteContactsInDatabase from '../controllers/deleteContacts.js';

export default class Routes {
    static async loadContactsInformation() {
        await listInHtml();
    }

    static createContacts() {
        document.getElementById('save').addEventListener('click', async (e) => {
            e.preventDefault();
            await createContactsInDatabase();
        });
    }

    static editContacts(editButtons) {
        editButtons.forEach((element, index) => {
            element.addEventListener('click', async () => {
                await editContactsInDatabase(index);
            });
        });
    }

    static deleteContacts(deleteButtons) {
        deleteButtons.forEach((element, index) => {
            element.addEventListener('click', async () => {
                await deleteContactsInDatabase(index);
            });
        });
    }
}

Routes.loadContactsInformation();

document.getElementById('createContact').addEventListener('click', () => {
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('title').value = '';
    Routes.createContacts();
});
