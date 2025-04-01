    const select = document.getElementById("tree-select");

    function updateVisibility(tree) {
      document.querySelectorAll("td[data-tree]").forEach(td => {
        td.classList.remove("active");
      });
      document.querySelectorAll(`td[data-tree="${tree}"]`).forEach(td => {
        td.classList.add("active");
      });
    }

    updateVisibility(select.value);
    select.addEventListener("change", () => {
      updateVisibility(select.value);
    });
