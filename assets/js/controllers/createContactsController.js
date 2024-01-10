import configurableMessage from '../view/view.js';

function openModal() {
    document.getElementById('modal').classList.add('active');

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modal').classList.remove('active');
    });
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('title').value = '';
}

export default async function createContactsInDatabase() {
    try {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const title = document.getElementById('title').value;

        const contact = {
            name,
            lastName,
            email,
            phone,
            title,
        };

        if (
            contact.name &&
            contact.lastName &&
            contact.email &&
            contact.phone &&
            contact.title
        ) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            };

            await fetch('./api/createContacts.php', options).then((data) => {
                if (!data.ok) {
                    throw Error(data.status);
                }
                return data.json();
            });

            document.getElementById('modal').classList.remove('active');

            configurableMessage('Cadastro criado com sucesso!', 'green');

            setTimeout(() => {
                location.reload();
            }, 500);
        } else {
            alert('O formulário não pode estar em branco');
        }
    } catch (e) {
        console.log(e);
        location.reload();
    }
}

document.getElementById('createContact').addEventListener('click', openModal);
