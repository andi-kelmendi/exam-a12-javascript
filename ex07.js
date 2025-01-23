function moyenne(tab) {
    if (tab.length === 0) {
        return 0;
    }

    let somme = tab.reduce((accum, currentVal) => accum + currentVal, 0);
    return somme / tab.length;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6