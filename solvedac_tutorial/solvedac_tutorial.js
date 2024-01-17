function addTable(filename) {
    fetch(filename)
        .then(response => response.json())
        .then(data => {
            const tableParentDiv = document.getElementById("tableParent");

            const table = document.createElement("table");
            const titleRow = document.createElement("tr");
            const td_probId = document.createElement("td");
            td_probId.innerHTML = "문제 번호";
            const td_probName = document.createElement("td");
            td_probName.innerHTML = "문제 이름";
            const td_solved = document.createElement("td");
            td_solved.innerHTML = "풀이 현황";
            titleRow.appendChild(td_probId);
            titleRow.appendChild(td_probName);
            titleRow.appendChild(td_solved);
            table.appendChild(titleRow);

            data.numbers.forEach(probId => {
                const row = document.createElement("tr");
                /*
                for (let i = 0; i < 3; i++) {
                    const td = document.createElement("td");
                    if (i == 0) td.textContent = probId;
                    row.appendChild(td);
                }
                table.appendChild(row);
                */
                const td1 = document.createElement("td");
                td1.textContent = probId;
                row.appendChild(td1);

                const td2 = document.createElement("td");
                const hyperLink = document.createElement("a");
                hyperLink.href = "https://www.acmicpc.net/problem/" + probId;
                fetch("https://solved.ac/api/v3/problem/show?problemId=" + probId)
                    .then(response => response.json())
                    .then(data => {
                        const titleKo = data.titleKo;
                        hyperLink.innerHTML = titleKo;
                    });


            });

            const wrapperSummary = document.createElement("summary");
            wrapperSummary.innerHTML = data.title;

            const wrapperDetails = document.createElement("details");
            wrapperDetails.appendChild(wrapperSummary);
            wrapperDetails.appendChild(table);

            const wrapperDiv = document.createElement("div");
            wrapperDiv.classList.add("mainContent");
            wrapperDiv.appendChild(wrapperDetails);

            tableParentDiv.appendChild(wrapperDiv);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("filename.json")
        .then(response => response.json())
        .then(data => {
            data.filename_list.forEach(filename => {
                addTable(filename);
            });
        });
});
