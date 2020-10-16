function Random(){
	var i = prompt("what is the smallest number");
	var j = prompt("what is the biggest number");
	var k = prompt("how many number be required");
	var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var a;
	var txt = " ";
	if (k>20)
	{
		for(var p = 20;p<k;p++)
		{
			array.push(0);
		}
	}
	if(i>j)
	{
	document.getElementById("array").innerHTML = "Wrong number";
	}
	else
	{
	for(var m=0; m<k; m++)
	{
		
		a = Math.random() * (j - i);
		array[m] = a;
		if(a<i || a>j)
		{
			m--;
		}
	}
	for(var m = 0;m<k;m++)
	{
		txt = txt + array[m] + "<br>";
		
	}
	document.getElementById("array").innerHTML = txt;	
	}
}