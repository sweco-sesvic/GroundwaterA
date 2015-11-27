function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),a=parseFloat(var3.value.replace(",",".")),i=parseFloat(var4.value.replace(",",".")),r=parseFloat(var5.value.replace(",",".")),o=Math.log(i/r)*e*a/t,n=Math.round(100*o)/100;isNaN(n)?resultLbl.text="Result is null, check input fields!":resultLbl.text="Mean travel time to well (yr) : "+n}Titanium.UI.setBackgroundColor("#000");var currwin=Titanium.UI.currentWindow;currwin.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],win=Titanium.UI.createScrollView({top:0,showVerticalScrollIndicator:!0,showHorizontalScrollIndicator:!1,scrollType:"vertical",layout:"vertical"}),descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application calculates the travel time to a well from an upstream polluted area, based on recharge.",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var aquiferRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Aquifer depth (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});aquiferRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});aquiferRow.add(var1),win.add(aquiferRow);var rechargeRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Recharge (m/yr):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});rechargeRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});rechargeRow.add(var2),win.add(rechargeRow);var effectivePorosityRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Effective porosity (-):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});effectivePorosityRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});effectivePorosityRow.add(var3),win.add(effectivePorosityRow);var distanceFromWellRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"Distance from well\nto upstream divide (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});distanceFromWellRow.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});distanceFromWellRow.add(var4),win.add(distanceFromWellRow);var distanceFromPollutedRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl5=Titanium.UI.createLabel({text:"Distance from divide\nto polluted area (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});distanceFromPollutedRow.add(lbl5);var var5=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});distanceFromPollutedRow.add(var5),win.add(distanceFromPollutedRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl=Titanium.UI.createLabel({text:"Mean travel time to well (yr):",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow.add(resultLbl),win.add(resultRow),currwin.activity.onCreateOptionsMenu=function(e){var t=e.menu,a=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});a.addEventListener("click",function(e){var t=Titanium.UI.createWindow({title:"Time of travel to a well",url:"DetailDescription.js",lblText:'This application calculates the travel time to a well from an upstream polluted area, based on recharge.\n\nAs v=dx/dt= [(W*x)/(D*n(e))], this implies that\n\nt=[ln(x/x(0))*D*n(e)/W], see\nAppelo&Postma, "Geochemistry, groundwater and pollution".\n\nwhere\nW = recharge\nx = distance from water divide\nx(0) = distance from water divide to infiltration\nD = aquifer depth\nn(e) = effective porosity'});t.open()})},currwin.add(win);