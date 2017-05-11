$(document).ready(function() {

  var advanceTask = function(task) {
    var modified = task.innerText.trim()
    for (var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

// this hides the new task form when the website is opened
$('#newTaskForm').hide();

var listo = [];

var Task = function(task) {
  this.task = task;
  this.id = 'new';
}

// making our addTask function and putting a conditional to ensure the user inputs
//data into our addTask function

//call our Task constructor and fill it with the new task, and then push the
//new task to listo, and save it
var addTask = function(task) {
  if(task) {
    task = new Task(task);
    listo.push(task);

      $('#newItemInput').val('');
        $('#newList').append(
          '<a href="#finish" class="" id="item">' +
          '<li class="list-group-item">' +
          '<h3>' + task.task + '</h3>'+
          '<span class="arrow pull-right">' +
          '<i class="glyphicon glyphicon-arrow-right">' +
          '</span>' +
          '</li>' +
          '</a>'
        );
  }

  // this hides our New button and will show the input form at the same time

  $('#newTaskForm').slideToggle('fast', 'linear');
};
// all the stuf above ^^^^^^ clears the input form after it is submitted and then
//shows our new list item in our index.html


// below calls the addTask function when we click the saveNewItem button

$("#saveNewItem").on('click', function(e) {
  e.preventDefault();
  var task = $('#newItemInput').val().trim();
  addTask(task);
});

//opens form
$('#add-todo').on('click', function() {
  console.log('Hi')
  $('#newTaskForm').fadeToggle('fast', 'linear');
});

//closes form
$('#cancel').on('click', function (e) {
  e.preventDefault();
  $('#newTaskForm').fadeToggle('fast', 'linear');
});

//change the status of an item from new to inProgress
$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;
  advanceTask(task);
  this.id = 'inProgress';
  $('#currentList').append(this.outerHTML);
});

$(document).on('click', '#inProgress', function (e) {
  e.preventDefault();
  var task = this;
  task.id = "archived";
  var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
  advanceTask(task);
  $('#archivedList').append(changeIcon);

});











});
