var nilai = 88;

if (nilai >90){
    grade = "A"
}else if (nilai > 80 && nilai < 91){
    grade = "B"
}else if (nilai > 74 && nilai <81){
    grade = "c"
} else {
    grade = "D"
}
document.write("nilai" + nilai + " masuk grade " + grade)