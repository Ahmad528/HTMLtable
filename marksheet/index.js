var subject= [];
var marks= [];
var index= [];
var c= 1;
var fullMarks= [];

function addToTable(){
    
    document.getElementById('no-data').style.display="none";
    var sub= document.getElementById('subject').value;
    var num= parseInt(document.getElementById('marks').value);
    var fullnum= parseInt(document.getElementById('full-marks').value);
    if(sub && num && num<=fullnum){
        subject= [...subject,sub];
        marks= [...marks,num];
        fullMarks= [...fullMarks,fullnum];
        index= [...index,c];

        document.getElementById('btn2').style.background= "cornflowerblue";
        document.getElementById('btn2').disabled= false;

        document.getElementById('btn3').style.background= "red";
        document.getElementById('btn3').disabled= false;

        displayTable();
    }
    else{
        alert("Marks is either greater than full marks or incomplete data");
    }
}

function displayTable(){
    const length= subject.length;
    
    var tr= document.createElement('tr');

    for(var i=0;i<length;i++){
        tr.innerHTML='';
        var td1= document.createElement('td');
        td1.innerHTML= index[i];
        tr.appendChild(td1);

        var td2= document.createElement('td');
        td2.innerHTML= subject[i];
        tr.appendChild(td2);

        var td3= document.createElement('td');
        td3.innerHTML= marks[i];
        tr.appendChild(td3);

        var td4= document.createElement('td');
        td4.innerHTML= fullMarks[i];
        tr.appendChild(td4);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
    }
    c++;
    document.getElementById('subject').value='';
    document.getElementById('marks').value='';
    document.getElementById('full-marks').value='';
}

function getResult(){
    var sum= marks.reduce(function (a,b){
        return parseInt(a)+parseInt(b);
    },0);
    var totalmarks= fullMarks.reduce(function (a,b){
        return parseInt(a)+parseInt(b);
    },0);
    var average= sum/marks.length;
    var percentage= (sum/totalmarks)*100;

    document.getElementById('m-totalmarks').innerHTML= "Total Marks : " + sum;
    document.getElementById('m-fullmarks').innerHTML= "Full Marks : " + totalmarks;
    document.getElementById('m-average').innerHTML= "Average Marks : " + average.toFixed(2);
    document.getElementById('m-percentage').innerHTML= "Percentage : " + percentage.toFixed(2) + "%";
}

function refresh(){
    location.reload();
}