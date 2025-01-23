function compterVoyelles(chaine) {
	chaine = chaine.toLowerCase();
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let nbVoyelles = 0;
 
    for (let lettre of chaine) {
        if (voyelles.includes(lettre)) {
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}
console.log(compterVoyelles("bonjour")); // Résultat attendu : 3