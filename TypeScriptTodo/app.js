var container = document.getElementById('container');
var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
container.innerHTML = "<div todo='" + todo.id + "' class=\"list-group-item\">\n\t<i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n\t<span class=\"name\">" + todo.name + "</span>\n</div>";
