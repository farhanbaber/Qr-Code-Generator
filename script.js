function generate() {
    const text = document.getElementById("text").value;
    const QrCodeDiv = document.getElementById("QrCodeDiv");


    if (!text) {
        QrCodeDiv.innerHtml = "<p>Plz Enter a url first</p>"
        alert("Enter a url ")
    return;
    }

     const qrCode=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;


    QrCodeDiv.innerHTML = `<img src="${qrCode}" alt="QrCodeDiv">`
}


