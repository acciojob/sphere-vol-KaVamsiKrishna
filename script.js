function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radius = Number(e.target.radius.value);
	const volumeEle = e.target.volume;
	if(isNaN(radius) || radius <= 0) {
		volumeEle.value = 'NaN'
		return;
	}
	volumeEle.value = (4/3 * Math.PI * (radius * radius * radius)).toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
