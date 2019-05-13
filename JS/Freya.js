var count = 0;

function display() 
{
	count++;
	var navi = document.getElementById('navi');

	if (count % 2 === 0) 
	{
		navi.style.display = 'none';
	}
	else
	{
		navi.style.display = 'block';	
	}
}