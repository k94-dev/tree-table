function saveToLocalStorage() {
  const data = [];

  document.querySelectorAll("tr").forEach(row => {
    const rowData = [];
    row.querySelectorAll("td input[type='number']").forEach(input => {
      rowData.push(parseInt(input.value) || 0);
    });
    if (rowData.length) data.push(rowData);
  });

  localStorage.setItem("savedTableData", JSON.stringify(data));
}

function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("savedTableData"));
  if (!data) return;

  const inputs = document.querySelectorAll("td input[type='number']");
  let index = 0;

  data.forEach(row => {
    row.forEach(val => {
      if (inputs[index]) {
        inputs[index].value = val;
        index++;
      }
    });
  });

  updateSums();
}

document.getElementById("clean-btn").addEventListener("click", () => {
  if (confirm("Ви впевнені, що хочете видалити всі дані?")) {
    localStorage.removeItem("savedTableData");
    location.reload(); 
  }
})
