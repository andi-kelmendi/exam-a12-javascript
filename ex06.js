function doublons(tab) {
    return tab.map(function (num) {
        return num * 2;
    });
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]