function mostrarImagem(champion) {
    var imagemChampion = document.getElementById("imagemChampion");
    // Adiciona a imagem correspondente ao campeão clicado
    switch (champion) {
        case 'sett':
            imagemChampion.src = "c-o-champion-sett-splash.jpg";
            imagemChampion.alt = "Sett";
            break;
        case 'aphelios':
            imagemChampion.src = "aphelios-splash.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'darius':
            imagemChampion.src = "Darius_Skin01.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'ahri':
            imagemChampion.src = "Ahri_Skin01.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'lee sin':
            imagemChampion.src = "leesin_skin01.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'master yi':
            imagemChampion.src = "MasterYi_0.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'irelia':
            imagemChampion.src = "Irelia_0.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'nick link':
            imagemChampion.src = "Jax_0.jpg";
            imagemChampion.alt = "Aphelios";
            break;
        case 'jayce':
            imagemChampion.src = "jayce-splashart.webp";
            imagemChampion.alt = "Aphelios";
            break;
        case 'jinx':
            imagemChampion.src = "jinx-splah-art.webp";
            imagemChampion.alt = "Aphelios";
            break;
    }
    imagemChampion.style.display = "block";
}