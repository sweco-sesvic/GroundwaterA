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
	text: "This application calculates the approximate hydraulic conductivity from grain-size analysis by a formula from Prof Gunnar Gustafson.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);

    
//****************** INPUT FIELDS *******************

var d10row = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'D10 (mm):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
d10row.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:130,
        right: 5
});
d10row.height = rowHeight;
d10row.add(var1);
rows.push(d10row);

var d60row = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'D60 (mm):',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
d60row.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 130
    });
d60row.height = rowHeight;    
d60row.add(var2);
rows.push(d60row);
  


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

var resultlblRow = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLbl = Titanium.UI.createLabel({
	text: 'Approximate hydraulic conductivity (m/s) :',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultlblRow.height = rowHeight;
resultlblRow.add(resultLbl);
rows.push(resultlblRow);

var resultRow = createTableViewRow('auto', 'transparent', 'absolute'); 
var resultLblCalculated = Titanium.UI.createLabel({
	text: ' ',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow.height = rowHeight;
resultRow.add(resultLblCalculated);
rows.push(resultRow);


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
	var intermediateValue = val2/val1;
	var specialVal3 = (0.8*(1/(2*Math.log(intermediateValue))-1/(intermediateValue*intermediateValue-1)));
	var specialVal2 = (1,3*(intermediateValue*intermediateValue-1)/((Math.log(intermediateValue))*(Math.pow(intermediateValue,1.8))));
	var specialVal1 = (10.2*specialVal3*specialVal3*specialVal3/(specialVal2*specialVal2*(1+specialVal3)));
	
	var result = (val1*val1*specialVal1);
	var toExponential = result.toExponential(1);

	
	var resultRounded = Math.round(result*100)/100;
		if (isNaN(resultRounded))
		{
			resultLbl.text = 'Result is null, check input fields!';
		}
		else
		{
			resultLbl.text = 'Approximate hydraulic conductivity (m/s) :';
			resultLblCalculated.text = toExponential.toUpperCase();
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
        	title: 'Approximate hydraulic conductivity',
        	url: 'DetailDescription.js',
        	lblText: 'This application calculates the approximate hydraulic conductivity from grain-size analysis by a formula.\n\nSeveral empirical formulae are used in hydrogeology to estimate the hydraulic conductivity from soil samples. They all present different estimates. This formula by Prof. Gunnar Gustafson, is proved to be well adapted to eskers. It is based on correlation and optimization between d10, d60 and hydraulic conductivity, evaluated from testpumpings in the corresponding 28 sample sites (public wells).\n\nThe basic formula is: K=E(u)*d10^2. The optimized E(u) is a function of d60/d10. The K50% is provided. K80% is approximately 0,49*K50% and K90% is approximately 0,32*K50%, according to a statistical goodness of fit analysis.\n\nGunnar Gustafson,"Brunnsystem för värmelagring och värmeutvinning i akviferer", BFR R39.1983,(Sweden)'
    	});
     		
    	aboutWindow.open();
	});
};

//****************************************************
