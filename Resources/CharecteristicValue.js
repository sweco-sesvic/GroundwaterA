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
	text: "This application estimates the characteristic value from limited knowledge of ground properties (Eurocode 7).",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);
    
//****************** INPUT FIELDS *******************

var estimatedMinimumRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'Estimated minimum value:',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedMinimumRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5
});
estimatedMinimumRow.height = rowHeight;
estimatedMinimumRow.add(var1);
rows.push(estimatedMinimumRow);

var estimatedMostLikelyRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'Estimated most likely value:',	
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedMostLikelyRow.add(lbl2);

var var2 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
		right: 5,
		width: 110
    });
estimatedMostLikelyRow.height = rowHeight;
estimatedMostLikelyRow.add(var2);
rows.push(estimatedMostLikelyRow);

var estimatedMaximumRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl3 = Titanium.UI.createLabel({
	text: 'Estimated maximum value:',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
estimatedMaximumRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    });

estimatedMaximumRow.height = rowHeight;    
estimatedMaximumRow.add(var3);
rows.push(estimatedMaximumRow);    


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
	text: 'The conservative characteristic value is :',
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
	text: 'The three-point weighted average is :',
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor,
	width: 300,
	left: 5
});	
resultRow2.height = rowHeight;
resultRow2.add(resultLbl2);
rows.push(resultRow2);


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

//************************************************************


//********** Calculate ****************************
function Calculate()
{
	var val1 = parseFloat(var1.value.replace(',', '.'));	
	var val2 = parseFloat(var2.value.replace(',', '.'));
	var val3 = parseFloat(var3.value.replace(',', '.'));

	var result1 = ((val1+(4*val2)+val3)/6)-0.5*(val3-val1);
	var result2 = (val1+(4*val2)+val3)/6;
	
	var toExponentialresult1 = result1.toExponential(2);
	var toExponentialresult2 = result2.toExponential(2);

	var resultRounded1 = Math.round(result1*100)/100;
	var resultRounded2 = Math.round(result2*100)/100;


if (isNaN(resultRounded1))
	{
		resultLbl1.text = '';
		resultLbl2.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded2))
	{
		resultLbl2.text = 'Result is null, check input fields!';
	}

else 
	{
		resultLbl1.text = 'The conservative characteristic value is : '+toExponentialresult1.toUpperCase()+'';
		resultLbl2.text = 'The three-point weighted average is : '+toExponentialresult2.toUpperCase()+'';

	}
}
win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
    var3.blur();

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
        	title: 'Characteristic value',
        	url: 'DetailDescription.js',
        	lblText: 'This application estimates the characteristic value from limited knowledge of ground properties (Eurocode 7). For small samples, a pure statistical approach is too conservative. In those cases, a simple way to assess the the so called characteristic value is to calculate a conservative weighted average from:\n\nx(min) =  estimated minimum value\nx(mode) =  estimated most likely value\nx(max) = estimated maximum value\nx(c) = conservative characteristic value\nx(c) = {[x(min)+4*x(mode)+x(max)]/6 - 0,5*[x(max)-x(min)]}.\n\nA characteristic value x(c) is the base for selecting the representative design value. This method (Point Estimated Method) was originally presented by Rosenblueth (in Harr), and is presented in the Eurocode 7 by Schneider. See,  for instance: Bond & Harris, Decoding Eurocode, Taylor & Francis 2008, and Harr, Reliability-Based Design in Civil Engineering, McGraw-Hill, 1987 and Schneider, Definition and determination of characteristic soil properties, Balkema, 1997.'
    	});
     		
    	aboutWindow.open();
	});
};


//****************************************************

