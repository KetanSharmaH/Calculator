function IsEqual(){
    const num = eval(document.getElementById("result").value);
    document.getElementById("result").value = "";
    document.getElementById("result").value += num;
}

export default IsEqual;