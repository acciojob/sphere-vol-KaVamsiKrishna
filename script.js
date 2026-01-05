function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radius = Number(e.target.radius.value);
	const volumeEle = e.target.volume;
	if(isNaN(radius) || radius <= 0) {
		volumeEle.value = 'NaN'
		return;
	}
	const volume = 4/3 * Math.PI * (radius * radius * radius);
	const roundedVolume = Math.round(volume * 10000)
	volumeEle.value = roundedVolume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
