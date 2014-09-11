
$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(1000);

});


function validateForm()
{
	var mob = document.myForm.mob.value;
	if (isNaN(mob) || mob.length != 10) 
		{
			alert("Enter a valid mobile number");
			return false;
		};
}


function loginPopup()
{
	document.getElementById('popup').style.display = 'block';
}

function loginAction(event)
{ 
	event.preventDefault();
	var uname= document.getElementById('username').value;
	var pword= document.getElementById('password').value;
	if (uname==pword) 
		{
			location.href = "https://www.google.co.in/?gfe_rd=cr&ei=GO3IU4GSFtDM8gfZi4G4DQ&gws_rd=ssl";
		}
}

function closePopup()
{
	document.getElementById('popup').style.display = 'none';
}


$( document ).ready(function() {
var images = [];
var i;
var items = [];
var button;
$.getJSON('images.json', function(data){
	images = data;
    for(i=0; i < images.length; i++){
	items.push( "<div class='img'><a ><img onclick = 'onImageClick(this)' id='" + images[i].title + "' src='" + images[i].url + "'  alt='" + images[i].title +"' width='150' height='200'></a>"+
	"<div class='desc'>"+ images[i].title +"</div></div>");
	}
	$("#image-container").append(items);
		
	});
 });


function onImageClick(clicked)
{
	document.getElementById('image-container').style.display = 'none';
	document.getElementById('clickImageDiv').style.display = 'block';
	console.log(clicked.id);
	var button=[];
	$.getJSON('images.json', function(data){
    images = data;
	for(i=0; i < images.length; i++){
		if (images[i].title == clicked.id) {
		document.getElementById('singleMobile').src= images[i].url;
		document.getElementById('mobTitle').innerHTML= images[i].title;
		document.getElementById('mobDisc').innerHTML= images[i].disc;
			};	
	   }
    });
}