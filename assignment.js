const task3Element = document.getElementById("task-3");

function func1() {
  alert("Hello world");
}

function func2(name) {
  alert(name);
}

function func3(str1, str2, str3) {
  return str1 + str2 + str3;
}

func1();
func2("Adam , Hana!");

task3Element.addEventListener("click", func1);
result = func3("hi", "Mr", "Bouchekhima");
