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

let addButton = () => {
  let buttons = "";
  colorList.forEach(function (e, i) {
    buttons += ` <button class=" color-button ${e}" onclick = "changeColor('house ${e}, ${i}') ">
                     <i class="bx bxs-right-arrow display-none" arrow-${i}></i>
                 </button>
           `;
  });
  document.getElementById("colorContainer").innerHTML = buttons;
};
addButton();

function changeColor(event, indexT) {
  let element = document.getElementById("house");
  element.className = event;

  const arrows = document.querySelectorAll(".bx");
  // console.log(arrows);
  for (let index = 0; index < arrows.length; index++) {
    const arrow = arrows[index];
    // console.log(arrow);
    if (arrow.hasAttribute(`arrow-${indexT}`)) {
      arrow.style.display = "block";
      continue;
    }
    arrow.style.display = "none";
  }
}
