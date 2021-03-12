$(document).ready(function() {
    test();
});

function test() {
    console.log("Ola k ase");
}

$("#verde").click(function() {
    $("#color").removeClass().addClass("bg-success");
    $("#texto").text("Color:");
});

$("#rojo").click(function() {
    $("#color").removeClass().addClass("bg-danger");
    $("#texto").text("Color:");
});

$("#amarillo").click(function() {
    $("#color").removeClass().addClass("bg-warning");
    $("#texto").text("Color:");
});

$('#imagen').click(function() {
    $("#color").removeClass().addClass("bgImg");
    $("#texto").text("Imagen");
});