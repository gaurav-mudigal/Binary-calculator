document.body.addEventListener("click", handleEvent, false);
result = document.getElementById('res');

function handleEvent(e) {
    switch (e.target.id) {
        case "btn0":
            result.innerText += "0";
            break;
        case "btn1":
            result.innerText += "1";
            break;
        case "btnSum":
            result.innerText += "+";
            break;
        case "btnSub":
            result.innerText += "-";
            break;
        case "btnMul":
            result.innerText += "*";
            break;
        case "btnDiv":
            result.innerText += "/";
            break;
        case "btnClr":
            result.innerText = " ";
            break;
        case "btnEql":
            let arr = result.innerText.split(/([\+\-\*\/])/g);
            let ans = eval(parseInt(arr[0], 2) + arr[1] + parseInt(arr[2], 2));
            result.innerText = ans.toString(2);
    }
}