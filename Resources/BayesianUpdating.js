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
	text: "This application estimates the posterior mean value and standard deviation from prior estimate and a sample.",
	font:{fontSize:14,fontFamily:'Helvetica Neue'},
	color: textColor,
	left: 5
});	

descRow.add(descLabel);
rows.push(descRow);
    
//****************** INPUT FIELDS *******************

var populationMeanEstimateRow = createTableViewRow('auto', 'transparent', 'absolute');

var lbl1 = Titanium.UI.createLabel({
	text: 'The prior population\nmean estimate:',
	left: 5,
	font:{fontSize:14,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	color: textColor
});
populationMeanEstimateRow.add(lbl1);

var var1 = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        width:110,
        right: 5,
        // keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
});
populationMeanEstimateRow.height = rowHeight;
populationMeanEstimateRow.add(var1);
rows.push(populationMeanEstimateRow);

var populationStandardDeviationRow = createTableViewRow('auto', 'transparent', 'absolute');
var lbl2 = Titanium.UI.createLabel({
	text: 'The prior population\nstandard deviation estimate:',	
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
	text: 'The sample mean value:',  
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
	text: 'The sample standard\ndeviation value:',  
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
	text: 'The sample size:',  
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
	text: 'The posterior population mean μ is :',
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
	text: 'The posterior population standard deviation σ is :',
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
	var val4 = parseFloat(var4.value.replace(',', '.'));
	var val5 = parseFloat(var5.value.replace(',', '.'));


	var result1 = (val3+(1/val5)*Math.pow((val4/val2),2)*val1)/(1+(1/val5)*Math.pow((val4/val2),2));	
	var result2 = Math.sqrt(((1/val5)*Math.pow((val4),2))/(1+(1/val5)*Math.pow((val4/val2),2)));
	
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
		resultLbl1.text = 'The posterior population mean μ is : '+toExponentialresult1.toUpperCase()+'';
		resultLbl2.text = 'The posterior population standard deviation σ is : '+toExponentialresult2.toUpperCase()+'';

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
    	showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
    });
        
	aboutMenuItem.addEventListener("click", function(e) {
        var detailInfo = Titanium.UI.createWindow({
        	title: 'Bayesian Updating',
        	url: 'DetailDescription.js',
        	lblText: 'This application estimates the posterior mean value and standard deviation from prior estimate and a sample. Bayes´ Theorem expresses that the prior knowledge may be updated by observations to form a posterior new knowledge of the property density function.\n\nThe expected value is the weighted mean of the information coming from the prior information and from the data. As in hydrogeology, and many related disciplines, both a variable mean and the standard deviation are useful We differentiate between sample properties (what we use) and the population properties (what we often look for).\n\nPrior estimates of mean value and standard deviation are updated with sample properties, and by Bayes´ provide a more likely estimate of the population mean and standard deviation. The effect is because prior knowledge include truth and uncertainty, and additional information gained, means that uncertainty is removed. With no other prior knowledge of the standard deviation, consider a coefficient of variation of >10 % for soil parameters. Poor prior estimates may impair the result.\n\nSee,  for instance:\nKoch, Bayesian Inference with Geodetic Applications, Spinger-Verlag, 1990, and Bond & Harris, Decoding Eurocode 7, Taylor & Francis, 2008, and Harr, Reliability-Based Design in Civil Engineering, McGraw-Hill, 1987.'    
        });
    	
    	detailInfo.open();
	});
};

//****************************************************
