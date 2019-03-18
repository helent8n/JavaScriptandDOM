// create variable to reference data.js
var dataset = data;

// variable references to DOM elements for table, tbody and filter button 
var table = d3.select("ufo-table");
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// function create table
function createTable(dataset) {
    // variable list to reference object in the dataset
    var columnNames = [];

    // get column name from dataset
    columnNames = Object.keys(dataset[0]);

    // reference the dataset to a table and iterate to append table row
    dataset.forEach((table) => {var row = tbody.append("tr");      

    // iterate for each table row to append table data
    columnNames.forEach(columnName => row.append("td").text(table[columnName]))    
    });
}

// function filter button, only run when is on click
filterButton.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the table that is already created on homepage
    var table = d3.select("tbody").selectAll("tr").remove();

    // reference variable from input date for filtering date
    var filterDate = document.getElementById("datetime").value

    // filter dataset based on input date
    var filterDateTable  = dataset.filter(table => table.datetime === filterDate);

    // create new filter table based on the input date
    createTable(filterDateTable);
});

// run function createTable on homepage
createTable(dataset);

// reset button and display the dataset table, only run when is on click
resetButton.on("click", function() {
    tbody.html("");
    createTable(dataset);
});