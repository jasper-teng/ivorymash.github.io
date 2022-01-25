const emptyGuid = "00000000-0000-0000-0000-000000000000";
const placeholderDateTime = "2021-12-06 17:04:06.435697";

async function getrandomGuid() {
    console.log("getitng random guid");

    var response = await fetch('https://www.uuidgenerator.net/api/guid', {
        method: 'GET',
    }).then(data => { return data.text() })
        .then(res => {
            return res;
        })
}
async function PostRuleFn() {
    //prepare body
    //check if the rule exists already
    //https://localhost:5001/api/v1.0/businessruleparam?filterCategory=CommTypeID%7C%3D%3D%7C468475ec-2e34-4550-b904-088e82764f31&filterCategory=rule%7C%3D%3D%7C3&page=0&pageSize=2

    let CommTypeID = document.getElementById("CommTypeID").value;
    let Rule = document.getElementById("Rule").value;
    let RuleType = document.getElementById("RuleType").value;
    let RuleValue = document.getElementById("RuleValue").value;
    let SubRule = document.getElementById("SubRule").value;
    console.log(CommTypeID);
    console.log(Rule);
    console.log(RuleType);
    console.log(RuleValue);
    console.log(SubRule);
    var response = await fetch(`https://localhost:5001/api/v1.0/businessruleparam?filterCategory=CommTypeID%7C%3D%3D%${CommTypeID}&filterCategory=rule%7C%3D%3D%7C${Rule}&page=0&pageSize=10`, {
        method: 'GET',
    }).then(data => { return data})
        .then(res => {
            return res;
        });
    var bruh = await response.json();
    console.log(bruh.data["genericData"]);

    if(bruh.data["genericData"] != 0){
        await postBRTop(CommTypeID, Rule);
    }else{

    }
}

async function postBRTop(CommTypeID, Rule){
    var response = await fetch(`https://localhost:5001/api/v1.0/businessruleparam`, {
        method: 'POST',
    }).then(data => { return data})
        .then(res => {
            return res;
        });
        
}


async function viewAllBR(){
    console.log("ur mum");
    var cum = document.getElementById("brviewer");

    var response = await fetch(`https://localhost:5001/api/v1.0/businessruleparamvalue?page=0&pageSize=1000000`, {
        method: 'GET',
    }).then(data => { return data})
        .then(res => {
            return res;
        });
    var bruh = await response.json();
    console.log(bruh.data["genericData"]);
    outputCommTypes(bruh.data["genericData"]).then(function(dataArray) {
        outputCommRules(dataArray).then(
            function(dataArray){
                outputCommValues(dataArray)
            }
        )
    }
    );
}

function outputCommTypes(dataArray, callback)
{
    return new Promise(function(fufill,reject){
        var ruleDiv = `<a>`
        //vomit algorithn time
        var root = document.getElementById("brviewer");
        document.getElementById("brviewer")[0] = ``;
    
        for(var i=0;i<dataArray.length; i++){
            var bruh = dataArray[i].businessRuleParam.committeeTypeId;
            //if the div exists
            if(document.getElementsByClassName(bruh).length == 0){
                root.innerHTML +=
                `
                <details>
                    <summary class="${bruh}">commType (${bruh})</summary>
                        <div class="containerofpain1" id="${bruh}">
                        <a></a>
                        </div>
                </details>
                `
            }
        }
        fufill(dataArray);
    });
}

function outputCommRules(dataArray, callback)
{
    return new Promise(function(fufill,reject){
        var ruleDiv = `<a>`
        //vomit algorithn time
        var root = document.getElementById("brviewer");
        document.getElementById("brviewer")[0] = ``;
        //document.getElementById(bruh).getElementsByTagName('a')[0].innerHTML;
    
        for(var i=0;i<dataArray.length; i++){
            var bruhguid = dataArray[i].businessRuleParam.id
            var bruh = dataArray[i].businessRuleParam.rule;
            var cap = dataArray[i].businessRuleParam.committeeTypeId;
            //if the div doesnt exists
            console.log(document.getElementsByClassName(cap));
            if(document.getElementsByClassName(bruh+cap).length == 0){
                document.getElementById(cap).innerHTML +=
                `
                <div class="containerofpain1">
                    <details>
                        <summary class="${bruh+cap}">⠀⠀⠀⠀${bruh} (${bruhguid})</summary>
                            <div class="containerofpain1" id="${bruh+cap}">
                            </div>
                    </details>
                </div>
                `
            }

        }
        fufill(dataArray);
    });
}

function outputCommValues(dataArray){
    
    for(var i=0;i< dataArray.length; i++){
        //do the thing above but cooler
        var bruh = dataArray[i].businessRuleParam.rule;
        var cap = dataArray[i].businessRuleParam.committeeTypeId;
        document.getElementById(bruh+cap).innerHTML += `<a>⠀⠀⠀⠀⠀⠀⠀⠀<a class = "one">RuleType: ${dataArray[i].ruleType}</a> | <a class = "two">Value:${dataArray[i].value}</a> | <a class = "three">Subrule: ${dataArray[i].subRule??"None"}</a> (${dataArray[i].id})</a><br>`;
    }
}