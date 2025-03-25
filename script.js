const colors = [
    {name: "Black", value: 0, multiplier: 1, tolerance: null},
    {name: "Brown", value: 1, multiplier: 10, tolerance: 1},
    {name: "Red", value: 2, multiplier: 100, tolerance: 2},
    {name: "Orange", value: 3, multiplier: 1000, tolerance: null},
    {name: "Yellow", value: 4, multiplier: 10000, tolerance: null},
    {name: "Green", value: 5, multiplier: 100000, tolerance: 0.5},
    {name: "Blue", value: 6, multiplier: 1000000, tolerance: 0.25},
    {name: "Violet", value: 7, multiplier: 10000000, tolerance: 0.1},
    {name: "Gray", value: 8, multiplier: 100000000, tolerance: 0.05},
    {name: "White", value: 9, multiplier: 1000000000, tolerance: null},
    {name: "Gold", value: null, multiplier: 0.1, tolerance: 5},
    {name: "Silver", value: null, multiplier: 0.01, tolerance: 10}
];

function populateSelect(id, filter) {
    let select = document.getElementById(id);
    colors.forEach(color => {
        if (color[filter] !== null) {
            let option = document.createElement("option");
            option.value = color[filter];
            option.textContent = color.name;
            select.appendChild(option);
        }
    });
}

function calculateResistance() {
    let band1 = parseInt(document.getElementById("band1").value);
    let band2 = parseInt(document.getElementById("band2").value);
    let multiplier = parseFloat(document.getElementById("multiplier").value);
    let tolerance = document.getElementById("tolerance").value;

    let resistance = (band1 * 10 + band2) * multiplier;
    let toleranceText = tolerance ? `±${tolerance}%` : "";

    document.getElementById("result").textContent = `Resistance: ${resistance} Ω ${toleranceText}`;
}

populateSelect("band1", "value");
populateSelect("band2", "value");
populateSelect("multiplier", "multiplier");
populateSelect("tolerance", "tolerance");
