
 
 

	function transfer(itemName)
	{	var lengthOfSelect;
	
		lengthOfSelect = eval("document.topicForm"+itemName+".topics"+itemName+".length;");
		
		
		
		for(var i=0;i<lengthOfSelect;i++){
			
			
			if(eval("document.topicForm"+itemName+".topics"+itemName+".options[i].selected;")){
					
					var checkAndSendMe,targetName;
					checkAndSendMe =eval("document.topicForm"+itemName+".topics"+itemName+".options[i].value");
					
					
					
					
					if(checkAndSendMe!="")
					{
					
						if(checkAndSendMe.indexOf("||")>-1)
							{
								targetName =checkAndSendMe.substr(checkAndSendMe.indexOf("||")+2);
								
								checkAndSendMe = checkAndSendMe.substr(0,checkAndSendMe.indexOf("||"));
								
								
								
							}
							
						if(targetName =="true")
						{							
							window.open(checkAndSendMe,"newWindow");
						}
						else
						{				
								location.href=checkAndSendMe;
						}
					
					
					}
					
					
			}
		}
	}
