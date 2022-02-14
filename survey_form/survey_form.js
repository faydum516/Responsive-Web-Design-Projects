function showOtherField(value, name, index) {
    if (value == "other") {
        document.getElementsByClassName("other")[index].innerHTML = 'Other: <input type="text" name="' + name + '" placeholder="Please specify it" />';
        document.getElementsByClassName("other")[index].style.display = "inline";
        document.getElementsByClassName("other")[index].style.color = "#FFFFFF";
        document.getElementsByClassName("other")[index].style.padding = "10px";
        document.getElementsByClassName("other")[index].style.border = "0";
        document.getElementsByClassName("other")[index].style.marginBottom = "25px";
        document.getElementsByClassName("other")[index].style.fontFamily = "'Poppins', sans-serif";
        document.getElementsByClassName("other")[index].style.fontSize = "16px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.fontFamily = "'Poppins', sans-serif";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.fontSize = "16px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.border = "0";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.borderRadius = "5px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.padding = "5px";
    }
    else {
        document.getElementsByClassName("other")[index].innerHTML = '';
        document.getElementsByClassName("other")[index].style.display = "none";
    }
}

function checkOtherField(name, index) {
    if (document.getElementsByName(name)[5].checked) {
        document.getElementsByClassName("other")[index].innerHTML = 'Other: <input type="text" name="' + name + '" placeholder="Please specify it" />';
        document.getElementsByClassName("other")[index].style.display = "inline";
        document.getElementsByClassName("other")[index].style.color = "#FFFFFF";
        document.getElementsByClassName("other")[index].style.padding = "10px";
        document.getElementsByClassName("other")[index].style.border = "0";
        document.getElementsByClassName("other")[index].style.borderRadius = "5px";
        document.getElementsByClassName("other")[index].style.marginBottom = "25px";
        document.getElementsByClassName("other")[index].style.fontFamily = "'Poppins', sans-serif";
        document.getElementsByClassName("other")[index].style.fontSize = "16px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.fontFamily = "'Poppins', sans-serif";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.fontSize = "16px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.border = "0";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.borderRadius = "5px";
        document.getElementsByClassName("other")[index].getElementsByTagName('input')[0].style.padding = "5px";
    }
    else {
        document.getElementsByClassName("other")[index].innerHTML = '';
        document.getElementsByClassName("other")[index].style.display = "none";
    }
}