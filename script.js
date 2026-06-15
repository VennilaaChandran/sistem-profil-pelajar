function paparMaklumat() {

    let nama = document.getElementById("nama").value;
    let program = document.getElementById("program").value;
    let email = document.getElementById("email").value;

    document.getElementById("output").innerHTML = `
        <h3>Maklumat Pelajar</h3>
        <p>Nama: ${nama}</p>
        <p>Program: ${program}</p>
        <p>Email: ${email}</p>
    `;
}