const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const todayData = `${day}.${month}.${year}`
const mainHeader = `<h1 class="main-header">Польова перелікова відомість дерев, призначених для рубки</h1>
        <p>Адміністративно-територіальна одиниця місце знаходження/місце проживання(перебування) постійного лісокористувача (відокремленого підрозділу) /власника лісів</p>
        <input name="region" style="border:none; text-decoration-line: underline;  width: auto; min-width=5px" type="text" value="Сумська область">
        <p>Постійний лісокористувач(відокремлений підрозділ)/власник лісів<input name="company" style="border:none; text-decoration-line: underline; width: 800px;" type="text" value="ДП «Ліси України» (Філія «Північний лісовий офіс» Державного спеціалізованого господарського підприємства «Ліси України»)"></p>
        <p>Найменування лісництва(структурного підрозділу) <input name="district" style="border:none; text-decoration-line: underline; width: 800px;" type="text" value="Олинське («ДП Свеське ЛГ») Шосткинське надлісництво"></p>   
        <p>категорія лісів <input name="forest-category" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, господарство/господарська секція <input name="section" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, 
        номер кварталу <input name="kvartal" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, номер виділу <input name="vydil" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, 
        номер ділянки <input name="dilyanka" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, лісосіка на <input name="year" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> рік, система рубок <input name="system" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, вид, 
        спосіб рубки <input name="method" style="border:none; text-decoration-line: underline; width: 100px;" type="text">, загальна площа ділянки <input name="area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, забезпечення збереження підросту: площа <input name="saplings-area" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> гектарів, порода <input name="saplings-type" style="border:none; text-decoration-line: underline; width: 40px;" type="text">, кількість на 1 гектар <input name="saplings-count" style="border:none; text-decoration-line: underline; width: 40px;" type="text"> тисяч штук. </p>
        <p>Спосіб відновлення лісів <input name="restoration" style="border:none; text-decoration-line: underline;     width: 800px;" type="text"></p>
        <p>Спосіб очищення <input name="clearing" style="border:none; text-decoration-line: underline; width: 800px;" type="text"></p>`;
const mainFooter = `<p class="second-side">Відомість склали:</p>
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
        <td style="background-color: #eaeaea; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: white; width: 200px">
          <input type="text" name="kerivnyk" value="Ігор КОМАРИЦЬКИЙ" style="text-align: center; border: none; margin-top: 20px;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: #eaeaea;"></td>
        <td style="background-color: white"></td>
      </tr>
      <tr>
        <td style="background-color: #eaeaea; text-align: left;" colspan="5">
          Співробітники підрозділу з відведення і таксації лісосік
        </td>
      </tr>
      <tr>
        <td style="background-color: #eaeaea; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: white; width: 200px">
          <input type="text" name="spivrobitnyk1" value="Михайло МАЗУРОК" style="text-align: center; border: none; margin-top: 20px;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: #eaeaea;"></td>
        <td style="background-color: white"></td>
      </tr>
      <tr>
        <td style="background-color: #eaeaea; width: 200px">
          <hr style="margin-top: 30px; width:100px;">
          <span class="caption">(підпис)</span>
        </td>
        <td style="background-color: #eaeaea; width: 200px">
          <input type="text" name="spivrobitnyk2" value="" style="text-align: center; border: none; margin-top: 20px; background-color: #eaeaea;">
          <hr style="width:160px;">
          <span class="caption">(Власне ім'я, ПРІЗВИЩЕ)</span>
        </td>
        <td style="background-color: #eaeaea;"></td>
        <td style="background-color: #eaeaea;"></td>
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

  
    function filterTableByTrees(table, allowedTrees) {
      const clone = table.cloneNode(true);
      clone.querySelectorAll('[data-tree]').forEach(cell => {
        const tree = cell.dataset.tree;
        if (!allowedTrees.includes(tree)) {
          cell.remove();
        }
      });
      return clone.outerHTML;
    }

    

  prepareTable(table1);
  prepareTable(table2);

    const printWindow = window.open('', '', 'width=1000,height=800');
    
  printWindow.document.write(`
    <html>
      <head>
        <title>Друк таблиці</title>
        <style>
          body {
            font-family: "Times New Roman", serif;
            padding: 10px;
            font-size: 9px;
          }
            td[data-sum]{
                 font-weight: 600;
                 background-color: #eaeaea;
                 }
          
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 14px;
          }
          th, td {
            border: 1px solid #000;
            padding: 6px;
            text-align: center;
            vertical-align: middle;
            font-size: 10px;
            white-space: normal;
            width: auto;
            max-width: 200px;

          }
           
      td[data-tree]:not([data-sum]):has(div) {
  padding: 6px 18px 6px 6px;
  position: relative;
}

  td[data-tree] > div:first-child {
  position: absolute;
  right: 2px;
  bottom: 1px;
  }
          .dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            background: black;
            border-radius: 50%;
            margin: 2px;
          }
          .dots-wrapper {
            margin-top: 4px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
            p {
            margin: 4px
            }
            h1 {
            margin-bottom: 14px;
            font-size: 16px;
          }
            .second-side {
            font-size: 16px
            }
            .page-break {
  page-break-before: always;
}
  
    .main-header {
    font-size: 12px;
    text-align: center;
    }
        </style>
      </head>
     <body>  
  ${mainHeader}
  ${filterTableByTrees(table1, ["Сосна", "Дуб", "Береза", "Клен"])}

  <div class="page-break"></div>
  <h1>Дерева, які не підлягають вирубуванню і залишаються на лісосіках (для суцільних рубок)</h1>
  ${filterTableByTrees(table2, ["Сосна", "Дуб", "Береза", "Клен"])}
  ${mainFooter}

  <div class="page-break"></div>
  ${mainHeader}
  ${filterTableByTrees(table1, ["Верба", "Осика", "Липа", "В'яз"])}

  <div class="page-break"></div>
  <h1>Дерева, які не підлягають вирубуванню і залишаються на лісосіках (для суцільних рубок)</h1>
  ${filterTableByTrees(table2, ["Верба", "Осика", "Липа", "В'яз"])}
  ${mainFooter}

  <div class="page-break"></div>
  ${mainHeader}
  ${filterTableByTrees(table1, ["Вільха", "Ялина", "Модрина"])}

  <div class="page-break"></div>
  <h1>Дерева, які не підлягають вирубуванню і залишаються на лісосіках (для суцільних рубок)</h1>
  ${filterTableByTrees(table2, ["Вільха", "Ялина", "Модрина"])}
  ${mainFooter}
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

  return `<div style="display: flex; flex-wrap: wrap; justify-content: flex-start; max-width: 200px;
    width: max-content;">${result}</div>`;
}
function generateSingleDotBlock(count) {
  let svg = `<svg width="12" height="12" viewBox="0 0 100 100" style="margin:1px">`;

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
    svg += `<circle cx="${cx}" cy="${cy}" r="8" fill="black"/>`;
  }

  
  if (count >= 5) {
    svg += `<line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="3"/>`;
  }
  if (count >= 6) {
    svg += `<line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="3"/>`;
  }

 
  if (count >= 7) {
    svg += `<rect x="20" y="20" width="60" height="60" fill="none" stroke="black" stroke-width="3"/>`;
  }

  svg += `</svg>`;
  return svg;
}