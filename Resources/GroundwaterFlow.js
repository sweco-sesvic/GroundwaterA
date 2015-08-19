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
	text: "This application estimates the groundwater flow in a narrow system, also considering the recharge.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);

    
//****************** INPUT FIELDS *******************

var populationMeanEstimateRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'Groundwater recharge \nW upstream (m/yr):',
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
	text: 'Groundwater recharge \narea A upstream (m2):',	
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

var sampleMeanValueRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl3 = Titanium.UI.createLabel({
	text: 'Average groundwater \ngradient i downstream (-):',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
sampleMeanValueRow.add(lbl3);

var var3 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    });

sampleMeanValueRow.height = rowHeight;    
sampleMeanValueRow.add(var3);
rows.push(sampleMeanValueRow);    

var sampleStandarDeviationRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl4 = Titanium.UI.createLabel({
	text: 'Average transmissivity \nT downstream (m2/s):',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
sampleStandarDeviationRow.add(lbl4);

var var4 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    });

sampleStandarDeviationRow.height = rowHeight;    
sampleStandarDeviationRow.add(var4);
rows.push(sampleStandarDeviationRow); 

var sampleSizeRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl5 = Titanium.UI.createLabel({
	text: 'Average flow width B \ndownstream (m):',  
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
sampleSizeRow.add(lbl5);

var var5 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width: 110,
        right: 5
    });

sampleSizeRow.height = rowHeight;    
sampleSizeRow.add(var5);
rows.push(sampleSizeRow);      

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
	text: 'Calculated groundwater flow to the system (L/s):',
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
	text: 'Calculated groundwater flow in the system (L/s):',
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
	text: 'Estimated groundwater flow in the system (L/s):',
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


//************************************************************


//********** Calculate ****************************
function Calculate()
{
	var val1 = parseFloat(var1.value.replace(',', '.'));	
	var val2 = parseFloat(var2.value.replace(',', '.'));
	var val3 = parseFloat(var3.value.replace(',', '.'));
	var val4 = parseFloat(var4.value.replace(',', '.'));
	var val5 = parseFloat(var5.value.replace(',', '.'));


	var result1 = (val1*val2)*1000/(31500000);	
	var result2 = val4*val3*val5;
	var result3 = (0.1666*result1)+(0.6666*(result1+result2)/2)+(0.1666*result2);
	
	var resultRounded1 = Math.round(result1*10)/10;
	var resultRounded2 = Math.round(result2*10)/10;
	var resultRounded3 = Math.round(result3*10)/10;


if (isNaN(resultRounded1))
	{
		resultLbl1.text = 'Result is null, check input fields!';
		resultLbl2.text = 'Result is null, check input fields!';
		resultLbl3.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded2))
	{
		resultLbl2.text = 'Result is null, check input fields!';
		resultLbl3.text = 'Result is null, check input fields!';
	}
if (isNaN(resultRounded3))
	{
		resultLbl3.text = 'Result is null, check input fields!';
	}
else 
	{
		resultLbl1.text = 'The groundwater flow to the system is : '+resultRounded1+''; // .toUpperCase()+'';
		resultLbl2.text = 'The groundwater flow in the system is : '+resultRounded2+''; //.toUpperCase()+'';
		resultLbl3.text = 'The estimated groundwater flow in the system is : '+resultRounded3+''; //.toUpperCase()+'';
	}
}
win.addEventListener("click", function()
{
    var1.blur();
    var2.blur();
    var3.blur();
    var4.blur();
    var5.blur();
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
        	title: 'Groundwater flow',
        	url: 'DetailDescription.js',
			lblText: 'This application estimates the groundwater flow in a narrow system, also considering the recharge. The flow in the groundwater system (Qout) must equal the recharge to the system (Qin) on average, if no pumping or infiltration occurs in the system. To estimate the recharge and the flow, then compare, means that uncertainties in the parameters can be assessed. A difference in recharge flow to the system and groundwater flow in the system, is a measure of our uncertainty. \nPreferably, uncertainty limits are set up for each of the parameters W, A, i, T and B. Parameter values within those limits are used. Still, the calculated recharge flow and groundwater flow may be different. An average groundwater flow can then be calculated, using for instance 3-Point Estimation Method, based on the uncertain parameters and combined recharge flow and groundwater flow (also used here). \n\nThe water flow can be stimated by setting Qout-Qin =0, to find optimal solutions by varying the parameter values of W, A, i, T and B within their tolerance limits, for instance by using the optimizing Solver module. However, many solutions exist. \nWith five parameters, it is manually tedious to find the zero solution.'
		});
     		
    	aboutWindow.open();
	});
};

//****************************************************

