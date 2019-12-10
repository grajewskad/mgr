const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const list = document.querySelectorAll('.list');
const check = document.querySelectorAll('.check');
let draggedItem = null;
var comands = [];
var comand;
var end = " ";

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function(e){
		
		draggedItem = item;
		setTimeout(function(){
			item.style.display = 'none';
		},0);
});
	item.addEventListener('dragend', function() {
		
		setTimeout(function() {
		draggedItem.style.display = 'block';
		draggedItem=null;
		
		},0);

	})
	for (let j=0; j<lists.length; j++){
		const list = lists[j];
		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function(e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0,0,0,0.2)';

		});
		list.addEventListener('dragleave', function(e){
			this.style.backgroundColor = 'rgba(0,0,0,0.1)';
		});
		list.addEventListener('drop', function (e) {
			
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0,0,0,0.1)';
		});
	}
}

function generate(){
	comands = [];
	var concat=" ";
	end = "";
	for(i=0;i<check.length;i++){
		const listvar = check[i];
		var change = listvar.querySelector('.list-item');
		var changeinpt = listvar.querySelector('input');
		if(changeinpt!=null){
		var comandinpt = listvar.querySelector('input').value;
		comands.push(comandinpt+">");
}

		else if(change!=null){
		comand = listvar.querySelector('.list-item').getAttribute("value");
		comands.push(comand);
	}


	}
	for(i=0;i<comands.length;i++){
		end = end + comands[i]+"|";
	}
	document.getElementById("finishbox").innerHTML += end;

}