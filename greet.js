function doGreetings() {
    let name = document.getElementByName("name")[0].value;
    document.getElementById("result").innerHTML = '<b>Greetings ' + name + "</b>";
}