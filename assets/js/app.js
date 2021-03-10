$(document).ready(function() {
    test();
});

function test() {
    console.log("Ola k ase");
}

$("#verde").click(function() {
    $("#color").addClass("bg-success");
});

$("#rojo").click(function() {
    $("#color").addClass("bg-danger");
});

$("#amarillo").click(function() {
    $("#color").addClass("bg-warning");
});