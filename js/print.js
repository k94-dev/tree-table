const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const todayData = `${day}.${month}.${year}`
const mainHeader = `<h1 class="main-header">Польова перелікова відомість дерев, призначених для рубки</h1>
        <p>Адміністративно-територіальна одиниця місце знаходження/місце проживання(перебування) постійного лісокористувача (відокремленого підрозділу) /власника лісів
         <input name="region" style="border:none; text-decoration-line: underline;  width: auto; min-width=5px" type="text" value="Сумська область"></input></p>
        <p>Постійний лісокористувач(відокремлений підрозділ)/власник лісів
        <input name="company" style="border:none; text-decoration-line: underline; width: 800px;" type="text" value="ДП «Ліси України» (Філія «Північний лісовий офіс» Державного спеціалізованого господарського підприємства «Ліси України»)"></p>
        <p>Найменування лісництва(структурного підрозділу) <input list="forestry_name" name="district" style="border:none; text-decoration-line: underline; width: 500px;" type="text">
        <datalist id="forestry_name">
      <option value='Свеське (ДП "Свеське ЛГ") Шосткинське надлісництво'></option>
      <option value='Свеське(Чуйківське) (ДП "Свеське ЛГ") Шосткинське надлісництво'></option>
      <option value='Прудищанське (ДП "Свеське ЛГ") Шосткинське надлісництво'></option>
      <option value='Дружбівське (ДП "Свеське ЛГ") Шосткинське надлісництво'></option>
      <option value='Олинське (ДП "Свеське ЛГ") Шосткинське надлісництво'></option></datalist></p>
        <p>категорія лісів <input name="forest-category" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, господарство/господарська секція
        <input list="farm_section" name="section" style="border:none; text-decoration-line: underline; width: 116px;" type="text"> <datalist id="farm_section">
      <option value="хвойне/соснова"></option>
      <option value="хвойне/ялинова"></option>
      <option value="тв.лист./дубова"></option>
      <option value="м.лист./березова"></option>
      <option value="м.лист./осикова"></option>
      <option value="м.лист./вільхова"></option>
    </datalist>,
        номер кварталу <input name="kvartal" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, номер виділу <input name="vydil" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, 
        номер ділянки <input name="dilyanka" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, лісосіка на <input name="year" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> рік, система рубок
        <input list="system" name="system" style="border:none; text-decoration-line: underline; width: 112px;" type="text">
        <datalist id="system">
      <option value="РФіОЛ-догляду"></option>
      <option value="РФіОЛ-санітарні"></option>
      <option value="головне"></option>
    </datalist>,<br>вид,
        спосіб рубки <input list="type_method" name="method" style="border:none; text-decoration-line: underline; width: 112px;" type="text">   <datalist id="type_method">
      <option value="ПРЖ/вибірковий"></option>
      <option value="ПРХ/вибірковий"></option>
      <option value="ВСР/вибірковий"></option>
      <option value="РГК/суцільний"></option>
    </datalist>, загальна площа ділянки <input name="area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, забезпечення збереження підросту: площа <input name="saplings-area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, порода <input name="saplings-type" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, кількість на 1 гектар <input name="saplings-count" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> тисяч штук. </p>
        <p>Спосіб відновлення лісів <input list="restoration" name="restoration" style="border:none; text-decoration-line: underline;     width: 800px;" type="text">  <datalist id="restoration">
      <option value="створення лісових культур"></option>
      <option value="залишення під природнє поновлення"></option>
    </datalist></p>
        <p>Спосіб очищення <input list="cleaning" name="cleaning" style="border:none; text-decoration-line: underline; width: 800px;" type="text"> <datalist id="cleaning">
      <option value="збирання в купи порубкові рештки та спалювання"></option>
      <option
        value="збирання в купи порубкові рештки для подальшого перегнивання"></option>
    </datalist></p>
    `;
        
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
    clone.classList.add(`valid${groupIndex + 1}`);

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
  if (i < 4) {
    td.classList.add('vertical-text');
  } else {
    td.setAttribute('data-sum', 'row');
  }
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
    clone.classList.add(`invalid${groupIndex + 1}`);

    const theadRows = clone.querySelectorAll('thead tr');
    const tbody = clone.querySelector('tbody');
    const templateRow = clone.querySelector('tbody tr');

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

    while (tbody.rows.length < 3) {
      const newRow = templateRow ? templateRow.cloneNode(true) : document.createElement('tr');

      const cells = newRow.querySelectorAll('td');
      if (cells.length > 0) {
        if (cells[0]) cells[0].textContent = '';
        for (let i = 1; i < cells.length; i++) cells[i].remove();
      }

      const cmTd = document.createElement('td');
      cmTd.classList.add('cm-column');
      newRow.appendChild(cmTd);

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
      allInputs.forEach(el => {
        if (el !== input) el.value = input.value;
      });
    }
  });
function hideZeros() {
  document.querySelectorAll("td").forEach(td => {
    const div = td.querySelector("div");
    if (div && div.textContent.trim() === "0") {
      td.style.color = "transparent";
    }
  });
}
  window.ensureMinimumRowsInTables = function () {
    const allValidTables = document.querySelectorAll('table[class^="valid"]');

    allValidTables.forEach(table => {
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const templateRow = tbody.querySelector('tr');
      const sumRow = rows.find(row => row.innerText.trim().startsWith("Σ"));
      const rowCount = rows.length - (sumRow ? 1 : 0);
      const rowsToAdd = 3 - rowCount;

      for (let i = 0; i < rowsToAdd; i++) {
        const newRow = templateRow ? templateRow.cloneNode(true) : document.createElement('tr');
        const cells = newRow.querySelectorAll('td');
        if (cells.length > 0) {
          if (cells[0]) cells[0].textContent = '';
          for (let j = 0; j < cells.length; j++) cells[j].remove();
        }

        const cmTd = document.createElement('td');
        cmTd.classList.add('cm-column');
        newRow.appendChild(cmTd);

        const headers = Array.from(
          table.querySelectorAll('thead tr:nth-child(2) td[data-tree], thead tr:nth-child(2) th[data-tree]')
        ).filter(cell => cell.colSpan !== 1);

        headers.forEach(th => {
          const tree = th.dataset.tree;
          ['ділових', 'напівділових', "дров'яних", 'неліквідних', 'Σ'].forEach((label, j) => {
            const td = document.createElement('td');
            td.dataset.tree = tree;
            td.innerHTML = '<div>0</div>';
            if (j < 4) td.classList.add('vertical-text');
            if (label === 'Σ') td.setAttribute('data-sum', 'row');
            newRow.appendChild(td);
          });
        });

        if (sumRow) {
          tbody.insertBefore(newRow, sumRow);
        } else {
          tbody.appendChild(newRow);
        }
      }
    });
  };
window.ensureMinimumRowsInInvalidTables = function () {
  const allInvalidTables = Array.from(document.querySelectorAll('table')).filter(table =>
  Array.from(table.classList).some(cls => cls.startsWith('invalid'))
);


  allInvalidTables.forEach(table => {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const templateRow = tbody.querySelector('tr');

    const sumRow = rows.find(row => row.innerText.trim().startsWith("Σ"));
    const rowCount = rows.length - (sumRow ? 1 : 0);
    const rowsToAdd = 3 - rowCount;

    for (let i = 0; i < rowsToAdd; i++) {
      const newRow = document.createElement('tr');

      const cmTd = document.createElement('td');
      cmTd.classList.add('cm-column');
      newRow.appendChild(cmTd);

      const headers = table.querySelectorAll('thead tr:nth-child(2) [data-tree]');
      headers.forEach(th => {
        const td = document.createElement('td');
        td.dataset.tree = th.dataset.tree;
        td.innerHTML = '<div>0</div>';
        newRow.appendChild(td);
      });

      if (sumRow) {
        tbody.insertBefore(newRow, sumRow);
      } else {
        tbody.appendChild(newRow);
      }
    }
  });
};

function insertMissingInvalidTables() {
  const wrapper = document.querySelector('.main-wrapper');
  const totalValidTables = document.querySelectorAll('table[class^="valid"]').length;

  for (let i = 1; i <= totalValidTables; i++) {
    const validClass = 'valid' + i;
    const invalidClass = 'invalid' + i;
    const validTable = document.querySelector('.' + validClass);
    const invalidTable = document.querySelector('.' + invalidClass);

    if (!validTable || invalidTable) continue;

    const emptyInvalid = document.createElement('table');
    emptyInvalid.className = 'invalid-table ' + invalidClass;
    emptyInvalid.innerHTML =
      '<thead>' +
        '<tr id="tree-head">' +
          '<td class="cm-column" rowspan="3">Ступені товщини дерев, см</td>' +
          '<td colspan="55" data-tree="__empty_invalid' + i + '">Кількість дерев у розрізі порід, штук</td>' +
        '</tr>' +
        '<tr>' +
          '<td></td>' +
          '<td></td>' +
          '<td></td>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        '<tr>' +
          '<td class="cm-column"></td>' +
          '<td data-tree="__empty_invalid' + i + '"><div>0</div></td>' +
          '<td></td>' +
          '<td></td>' +
        '</tr>' +
        '<tr>' +
          '<td class="cm-column"></td>' +
          '<td data-tree="__empty_invalid' + i + '"><div>0</div></td>' +
          '<td></td>' +
          '<td></td>' +
        '</tr>' +
        '<tr>' +
          '<td class="cm-column"></td>' +
          '<td data-tree="__empty_invalid' + i + '"><div>0</div></td>' +
          '<td></td>' +
          '<td></td>' +
        '</tr>' +
      '</tbody>';

     const allHeaders = Array.from(wrapper.querySelectorAll('h1.second-header'));
    const targetHeader = allHeaders[i - 1]; // h1 для соответствующей страницы

    if (targetHeader) {
      const next = targetHeader.nextElementSibling;
      if (next) {
        wrapper.insertBefore(emptyInvalid, next);
      } else {
        wrapper.appendChild(emptyInvalid);
      }
    }
  }
}

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
    allTables.forEach(table => {
      removeZeroRows(table);

      const rows = table.querySelectorAll("tbody tr");
      rows.forEach(row => {
        if (row.textContent.trim().startsWith("Σ")) {
          row.querySelectorAll("td").forEach(td => {
            td.setAttribute("data-sum", "row");
            const div = td.querySelector("div");
            if (div && div.textContent.trim() === "0") {
              div.textContent = '';
            }
          });
        }
      });
    });

    ensureMinimumRowsInTables();
    ensureMinimumRowsInInvalidTables();
    insertMissingInvalidTables();
    hideZeros();
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
  let svg = `<svg width="16" height="16" viewBox="0 0 100 100">`;

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
    svg += `<line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="4"/>`;
  }
  if (count >= 6) {
    svg += `<line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="4"/>`;
  }

 
 if (count >= 7) {
  const sides = [
    `<line x1="20" y1="80" x2="20" y2="20" stroke="black" stroke-width="4"/>`, 
    `<line x1="20" y1="80" x2="80" y2="80" stroke="black" stroke-width="4"/>`, 
    `<line x1="80" y1="80" x2="80" y2="20" stroke="black" stroke-width="4"/>`, 
    `<line x1="80" y1="20" x2="20" y2="20" stroke="black" stroke-width="4"/>`,
  ];
  const sidesToDraw = count - 6;
  for (let i = 0; i < sidesToDraw && i < 4; i++) {
    svg += sides[i];
  }
}


  svg += `</svg>`;
  return svg;
}


