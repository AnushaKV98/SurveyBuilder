window.onload = function() {
    document.getElementById('surveyBuildingDiv').style.display = "none";
    document.getElementById('finishButton').style.display = "none";
    document.getElementById('finalSurveyForm').style.display = "none";    

  };

document.getElementById("createSurvey").onclick = function(event) {
    document.getElementById('surveyBuildingDiv').style.display = "block";
    document.getElementById('finishButton').style.display = "block";
    document.getElementById('welcomeUser').style.display = "none";
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
}

var c = 0;
document.getElementById("addMoreOptions").onclick = function(event) {
    event.preventDefault(); 
    console.log('value of c is '+ c);

    c=c+1;
    if( c == 1)
    {
        document.getElementById('div3').style.display = "block";
    }
    if( c == 2)
    {
        document.getElementById('div4').style.display = "block";
        c=0;
    }
}



document.getElementById("saveQuestion").onclick = function(e){
    e.preventDefault();
    addQuestion();

}

let survey = [];



function addQuestion()
{
    let surveySet = {
        sq : "",
        options : []
    }
    surveySet.sq = document.getElementById('surveyQuestion').value;
    surveySet.options = [
                        document.getElementById('option1').value,                
                        document.getElementById('option2').value,
                        document.getElementById('option3').value,
                        document.getElementById('option4').value,
                        ]
    if( (surveySet.sq.length == 0 ) )
    {
        alert("NO DATA");
    }
    else
    {
        survey.push(surveySet);
        alert("Your Survey Question Saved!")
        document.querySelector('form').reset();
    }
    // return surveySet;
    document.getElementById('div3').style.display = "none";
    document.getElementById('div4').style.display = "none";
    document.getElementById('addMoreOptions').style.display = "block";

    
}

// const ss = addQuestion();

function displaySurveyArray()
{
    console.log('Length of Survey Array is : ',survey.length);
    console.log('Items in the Survey Array ');
    console.log(survey);
    
}

// ------------------------------------------------------------------------------------------------------------------------//
document.getElementById("finishButton").onclick = function(e){

    alert("Saved all your questions and options. Click on ok button to see your survey form!")
    e.preventDefault();
    // console.log('-------------SURVEY ARRAY-------------');
    // displaySurveyArray();

       document.getElementById('finalSurveyForm').style.display = "block";  
       document.getElementById('surveyBuildingDiv').style.display = "none";
       document.getElementById('finishButton').style.display = "none";  
       document.getElementById('welcomeUser').style.display = "none";

       for(let i=0; i< survey.length ; i++)
       {
        const body = document.body;
        const div = document.createElement("div");
        div.className = "newClass";
        body.append(div);


        const strong = document.createElement("strong")
        strong.innerText ="Q No:" + (i+1) + " - " + survey[i].sq;
        div.append(strong);


        for(let j=0; j<4 ; j++)
        {
            if(survey[i].options[j]!="")
            {
                const label = document.createElement("label")
                const br = document.createElement("br")
                div.append(br)
                label.innerText = "option "+ (j+1)  +" : " +survey[i].options[j];
                div.append(label) 
            }               
        }

       }


}










































// ---------------------------------------------------------------------------//
// function addNewDiv(){

//     const outPara = document.createElement("p");
//     for(let i=0;i<4;i++)
//     {
//       const eachOption  = document.createElement("input");
//     }

// }



// -------------------------------------------------------------------------------------------------------------------------------------//

// document.getElementById("finishButton").onclick = function(e){
//     e.preventDefault();
//     console.log('finish button clicked'); 

//     document.getElementById('finalSurveyForm').style.display = "block";  
//     document.getElementById('surveyBuildingDiv').style.display = "none";
//     document.getElementById('finishButton').style.display = "none";  
//     document.getElementById('welcomeUser').style.display = "none";
//     // displaySurveyArray();
    // const squestion = surveySet.sq;
    // const optn1 = surveySet.options[0];
    // const optn2 = surveySet.options[1];
    // const optn3 = surveySet.options[2];
    // const optn4 = surveySet.options[3];

    // ---------------------------------------------------------------------//
    // console.log('before for loop');
    // for(let i=0; i<survey.length;i++)
    // {
    //     displaySurveyArray();
    //     for(let j=0; j<surveySet.length; j++ )
    //     {
    //         const outDiv = document.createElement("div");
    //         outDiv.className = 'outDiv';
    
    //         const outPara = document.createElement("p");
    //         outPara.className = 'outPara';
    
    //         const eachOption  = document.createElement("input");
    //         eachOption.className = 'outOption';
    
    //         document.getElementById('outPara').innerHTML = squestion;
            
    //         document.getElementById('outOption1').innerHTML = optn1;
    //         document.getElementById('outOption').innerHTML = optn2;
    //         document.getElementById('outOption').innerHTML = optn3;
    //         document.getElementById('outOption').innerHTML = optn4;

    //     }
               
    // }
    // console.log('after for loop');


// }




// const q = document.getElementById("outQuestion").innerHTML = "Question comes here"
// div.append(q);




       