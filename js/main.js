const colorList = [
  "pallet ",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const listElements = [];

colorList.forEach((color, index) => {
  listElements.push({
    id: (index + 1).toString(),
    class: color,
  });
});
// console.log(listElements);
const addButton = () => {
  const element = document.getElementById("colorContainer");
  let button = "";
  for (let i = 0; i < listElements.length; i++) {
    button += `
      <button class="color-button ${listElements[i].class}" onclick = "changeColor('house ${listElements[i].class}')  ">
      <div class="display-none display-block arrow" id="${listElements[i].id}"><i class="bx bxs-right-arrow"></i> </div>
     `;
  }
  element.innerHTML = button;
};

addButton();

let changeColor = (event) => {
  let element = document.getElementById("house");
  element.className = event;
};

render = () => {
  listElements.forEach((item) => {
    const element = document.getElementsByClassName(item.class)[0];
    // console.log(element);
    element.addEventListener("click", (e) => {
      console.log({ e });
      listElements.forEach((item) => {
        document.getElementById(item.id).classList.add("display-none");
      });
      const arrow = document.getElementById(item.id);
      console.log({ arrow });
      arrow.classList.toggle("display-none");
    });
  });
};

render();
