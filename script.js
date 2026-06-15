function paparMaklumat() {
    let nama = document.getElementById("nama").value;
    let program = document.getElementById("program").value;
    let email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        alert("Sila isi semua maklumat!");
        return;
    }

    document.getElementById("output").innerHTML = `
        <h3>Maklumat Pelajar</h3>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Program:</b> ${program}</p>
        <p><b>Email:</b> ${email}</p>
    `;
}