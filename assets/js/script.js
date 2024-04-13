document.addEventListener('DOMContentLoaded', function () {
    fetch('cantina.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            var pontosTuristicos = data.cantina;
            var pontosTuristicosHTML = '<h2>Alimentos</h2>';
            pontosTuristicosHTML += '<ul>';
            pontosTuristicos.forEach(pontoTuristico => {
                pontosTuristicosHTML += '<li>';
                pontosTuristicosHTML += '<h3>' + pontoTuristico.nome + '</h3>';
                pontosTuristicosHTML += '<p>' + pontoTuristico.descricao + '</p>';
                pontosTuristicosHTML += '</li>';
            });
            pontosTuristicosHTML += '</ul>';
            document.getElementById('alimentos').innerHTML = pontosTuristicosHTML;
        })
        .catch(error => {
            document.getElementById('alimentos').innerHTML = '<p>Ocorreu um erro ao carregar as informações dos pontos turísticos.</p>';
            console.error('Fetch error:', error);
        });
});