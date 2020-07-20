const key = document.getElementsByClassName("key");
const screen = document.getElementById("screen");

console.log(key);
var a = 0;
var b = null;
var op = null;

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener("click", function () {
    var code = this.getAttribute("data-code");

    if (code == "+" || code == "-" || code == "*" || code == "/") {
      op = code;
      a = parseFloat(screen.textContent.trim());
      screen.textContent = "";
    } else if (code == "clear") {
      screen.textContent = "";
    } else if (code == "sign") {
      a = parseFloat(screen.textContent.trim());
      a = -1 * a;
      screen.textContent = a;
    } else if (code == "=") {
      b = parseFloat(screen.textContent.trim());
      var res = eval(a + " " + op + " " + b);
      if (res != null) {
        screen.textContent = res;
        a = res;
        b = null;
        op = null;
      }
    } else if (code == ".") {
      if (!screen.textContent.includes(".")) {
        screen.textContent += ".";
      }
    } else {
      screen.textContent += code;
    }
  });
}
