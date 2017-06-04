
var host = 'https://webdxd-student-api.herokuapp.com/'    //'http://192.168.1.124:3000/'

$.get(host+'student/', function(response) {


// for (var i=0; i<response.length; i++){

// 	//$('<a>').text(response[i]._id).appendTo('body')
// 	//$('<a>').text(response[i].name).appendTo('body')
// 	$('<a>').text(response[i].name).attr('href','http://192.168.1.124:3000/student'+response[i]._id).appendTo('body')
// 	console.log(response[i]._id)

// }



//console.log(response)

response.forEach(function(student){
	$('<a>')
		.text(student.name)
		.addClass('get-student-info')
		.attr('id',student._id)
		//.attr('href', 'http:/192.168.1.124:3000/student/'+student._id)
		//.appendTo('body')
		.appendTo('.student-list')
})



$('body').on('click','.get-student-info', function(e) {



		//console.log('Clicked!')



		// $('<a>')
		// .text(student.name)
		// .addClass('get-student-info')
		// .attr('id',student._id)
		// //.attr('href', 'http:/192.168.1.124:3000/student/'+student._id)
		// .appendTo('body')
		//console.log('Clicked!')
		//console.log($(this)._id)


		//console.log(e.target)
		$.get(host+'student/'+e.target.id,function(response){

			console.log(response);

			$('.student-name').text(response.name || "");
			$('.student-age').text(response.age || "");
			$('.student-school').text(response.school || "");
		})




		// $.get(host+'student/'+e.target.id,function(response){

		// 	console.log(response);
		// })




})


	// $('.get-student-info').click(function(){

	// 		console.log('clicked!')


	// })



})


// $.get('http://192.168.1.124:3000/student/id', function(response) {

// console.log(response)

// })
//console.log('Hello!')