document.addEventListener('DOMContentLoaded', function () {
    // Function to show the modal
    function showModal() {
        var modalContainer = document.getElementById('01');
        modalContainer.classList.add('visible');
    }

    // Function to hide the modal
    function hideModal() {
        var modalContainer = document.getElementById('01');
        modalContainer.classList.remove('visible');
    }

    setTimeout(showModal, 25000);

    var closeButton = document.getElementById('closep');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            hideModal();
        });
    }
    window.addEventListener('click', function (event) {
        var modalContainer = document.getElementById('01');
        if (event.target === modalContainer) {
            hideModal();
        }
    });
});
