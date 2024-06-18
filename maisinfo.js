document.getElementById('infoButton').addEventListener('click', function () {
    var infoPanel = document.getElementById('infoPanel');
    if (infoPanel.classList.contains('show')) {
        infoPanel.classList.remove('show');
    } else {
        infoPanel.classList.add('show');
    }
});
