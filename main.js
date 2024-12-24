const form = document.getElementById('form-contatos');
const listaDeContato = document.getElementById('lista-de-contato');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const telefone = document.getElementById('phone').value;

    if (nome && telefone) {
        let telefoneExiste = false;
        const linhas = listaDeContato.querySelectorAll('tr');

        linhas.forEach(function(linha) {
            const telefoneExistente = linha.cells[1].textContent;
            if (telefoneExistente === telefone) {
                telefoneExiste = true;
            }
        });

        if (telefoneExiste) {
            alert('Este número já está cadastrado.');
        } else {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        listaDeContato.appendChild(newRow);
        }
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});