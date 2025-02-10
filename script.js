function goToPage2(event) {
    event.preventDefault();
    window.location.href = "page2.html";
}

function goToPage3(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const maths = parseFloat(document.getElementById("resultat1").value);
    const informatique = parseFloat(document.getElementById("resultat").value);

    const moyenne = (maths + informatique) / 2;

    localStorage.setItem("nom", nom);
    localStorage.setItem("moyenne", moyenne.toFixed(2));

    window.location.href = "page3.html";
}

function cancelAction() {
    alert("Action annulée !");
    window.location.href = "index.html";
}

if (window.location.pathname.includes("page3.html")) {
    const nom = localStorage.getItem("nom");
    const moyenne = localStorage.getItem("moyenne");

    document.getElementById("nomEtudiant").textContent = `Bienvenue ${nom}`;
    document.getElementById("note").textContent = `Votre Résultat est ${moyenne}`;

    const admissionMessage =
        parseFloat(moyenne) >= 10
            ? "Félicitations, vous êtes admis !"
            : "Malheureusement, votre admission n'a pas été retenue.";
    document.getElementById("admission").textContent = admissionMessage;
}
