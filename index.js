 function myFunction() {
    // Get input value and convert it to lowercase for case-insensitive search
    let input = document.getElementById("input").value.toLowerCase();
    
    // Get the table and rows
    let table = document.querySelector(".table");
    let tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows except header
    for (let i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        // Include both visible text and hidden spans
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }