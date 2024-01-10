<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CRUD PHP</title>
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>

        <main>
            <section>
                <button id="createContact">Create Contact</button>
                <input type="text" name="search" id="search" placeholder="Search...">
            </section>
            <table>
                <thead>
                    <tr>
                        <td class="order">Id</td>
                        <td class="fname">Nome</td>
                        <td class="lname">Sobrenome</td>
                        <td class="email">E-mail</td>
                        <td class="phone">Telefone</td>
                        <td class="title">Título</td>
                        <td class="createdAt">Criado em</td>
                    </t>
                </thead>
                
                <tbody id="registration">
                    </tbody>
                </table>
            </main>
            
            <section class="modal" id="modal">
                <form>
                    <div class="closeModal" id="closeModal">X</div>
                    <input type="text" name="name" id="name" placeholder="Nome">
                    <input type="text" name="lastName" id="lastName" placeholder="Sobrenome">
                    <input type="text" name="email" id="email" placeholder="E-mail">
                    <input type="text" name="phone" id="phone" placeholder="Telefone">
                    <input type="text" name="title" id="title" placeholder="Título">
                    <button class="save" id="save">Salvar</button>
                </form>
            </section>

            <section class="modal" id="updateModal">
                <form>
                    <div class="closeModal" id="updateCloseModal">X</div>
                    <input type="text" name="name" id="updateName" placeholder="Nome">
                    <input type="text" name="lastName" id="updateLastName" placeholder="Sobrenome">
                    <input type="text" name="email" id="updateEmail" placeholder="E-mail">
                    <input type="text" name="phone" id="updatePhone" placeholder="Telefone">
                    <input type="text" name="title" id="updateTitle" placeholder="Título">
                    <button class="save" id="saveEdition">Salvar</button>
                </form>
            </section>

            <script src="./assets/js/routes/routes.js" type="module"></script>
        </body>
        </html>