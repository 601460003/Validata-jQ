$(function () {
    var validata = new Validata('111018', {
        max: 100,
        min: 18,
        maxLength: 5,
    });
    // var result = validata.validata_max()
    // var result = validata.validata_min()
    var result = validata.validata_maxlength()
    console.log(result)
});