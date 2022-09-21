function Calculate() {
    var weight = document.getElementById("weight").value;
    var mercury = weight * 0.37;
    var venus = weight * 0.91;
    var moon = weight * 0.166;
    var mars = weight * 0.38;
    var jupiter = weight * 2.34;
    var saturn = weight * 1.06;
    var uranus = weight * 0.92;
    var neptune = weight * 1.12;
    var pluto = weight * 0.06;
    document.getElementById("mw").innerHTML = "your weight is : "  + mercury + " Kg ";
    document.getElementById("vw").innerHTML = "your weight is : " + venus + " Kg ";
    // document.getElementById("tmw").innerHTML = "your weight is :" + moon + " Kg ";
    document.getElementById("msw").innerHTML = "your weight is :" + mars + " Kg ";
    document.getElementById("jw").innerHTML = "your weight is :"  + jupiter + " Kg ";
    document.getElementById("sw").innerHTML = "your weight is :"  + saturn + " Kg ";
    document.getElementById("uw").innerHTML = "your weight is :"  + uranus + " Kg ";
    document.getElementById("nw").innerHTML = "your weight is :"  + neptune + " Kg ";
    document.getElementById("pw").innerHTML = "your weight is : " + pluto + " Kg ";
    }