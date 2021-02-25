
var extraRow = `
<tr>
  <td><input></td>
  <td><input type="number" id="credits"></td>
  <td>
    <select name="grade" id="grade">
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
    </select></td>
</tr>`

var rows = 2

function addModule() {
    //damn fucking gay honestly
    let table = document.getElementById("bruh");
    var row = table.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = `<input>`;
    cell2.innerHTML = `<input type="number" class="credits">`;
    cell3.innerHTML = `<select name="grade" class="grade">
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>`;
    console.log("ok")
    rows++
}

function calcGPA(){
    let creds = document.getElementsByClassName("credits");
    let grade = document.getElementsByClassName("grade");
    let GPA = document.getElementById("gpaNum");
    let totalCreds = 0;
    let sumOfGradeTimesCredit = 0;
    //GPA for a module is credits*grade as a number divided by total credits 

    for(i=0;i<creds.length;i++){
        console.log(creds[i].value)
        totalCreds += parseInt(creds[i].value);
        let gpaWeight = 0;
        switch(grade[i].value){
            case "A":
                gpaWeight = 4;
                break;
                
            case "B+":
                gpaWeight = 3.5;
                break;
                
            case "B":
                gpaWeight = 3;
                break;
                
            case "C+":
                gpaWeight = 2.5;
                break;
                
            case "C":
                gpaWeight = 2;
                break;
        }
        console.log("GPA weight:" + gpaWeight);
        gradeTimesCredit = creds[i].value * gpaWeight;
        sumOfGradeTimesCredit += gradeTimesCredit;
        console.log("sum of current grade*credit: " + sumOfGradeTimesCredit)
        
        console.log("current totalCreds: " + totalCreds)
    };

    console.log("Semester GPA: " + sumOfGradeTimesCredit/totalCreds);
    GPA.innerHTML = sumOfGradeTimesCredit/totalCreds;
}