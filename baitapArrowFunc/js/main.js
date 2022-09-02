const Colors = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavendor",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

let house = document.getElementById('house');
let colors = document.querySelectorAll('#colorContainer button');
colors.forEach(color => {
    color.addEventListener('click', (e) => {
        let active = document.getElementsByClassName('active');
        active[0].classList.remove('active');
        color.classList.add('active');
        let classList = e.target.classList;
        house.className = `house ${classList[1]}`
    })
})

