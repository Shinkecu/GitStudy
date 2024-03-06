document.getElementById('commandForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    var commandInput = document.getElementById('commandInput').value; // Получаем введенную команду

    // Отправляем запрос на сервер для выполнения команды
    fetch('scripts/consoles.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'command=' + encodeURIComponent(commandInput),
    })
    .then(response => response.text())
    .then(data => {
        // Выводим результат выполнения команды
        document.getElementById('consoleOutput').innerHTML = '<pre>' + data + '</pre>';
    })
    .catch(error => console.error('Ошибка:', error));
});