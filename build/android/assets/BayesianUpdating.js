function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),a=parseFloat(var3.value.replace(",",".")),i=parseFloat(var4.value.replace(",",".")),o=parseFloat(var5.value.replace(",",".")),n=(a+1/o*Math.pow(i/t,2)*e)/(1+1/o*Math.pow(i/t,2)),r=Math.sqrt(1/o*Math.pow(i,2)/(1+1/o*Math.pow(i/t,2))),l=n.toExponential(2),d=r.toExponential(2),s=Math.round(100*n)/100,u=Math.round(100*r)/100;isNaN(s)&&(resultLbl1.text="",resultLbl2.text="Result is null, check input fields!"),isNaN(u)?resultLbl2.text="Result is null, check input fields!":(resultLbl1.text="The posterior population mean μ is : "+l.toUpperCase(),resultLbl2.text="The posterior population standard deviation σ is : "+d.toUpperCase())}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application estimates the posterior mean value and standard deviation from prior estimate and a sample.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var populationMeanEstimateRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"The prior population\nmean estimate:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});populationMeanEstimateRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});populationMeanEstimateRow.add(var1),win.add(populationMeanEstimateRow);var populationStandardDeviationRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"The prior population\nstandard deviation estimate:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});populationStandardDeviationRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});populationStandardDeviationRow.add(var2),win.add(populationStandardDeviationRow);var sampleMeanValueRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"The sample mean value:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});sampleMeanValueRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});sampleMeanValueRow.add(var3),win.add(sampleMeanValueRow);var sampleStandarDeviationRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"The sample standard\ndeviation value:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});sampleStandarDeviationRow.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});sampleStandarDeviationRow.add(var4),win.add(sampleStandarDeviationRow);var sampleSizeRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl5=Titanium.UI.createLabel({text:"The sample size:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});sampleSizeRow.add(lbl5);var var5=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});sampleSizeRow.add(var5),win.add(sampleSizeRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl1=Titanium.UI.createLabel({text:"The posterior population mean μ is :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow1.add(resultLbl1),win.add(resultRow1);var resultRow2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl2=Titanium.UI.createLabel({text:"The posterior population standard deviation σ is :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow2.add(resultLbl2),win.add(resultRow2),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(){var e=Titanium.UI.createWindow({title:"Bayesian Updating",url:"DetailDescription.js",lblText:"This application estimates the posterior mean value and standard deviation from prior estimate and a sample. Bayes´ Theorem expresses that the prior knowledge may be updated by observations to form a posterior new knowledge of the property density function.\n\nThe expected value is the weighted mean of the information coming from the prior information and from the data. As in hydrogeology, and many related disciplines, both a variable mean and the standard deviation are useful We differentiate between sample properties (what we use) and the population properties (what we often look for).\n\nPrior estimates of mean value and standard deviation are updated with sample properties, and by Bayes´ provide a more likely estimate of the population mean and standard deviation. The effect is because prior knowledge include truth and uncertainty, and additional information gained, means that uncertainty is removed. With no other prior knowledge of the standard deviation, consider a coefficient of variation of >10 % for soil parameters. Poor prior estimates may impair the result.\n\nSee,  for instance:\nKoch, Bayesian Inference with Geodetic Applications, Spinger-Verlag, 1990, and Bond & Harris, Decoding Eurocode 7, Taylor & Francis, 2008, and Harr, Reliability-Based Design in Civil Engineering, McGraw-Hill, 1987."});e.open()})};