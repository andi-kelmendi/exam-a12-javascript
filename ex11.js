function premiereLettreMajuscule(chaine) {
    
    let mots = chaine.split(" ");
    let resultat = mots.map(mot => mot.charAt(0).toUpperCase() + mot.slice(1));
    return resultat.join(" ");
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"