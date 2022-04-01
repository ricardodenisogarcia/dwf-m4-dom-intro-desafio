const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listEl = document.getElementsByClassName("lista");
  const liEl = listEl[0].getElementsByTagName("li");
  for (let i = liEl.length; i > 0; i--) {
    objetiveToRemoved = liEl[0];
    listEl[0].removeChild(objetiveToRemoved);
  }
  addEl();
  addClassEl();

  function addEl() {
    if (liEl.length == 0) {
      for (let index = 0; index < cosasQueAprendimos.length; index++) {
        const newEl = document.createElement("li");
        listEl[0].appendChild(newEl);
        listEl[0].lastChild.textContent = cosasQueAprendimos[index].tema;
      }
    }
  }
  function addClassEl() {
    for (let index = 0; index <= liEl.length; index++) {
      if (liEl[index].textContent == cosasQueAprendimos[index].tema) {
        liEl[index].className = cosasQueAprendimos[index].class;
      }
    }
  }
}

main();
