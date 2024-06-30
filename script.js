function confirmDownload(softwareName, downloadLink) {
    var modal = document.getElementById("confirmationModal");
    var confirmButton = document.getElementById("confirmButton");

    modal.style.display = "block";

    confirmButton.onclick = function() {
        modal.style.display = "none";
        window.location.href = downloadLink;
    };
}

var span = document.getElementsByClassName("close")[0];
var closeButton = document.getElementsByClassName("closeButton")[0];

span.onclick = function() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

closeButton.onclick = function() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("confirmationModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
