import Routes from '../routes/routes.js';

export async function getContact() {
    const data = await fetch('./api/listContacts.php');
    const response = await data.json();

    return response;
}

export async function listInHtml() {
    const contact = await getContact();
    const tbody = document.getElementById('registration');

    const tableFields = [
        'id',
        'name',
        'lastName',
        'email',
        'phone',
        'title',
        'createdAt',
        'editar',
        'deletar',
    ];
    const tableClasses = [
        'order',
        'fname',
        'lname',
        'email',
        'phone',
        'title',
        'createdAt',
        'edit',
        'delete',
    ];

    contact.forEach((element) => {
        let row = document.createElement('tr');

        for (let i = 0; i < tableFields.length; i++) {
            let key = tableFields[i];
            let column = document.createElement('td');

            if (tableClasses[i]) {
                column.setAttribute('class', tableClasses[i]);
            }

            if (element[key]) {
                column.innerHTML = element[key];
            } else {
                column.innerHTML = key;
            }

            row.appendChild(column);
        }

        tbody.appendChild(row);
    });

    const editButtons = document.querySelectorAll('.edit');
    Routes.editContacts(editButtons);

    const deleteButtons = document.querySelectorAll('.delete');
    Routes.deleteContacts(deleteButtons);
}
