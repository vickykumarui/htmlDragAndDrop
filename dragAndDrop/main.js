const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


// Fill listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart(){
    console.log('drag started');
    // this.className += ' hold';
    this.classList.add('hold');

    setTimeout( () => (this.className = 'invisible'), 0)
    
}

// Loop through empties and call drag events

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(event){
   event.preventDefault();
   
}

function dragEnter(event){
    event.preventDefault();
   this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
   this.className = 'empty';
   this.append(fill);
}

function dragEnd(){
    console.log('drag ended');
    this.className = 'fill';
}