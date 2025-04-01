 function updateSums() {
      document.querySelectorAll(".valid-table tr").forEach(row => {
        const groups = {};
        row.querySelectorAll("td[data-tree] input[type='number']").forEach(input => {
          const tree = input.closest("td").dataset.tree;
          const value = parseInt(input.value) || 0;
          groups[tree] = (groups[tree] || 0) + value;
        });
        Object.entries(groups).forEach(([tree, total]) => {
          const sumCell = row.querySelector(`td[data-sum="row"][data-tree="${tree}"]`);
          if (sumCell) sumCell.textContent = total;
        });
      });

      const inputs = document.querySelectorAll(".valid-table td[data-tree] input[type='number']");
      const colTotals = {};
      inputs.forEach(input => {
        const td = input.closest("td");
        const tree = td.dataset.tree;
        const type = td.dataset.type;
        if (!tree || !type) return;
        const key = `${tree}-${type}`;
        const val = parseInt(input.value) || 0;
        colTotals[key] = (colTotals[key] || 0) + val;
      });
      Object.entries(colTotals).forEach(([key, total]) => {
        const [tree, type] = key.split("-");
        const sumCell = document.querySelector(`td[data-sum="col"][data-tree="${tree}"][data-type="${type}"]`);

        if (sumCell) sumCell.textContent = total;
      });
   
    
    const treeTotals = {};
inputs.forEach(input => {
  const td = input.closest("td");
  const tree = td.dataset.tree;
  if (!tree) return;
  const val = parseInt(input.value) || 0;
  treeTotals[tree] = (treeTotals[tree] || 0) + val;
});
Object.entries(treeTotals).forEach(([tree, total]) => {
  const sumCell = document.querySelector(`td[data-sum="col-total"][data-tree="${tree}"]`);
  if (sumCell) sumCell.textContent = total;
});   
   
    }

    updateVisibility(select.value);
updateSums();
    loadFromLocalStorage();


    select.addEventListener("change", () => {
      updateVisibility(select.value);
    });

    document.addEventListener("input", e => {
      if (e.target.matches("input[type='number']")) {
        if (parseInt(e.target.value) < 0) e.target.value = 0;
         updateSums();
    saveToLocalStorage();
      }
    });

 document.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const td = e.target.closest("td");
    const input = td?.querySelector("input[type='number']");
    if (!input) return;

    let val = parseInt(input.value) || 0;
    if (e.target.textContent === "+") val++;
    if (e.target.textContent === "-" && val > 0) val--;

    input.value = val;
    updateSums();
    saveToLocalStorage(); 
  }
});
;
