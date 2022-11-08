


    var calculate;

    document.getElementById("laske").onclick = function (e){
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        var lasku = document.getElementById("valikko").value;

        if(lasku=="sum"){
            calculate = num1 + num2;
        }else if(lasku=="sub"){
            calculate = num1 - num2;
        }else if(lasku=="multi"){
            calculate = num1 * num2;
        }else if(lasku=="div"){
            calculate = num1 / num2;
        }

        calculate = parseFloat(calculate);
        document.getElementById("vastaus").innerHTML= calculate;
    }






