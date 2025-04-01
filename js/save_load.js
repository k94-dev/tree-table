document.getElementById("save-btn").addEventListener("click", () => {
  const data = [];

  document.querySelectorAll("tr").forEach(row => {
    const rowData = [];
    row.querySelectorAll("td").forEach(td => {
      const input = td.querySelector("input[type='number']");
      if (input) {
        rowData.push(parseInt(input.value) || 0);
      }
    });
    if (rowData.length) data.push(rowData);
  });

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "лист.json";
  a.click();
  URL.revokeObjectURL(url);
});


document.getElementById("load-btn").addEventListener("click", () => {
  document.getElementById("load-file").click();
});

document.getElementById("load-file").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const data = JSON.parse(e.target.result);
    let cellIndex = 0;
    const inputs = document.querySelectorAll("td input[type='number']");
    data.flat().forEach((val, i) => {
      if (inputs[i]) {
        inputs[i].value = val;
      }
    });
    updateSums(); 
  };
  reader.readAsText(file);
});
