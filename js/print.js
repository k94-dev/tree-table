const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const todayData = `${day}.${month}.${year}`
const mainHeader = `<h1 class="main-header">Польова перелікова відомість дерев, призначених для рубки</h1>
        <p>Адміністративно-територіальна одиниця місце знаходження/місце проживання(перебування) постійного лісокористувача (відокремленого підрозділу) /власника лісів <input name="region" style="border:none; text-decoration-line: underline;  width: auto; min-width=5px" type="text" value="Сумська область"></input></p>
        <p>Постійний лісокористувач(відокремлений підрозділ)/власник лісів<input name="company" style="border:none; text-decoration-line: underline; width: 800px;" type="text" value="ДП «Ліси України» (Філія «Північний лісовий офіс» Державного спеціалізованого господарського підприємства «Ліси України»)"></p>
        <p>Найменування лісництва(структурного підрозділу) <input name="district" style="border:none; text-decoration-line: underline; width: 500px;" type="text" value="Олинське («ДП Свеське ЛГ») Шосткинське надлісництво"> категорія лісів <input name="forest-category" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, господарство/господарська секція <input name="section" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, 
        номер кварталу <input name="kvartal" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, номер виділу <input name="vydil" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, 
        номер ділянки <input name="dilyanka" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, лісосіка на <input name="year" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> рік, система рубок <input name="system" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, вид, 
        спосіб рубки <input name="method" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, загальна площа ділянки <input name="area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, забезпечення збереження підросту: площа <input name="saplings-area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, порода <input name="saplings-type" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, кількість на 1 гектар <input name="saplings-count" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> тисяч штук. </p>
        <p>Спосіб відновлення лісів <input name="restoration" style="border:none; text-decoration-line: underline;     width: 800px;" type="text"></p>
        <p>Спосіб очищення <input name="clearing" style="border:none; text-decoration-line: underline; width: 800px;" type="text"></p>`;
const mainFooter = `<p class="second-side--text">Відомість склали:</p>
<div class="footer second-side">
  <table class="footer__table">
    <thead>
      <tr>
        <td style="background-color: #eaeaea; text-align: left;" colspan="5">
          Керівник підрозділу з відведення і таксації лісосік
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="background-color: white; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: white; width: 200px">
          <input class="name-input" type="text" name="kerivnyk" value="Ігор КОМАРИЦЬКИЙ" style="text-align: center; border: none; margin-top: 20px;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: white;"></td>
        <td style="background-color: white"></td>
      </tr>
      <tr>
        <td style="background-color: #eaeaea; text-align: left;" colspan="5">
          Співробітники підрозділу з відведення і таксації лісосік
        </td>
      </tr>
      <tr>
        <td style="background-color: white; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: white; width: 200px">
          <input class="name-input" type="text" name="spivrobitnyk1" value="Михайло МАЗУРОК" style="text-align: center; border: none; margin-top: 20px;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: white;"></td>
        <td style="background-color: white"></td>
      </tr>
      <tr>
        <td style="background-color: white; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: white; width: 200px">
          <input class="name-input" type="text" name="spivrobitnyk2" value="" style="text-align: center; border: none; margin-top: 20px; background-color: white;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: white;"></td>
        <td style="background-color: white;"></td>
      </tr>
    </tbody>
  </table>
  <input style="border: none" name="footer-date" type="text" class="data-input" value="${todayData} року" />
</div>`;



document.getElementById('print-btn').addEventListener('click', () => {

  const table1 = document.querySelector('.valid-table').cloneNode(true);
  const table2 = document.querySelector('.ivalid-table').cloneNode(true);

 
  const prepareTable = (table) => {
  table.querySelectorAll('td').forEach(td => {
    const input = td.querySelector('input[type="number"]');
    
   
    if (input && !td.dataset.sum) {
      const value = input.value || '0';
      td.innerHTML = `<div>${value}</div>${generateDotSVG(parseInt(value))}`;
    } else {
      
      td.querySelectorAll('input, button').forEach(el => el.remove());
    }
  });
};




//     function splitTableByTrees(table, maxTreesPerPage = 4) {
//   const allTreeCells = table.querySelectorAll('td[data-tree]');
//   const treesWithData = new Map();

//   allTreeCells.forEach(cell => {
//     const tree = cell.dataset.tree;
//     const div = cell.querySelector('div');
//     const value = div ? parseInt(div.textContent.trim()) : 0;
//     if (value > 0) {
//       if (!treesWithData.has(tree)) treesWithData.set(tree, []);
//       treesWithData.get(tree).push(cell.dataset.col);
//     }
//   });

//   const treeChunks = Array.from(treesWithData.keys())
//     .reduce((chunks, tree, i) => {
//       const chunkIndex = Math.floor(i / maxTreesPerPage);
//       if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
//       chunks[chunkIndex].push(tree);
//       return chunks;
//     }, []);

//   return treeChunks.map(treeGroup => {
//     const clone = table.cloneNode(true);
//     clone.querySelectorAll('td[data-tree]').forEach(cell => {
//       if (!treeGroup.includes(cell.dataset.tree)) {
//         cell.remove();
//       }
//     });
//     return clone.outerHTML;
//   });
// }

function splitTableByTreesValid(table, maxTreesPerPage = 4) {
  const allTreeCells = table.querySelectorAll('td[data-tree]');
  const treesWithData = new Map();

  allTreeCells.forEach(cell => {
    const tree = cell.dataset.tree;
    const div = cell.querySelector('div');
    const value = div ? parseInt(div.textContent.trim()) : 0;
    if (value > 0) {
      if (!treesWithData.has(tree)) treesWithData.set(tree, []);
      treesWithData.get(tree).push(cell.dataset.col);
    }
  });

  const trees = Array.from(treesWithData.keys());
  const treeChunks = trees.reduce((chunks, tree, i) => {
    const chunkIndex = Math.floor(i / maxTreesPerPage);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(tree);
    return chunks;
  }, []);

  if (treeChunks.length === 0) treeChunks.push([]);

  return treeChunks.map((treeGroup, groupIndex) => {
    const clone = table.cloneNode(true);
    const theadRows = clone.querySelectorAll('thead tr');
    const tbody = clone.querySelector('tbody');
    const templateRow = table.querySelector('tbody tr');

    clone.querySelectorAll('td[data-tree], th[data-tree]').forEach(cell => {
      if (!treeGroup.includes(cell.dataset.tree)) {
        cell.remove();
      }
    });

    while (treeGroup.length < 3) {
      const emptyName = `__empty_group${groupIndex}_${treeGroup.length + 1}`;
      treeGroup.push(emptyName);

      const thGroup = document.createElement('td');
      thGroup.colSpan = 5;
      thGroup.dataset.tree = emptyName;
      theadRows[1].appendChild(thGroup);

      const labels = ['ділових', 'напівділових', "дров'яних", 'неліквідних', 'Σ'];
      labels.forEach(label => {
        const td = document.createElement('td');
        td.dataset.tree = emptyName;
        td.textContent = label;
        if (label !== 'Σ') td.classList.add('vertical-text');
        theadRows[2].appendChild(td);
      });

      Array.from(tbody.rows).forEach(row => {
        for (let i = 0; i < 5; i++) {
          const td = document.createElement('td');
          td.dataset.tree = emptyName;
          td.innerHTML = '<div>0</div>';
          if (i < 4) td.classList.add('vertical-text');
          row.appendChild(td);
        }
      });
    }

    while (tbody.rows.length < 3 && templateRow) {
      const newRow = templateRow.cloneNode(true);
      const cells = newRow.querySelectorAll('td');
      if (cells[0]) cells[0].textContent = '';
      for (let i = 1; i < cells.length; i++) cells[i].remove();

      treeGroup.forEach(treeName => {
        for (let j = 0; j < 5; j++) {
          const td = document.createElement('td');
          td.dataset.tree = treeName;
          td.innerHTML = '<div>0</div>';
          if (j < 4) td.classList.add('vertical-text');
          newRow.appendChild(td);
        }
      });

      tbody.appendChild(newRow);
    }

    return clone.outerHTML;
  });
}

function splitTableByTreesInvalid(table, maxTreesPerPage = 4) {
  const allTreeCells = table.querySelectorAll('td[data-tree]');
  const treesWithData = new Set();

  allTreeCells.forEach(cell => {
    const div = cell.querySelector('div');
    const val = div ? parseInt(div.textContent.trim()) : 0;
    if (val > 0) {
      treesWithData.add(cell.dataset.tree);
    }
  });

  const trees = Array.from(treesWithData);
  const treeChunks = trees.reduce((chunks, tree, i) => {
    const idx = Math.floor(i / maxTreesPerPage);
    if (!chunks[idx]) chunks[idx] = [];
    chunks[idx].push(tree);
    return chunks;
  }, []);

  if (treeChunks.length === 0) treeChunks.push([]);

  return treeChunks.map((treeGroup, groupIndex) => {
    const clone = table.cloneNode(true);
    const theadRows = clone.querySelectorAll('thead tr');
    const tbody = clone.querySelector('tbody');
    const templateRow = table.querySelector('tbody tr');

    clone.querySelectorAll('td[data-tree], th[data-tree]').forEach(cell => {
      if (!treeGroup.includes(cell.dataset.tree)) {
        cell.remove();
      }
    });

    while (treeGroup.length < 3) {
      const emptyName = `__empty_group${groupIndex}_${treeGroup.length + 1}`;
      treeGroup.push(emptyName);

      const th = document.createElement('td');
      th.dataset.tree = emptyName;
      theadRows[1].appendChild(th);

      Array.from(tbody.rows).forEach(row => {
        const td = document.createElement('td');
        td.dataset.tree = emptyName;
        td.innerHTML = '<div>0</div>';
        row.appendChild(td);
      });
    }

    while (tbody.rows.length < 3 && templateRow) {
      const newRow = templateRow.cloneNode(true);
      const cells = newRow.querySelectorAll('td');
      if (cells[0]) cells[0].textContent = '';
      for (let i = 1; i < cells.length; i++) cells[i].remove();

      treeGroup.forEach(treeName => {
        const td = document.createElement('td');
        td.dataset.tree = treeName;
        td.innerHTML = '<div>0</div>';
        newRow.appendChild(td);
      });

      tbody.appendChild(newRow);
    }

    return clone.outerHTML;
  });
}



  prepareTable(table1);
  prepareTable(table2);

    const printWindow = window.open('', '', 'width=1000,height=800');
    
  printWindow.document.write(`
    <html lang="uk">
      <head>
        <title>Режим друку</title>
      <link rel="stylesheet" href="./css/print.css" />
      </head>
     <body>  
      <div class="main-wrapper">
  ${splitTableByTreesValid(table1).map((t, i) => `
    ${mainHeader}
    ${t}
    <div class="page-break"></div>
    <h1 class="second-header">Дерева, які не підлягають вирубуванню і залишаються на лісосіках (для суцільних рубок)</h1>
    ${splitTableByTreesInvalid(table2)[i] || ''}
    ${mainFooter}
    <div class="page-break"></div>
  `).join('')}
</div>
    <script>
    document.addEventListener("input", (e) => {
    const input = e.target;
    if (input.tagName === "INPUT" && input.name) {
      const allInputs = document.querySelectorAll('input[name="' + input.name + '"]');
      allInputs.forEach(function (el) {
        if (el !== input) {
          el.value = input.value;
        }
      });
    }
  });

 
   function removeZeroRows(tableElement) {
    const rows = tableElement.querySelectorAll("tbody tr");

    rows.forEach(row => {
      if (row.innerText.trim().startsWith("Σ")) return;

      const cells = row.querySelectorAll("td");
      const hasNonZero = Array.from(cells).some(cell => {
        const valueDiv = cell.querySelector("div");
        if (!valueDiv) return false;
        const value = valueDiv.textContent.trim();
        return value && !isNaN(value) && Number(value) > 0;
      });

      if (!hasNonZero) {
        row.remove();
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    const allTables = document.querySelectorAll("table:not(.footer__table)");
    allTables.forEach(table => removeZeroRows(table));
  });

  document.querySelectorAll("td").forEach(td => {
  if (td.textContent.trim() === "0") {
    td.style.color = "transparent";
  }
});

  </script>
</body>

    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
});

function generateDotSVG(value) {
  const val = parseInt(value);
  if (!val || val < 1) return "";

  const fullBlocks = Math.floor(val / 10);
  const remainder = val % 10;

  let result = "";

  
  for (let i = 0; i < fullBlocks; i++) {
    result += generateSingleDotBlock(10);
  }

  if (remainder > 0) {
    result += generateSingleDotBlock(remainder);
  }

  return `<div class="squre-container">${result}</div>`;
}
function generateSingleDotBlock(count) {
  let svg = `<svg width="18" height="18" viewBox="0 0 100 100">`;

  const positions = [
    [20, 20], [80, 20],
    [20, 80], [80, 80],
    [50, 20], [20, 50],
    [80, 50], [50, 80],
    [50, 50]
  ];

  
  const dotsToDraw = Math.min(count, 4);
  for (let i = 0; i < dotsToDraw; i++) {
    const [cx, cy] = positions[i];
    svg += `<circle cx="${cx}" cy="${cy}" r="10" fill="black"/>`;
  }

  
  if (count >= 5) {
    svg += `<line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="5"/>`;
  }
  if (count >= 6) {
    svg += `<line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="5"/>`;
  }

 
 if (count >= 7) {
  const sides = [
    `<line x1="20" y1="80" x2="20" y2="20" stroke="black" stroke-width="5"/>`, 
    `<line x1="20" y1="80" x2="80" y2="80" stroke="black" stroke-width="5"/>`, 
    `<line x1="80" y1="80" x2="80" y2="20" stroke="black" stroke-width="5"/>`, 
    `<line x1="80" y1="20" x2="20" y2="20" stroke="black" stroke-width="5"/>`,
  ];
  const sidesToDraw = count - 6;
  for (let i = 0; i < sidesToDraw && i < 4; i++) {
    svg += sides[i];
  }
}


  svg += `</svg>`;
  return svg;
}

