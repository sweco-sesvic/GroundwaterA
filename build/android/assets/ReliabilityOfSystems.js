function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),a=100*(1-(1-.01*e)*(1-.01*t)),i=100*(.01*e)*(.01*t),r=e,o=Math.round(10*a)/10,n=Math.round(10*i)/10,l=Math.round(10*r)/10;isNaN(o)&&(resultLbl1.text="",resultLbl2.text="",resultLbl3.text="Result is null, check input fields!"),isNaN(n)&&(resultLbl2.text="",resultLbl3.text="Result is null, check input fields!"),isNaN(l)?resultLbl3.text="Result is null, check input fields!":(resultLbl1.text="Probability of failure, components in series (%) : "+o,resultLbl2.text="Probability of failure, components in parallell (%) : "+n,resultLbl3.text="Probability of failure, one (1st) component (%) : "+l)}Titanium.UI.setBackgroundColor("#000");var currwin=Titanium.UI.currentWindow;currwin.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],win=Titanium.UI.createScrollView({top:0,showVerticalScrollIndicator:!0,showHorizontalScrollIndicator:!1,scrollType:"vertical",layout:"vertical"}),descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"Reliability is the probability of success, or the ability for a system to perform its intended function.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var populationMeanEstimateRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Probability of failure for \nthe 1st component (%) :",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});populationMeanEstimateRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});populationMeanEstimateRow.add(var1),win.add(populationMeanEstimateRow);var populationStandardDeviationRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Probability of failure for \nthe 2nd component (%) :",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});populationStandardDeviationRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});populationStandardDeviationRow.add(var2),win.add(populationStandardDeviationRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl1=Titanium.UI.createLabel({text:"Probability of failure, components in series (%) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow1.add(resultLbl1),win.add(resultRow1);var resultRow2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl2=Titanium.UI.createLabel({text:"Probability of failure, components in parallell (%) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow2.add(resultLbl2),win.add(resultRow2);var resultRow3=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl3=Titanium.UI.createLabel({text:"Probability of failure, one (1st) component (%) :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow3.add(resultLbl3),win.add(resultRow3),currwin.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(e){var t=Titanium.UI.createWindow({title:"Reliability of systems",url:"DetailDescription.js",lblText:"Reliability is the probability of success, or the ability for a system to perform its intended function. \nComponents are in series or in parallell. System reliability can be uesed to dermine the degree of redundancy required to achieve a desired level of system reliability (Harr, 1987), for instance in the design of tunnel sealing concepts (one or two barriers). A common two-component system is calulated. A series system is a system with the components in a row after each other. A parallell system is a system with the components beside each other. \nThe low probability of failure for the parallell model is a consequence of the redundancy of the components. That system will fail only when all of its components fail. For a series model, the system will fail when any of its components fail. \nTherefor, a two barriers system in parallell with only moderate reliabilities, can be more reliable than one barrier with a high reliability, depending on the reliabilities of the two components. Some systems have both parallell and series components. That system has a reliability inbetween the parrallell and the series system reliability. \nSee, for instance: \nHarr \nReliability-Based Design in Civil Engineering, McGraw- \nHill, 1987."});t.open()})},currwin.add(win);