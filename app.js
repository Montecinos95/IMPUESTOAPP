
function calc_imp () {
    var x = document.getElementById("input1").value;
    
    var res = x * 980;

    var o1 = document.getElementById("output1");
    var o2 = document.getElementById("output2");
    var o3 = document.getElementById("output3");
    var o4 = document.getElementById("output4");
    var o5 = document.getElementById("output5");
    var tot = document.getElementById("total");

    o1.value = res;
    o2.value = res*0.3;
    o3.value = (res*0.02).toFixed(2);
    o4.value = res*0.30;
    o5.value = res*0.21;
    tot.value = parseInt(o1.value)+parseInt(o2.value)+parseFloat(o3.value)+parseInt(o4.value)+parseInt(o5.value);

}
