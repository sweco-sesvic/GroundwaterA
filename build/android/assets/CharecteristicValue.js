function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),i=parseFloat(var3.value.replace(",",".")),a=(e+4*t+i)/6-.5*(i-e),o=(e+4*t+i)/6,n=a.toExponential(2),r=o.toExponential(2),l=Math.round(100*a)/100,d=Math.round(100*o)/100;isNaN(l)&&(resultLbl1.text="",resultLbl2.text="Result is null, check input fields!"),isNaN(d)?resultLbl2.text="Result is null, check input fields!":(resultLbl1.text="The conservative characteristic value is : "+n.toUpperCase(),resultLbl2.text="The three-point weighted average is : "+r.toUpperCase())}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application estimates the characteristic value from limited knowledge of ground properties (Eurocode 7).",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var estimatedMinimumRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Estimated minimum value:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});estimatedMinimumRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});estimatedMinimumRow.add(var1),win.add(estimatedMinimumRow);var estimatedMostLikelyRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Estimated most likely value:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});estimatedMostLikelyRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});estimatedMostLikelyRow.add(var2),win.add(estimatedMostLikelyRow);var estimatedMaximumRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Estimated maximum value:",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});estimatedMaximumRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});estimatedMaximumRow.add(var3),win.add(estimatedMaximumRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow1=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl1=Titanium.UI.createLabel({text:"The conservative characteristic value is :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow1.add(resultLbl1),win.add(resultRow1);var resultRow2=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl2=Titanium.UI.createLabel({text:"The three-point weighted average is :",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow2.add(resultLbl2),win.add(resultRow2),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,i=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});i.addEventListener("click",function(){var e=Titanium.UI.createWindow({title:"Characteristic value",url:"DetailDescription.js",lblText:"This application estimates the characteristic value from limited knowledge of ground properties (Eurocode 7). For small samples, a pure statistical approach is too conservative. In those cases, a simple way to assess the the so called characteristic value is to calculate a conservative weighted average from:\n\nx(min) =  estimated minimum value\nx(mode) =  estimated most likely value\nx(max) = estimated maximum value\nx(c) = conservative characteristic value\nx(c) = {[x(min)+4*x(mode)+x(max)]/6 - 0,5*[x(max)-x(min)]}.\n\nA characteristic value x(c) is the base for selecting the representative design value. This method (Point Estimated Method) was originally presented by Rosenblueth (in Harr), and is presented in the Eurocode 7 by Schneider. See,  for instance: Bond & Harris, Decoding Eurocode, Taylor & Francis 2008, and Harr, Reliability-Based Design in Civil Engineering, McGraw-Hill, 1987 and Schneider, Definition and determination of characteristic soil properties, Balkema, 1997."});e.open()})};