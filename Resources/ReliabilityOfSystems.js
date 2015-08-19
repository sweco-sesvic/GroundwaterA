// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/// <reference path="Titanium-vsdoc.js" />
/// <reference path="jquery-1.4.1-vsdoc" />
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.currentWindow;
win.backgroundImage = 'images/bgGradient.png';
var textColor ='#FFF';
var rowHeight = 40;
var rows = [];


//****DESCRIPTION LABEL*****
var descRow = createTableViewRow('auto', 'transparent', 'absolute');
var descLabel = Titanium.UI.createLabel({
	text: "Reliability is the probability of success, or the ability for a system to perform is intended function.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);

    
//****************** INPUT FIELDS *******************

var populationMeanEstimateRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'Probability of failure for \nthe 1st component (%) :',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
populationMeanEstimateRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5
});
populationMeanEstimateRow.height = rowHeight;
populationMeanEstimateRow.add(var1);
rows.push(populationMeanEstimateRow);

var populationStandardDeviationRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'Probability of failure for \nthe 2nd component (%) :',	
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
populationStandardDeviationRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110
    });
populationStandardDeviationRow.height = rowHeight;
populationStandardDeviationRow.add(var2);
rows.push(populationStandardDeviationRow);    

//******************** CALCULATEBTN************************** 
var calcRow = createTableViewRow(75, 'transparent', 'absolute');
var calculateBtn = Titanium.UI.createButton({
	title:'Calculate',
	width:200
});    

calcRow.add(calculateBtn);
rows.push(calcRow);
calculateBtn.addEventListener('click', function()
{
	Calculate();
});

//***********************************************************
var resultHeaderRow = createTableViewRow('auto', 'transparent', 'absolute'); 
resultHeaderRow.backgroundColor = 'lightgray';
var resultHeaderLbl = Titanium.UI.createLabel({
	text: 'Result:',
	font:{fontSize:18,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: 'black',
	left: 5
});	
resultHeaderRow.add(resultHeaderLbl);
rows.push(resultHeaderRow);

var resultRow1 = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLbl1 = Titanium.UI.createLabel({
	text: 'Probability of failure, components in series (%):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow1.height = rowHeight;
resultRow1.add(resultLbl1);
rows.push(resultRow1);

var resultRow2 = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLbl2 = Titanium.UI.createLabel({
	text: 'Probability of failure, components in parallell (%):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow2.height = rowHeight;
resultRow2.add(resultLbl2);
rows.push(resultRow2);

var resultRow3 = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLbl3 = Titanium.UI.createLabel({
	text: 'Probability of failure, one (1st) component (%):',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow3.height = rowHeight;
resultRow3.add(resultLbl3);
rows.push(resultRow3);


var tableView = Titanium.UI.createTableView({
		data: rows, 
		style: Titanium.UI.iPhone.TableViewStyle.PLAIN,
		separatorStyle: 0, 
		separatorColor: 'transparent',
		backgroundColor:'transparent',
		height:'auto',
		left: 5,
		top: 10
	});

win.add(tableView);			

//********** Calculate ****************************
function Calculate()
{
	var val1 = parseFloat(var1.value.replace(',', '.'));	
	var val2 = parseFloat(var2.value.replace(',', '.'));

	var result1 = 100*(1-(1-val1*0.01)*(1-val2*0.01));	
	var result2 = 100*(val1*0.01)*(val2*0.01);
	var result3 = val1;
	
	var resultRounded1 = Math.round(result1*10)/10;
	var resultRounded2 = Math.round(result2*10)/10;
	var resultRounded3 = Math.round(result3*10)/10;

if (isNaN(resultRounded1))
	{
		resultLbl1.text = '';
		resultLbl2.text = '';
		resultLbl3.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded2))
	{
		resultLbl2.text = '';
		resultLbl3.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded3))
	{
		resultLbl3.text = 'Result is null, check input fields!';
	}
else 
	{
		resultLbl1.text = 'The probability of failure, components in series (%) is : '+resultRounded1+'';
		resultLbl2.text = 'The probability of failure, components in parallell (%) is : '+resultRounded2+'';
		resultLbl3.text = 'The probability of failure, one (1st) component (%) is : '+resultRounded3+''; 
	}
}
win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
});
function createTableViewRow(height, selBgColor, layout){
	return Ti.UI.createTableViewRow({
		height: height,
		layout: layout,
		selectedBackgroundColor: selBgColor
	});
}

//***************** ABOUT WINDOW ***********************

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
 
    var aboutMenuItem = menu.add({
        title : "About",
        //backgroundImage: '/images/info_24w.png',
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var aboutWindow = Titanium.UI.createWindow({
        	title: 'Reliability of systems',
        	url: 'DetailDescription.js',
        	lblText: 'Reliability is the probability of success, or the ability for a system to perform is intended function. \nComponents are in series or in parallell. System reliability can be uesed to dermine the degree of redundancy required to achieve a desired level of system reliability (Harr, 1987), for instance in the design of tunnel sealing concepts (one or two barriers). A common two-component system is calulated. A series system is a system with the components in a row after each other. A parallell system is a system with the components beside each other. \nThe low probability of failure for the parallell model is a consequence of the redundancy of the components. That system will fail only when all of its components fail. For a series model, the system will fail when any of its components fail. \nTherefor, a two barriers system in parallell with only moderate reliabilities, can be more reliable than one barrier with a high reliability, depending on the reliabilities of the two components. Some systems have both parallell and series components. That system has a reliability inbetween the parrallell and the series system reliability. \nSee, for instance: \nHarr \nReliability-Based Design in Civil Engineering, McGraw- \nHill, 1987.'
		});
     		
    	aboutWindow.open();
	});
};

//****************************************************
