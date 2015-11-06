function Calculate(){var e=parseFloat(var1.value.replace(",",".")),t=parseFloat(var2.value.replace(",",".")),i=parseFloat(var3.value.replace(",",".")),a=parseFloat(var4.value.replace(",",".")),o=t*a/(e*i)/365,r=Math.round(100*o)/100;resultLbl.text=isNaN(r)?"Result is null, check input fields!":"Mean velocity v(x) at distance (m/d): "+r}Titanium.UI.setBackgroundColor("#000");var win=Titanium.UI.currentWindow;win.backgroundImage="images/bgGradient.png";var textColor="#FFF",rowHeight=40,rows=[],descRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),descLabel=Titanium.UI.createLabel({text:"This application calculates the flow velocity, based on recharge from a divide and no downstream pumping",font:{fontSize:14,fontFamily:"Helvetica Neue"},color:textColor,left:5});descRow.add(descLabel),win.add(descRow);var aquiferRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl1=Titanium.UI.createLabel({text:"Aquifer depth (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});aquiferRow.add(lbl1);var var1=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS});aquiferRow.add(var1),win.add(aquiferRow);var rechargeRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl2=Titanium.UI.createLabel({text:"Recharge (m/yr):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});rechargeRow.add(lbl2);var var2=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});rechargeRow.add(var2),win.add(rechargeRow);var effectivePorosityRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl3=Titanium.UI.createLabel({text:"Effective porosity (-):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});effectivePorosityRow.add(lbl3);var var3=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});effectivePorosityRow.add(var3),win.add(effectivePorosityRow);var distanceFromUpstreamRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),lbl4=Titanium.UI.createLabel({text:"Distance x from\nupstream divide (m):",left:5,font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor});distanceFromUpstreamRow.add(lbl4);var var4=Ti.UI.createTextArea({borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,returnKeyType:Titanium.UI.RETURNKEY_DONE,right:5,width:130});distanceFromUpstreamRow.add(var4),win.add(distanceFromUpstreamRow);var calcRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),calculateBtn=Titanium.UI.createButton({title:"Calculate",width:200,backgroundColor:"transparent",color:"#B5CCEF"});calcRow.add(calculateBtn),win.add(calcRow),calculateBtn.addEventListener("click",function(){Calculate()});var resultHeaderRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE});resultHeaderRow.backgroundColor="#909FB9";var resultHeaderLbl=Titanium.UI.createLabel({text:"Result:",font:{fontSize:18,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:"black",left:5});resultHeaderRow.add(resultHeaderLbl),win.add(resultHeaderRow);var resultRow=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE}),resultLbl=Titanium.UI.createLabel({text:"Mean velocity v(x) at distance (m/d):",font:{fontSize:14,fontWeight:"bold",fontFamily:"Helvetica Neue"},color:textColor,width:300,left:5});resultRow.add(resultLbl),win.add(resultRow),win.activity.onCreateOptionsMenu=function(e){var t=e.menu,i=t.add({title:"About",showAsAction:Ti.Android.SHOW_AS_ACTION_IF_ROOM});i.addEventListener("click",function(){var e=Titanium.UI.createWindow({title:"Flow velocity",url:"DetailDescription.js",lblText:'This application calculates the flow velocity, based on recharge from a divide and and no downstream pumping.\n\nv=dx/dt=Q/(A*n(e)) = (W*x)/(D*n(e))\n\nwhere\nQ = groundwater flow\nA = flow area\nW = recharge\nx = distance from water divide\nD = aquifer depth\nn(e) = effective porosity\nThe formula demonstrates that the velocity increases downstream with increasing distance from from the water divide.\n\nAppelo&Postma,"Geochemistry, groundwater and pollution" '});e.open()})};