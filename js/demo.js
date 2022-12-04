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
  //   for (let i = 0; i < colorList.length; i++) {
  //     buttons += `
  //      <button class=" color-button ${colorList[i]}" onclick="changeColor('house ${colorList[i]}') "> </button>
  //   `;
  //   }
  colorList.forEach(function (e) {
    buttons += ` <button class=" color-button ${e}" onclick = "changeColor('house ${e}') ">
    <span id="arrow" class="display-none" onclick="aticveArrow()">
  <i class="bx bxs-right-arrow"></i>
</span>
     </button>
           `;
  });

  document.getElementById("colorContainer").innerHTML = buttons;
};
addButton();

function changeColor(event) {
  let element = document.getElementById("house");
  element.className = event;
}

function aticveArrow() {
  const selected = document.querySelectorAll("#arrow");
}
