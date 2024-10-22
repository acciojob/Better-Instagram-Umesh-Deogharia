//your code here
let images = document.querySelectorAll('.image');
let dragElem = null;

let image1 = document.querySelector('#drag1');
let parent = document.querySelector('#parent');

images.forEach((elem)=>{
    elem.addEventListener("dragstart",(e)=>{
    dragElem = e.target;
    console.log(e.target);
    console.log('drag Started');
});
})


parent.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("dragover", e.target);
});



 parent.addEventListener('drop',(e)=>{
    e.preventDefault();

    // let dragTarget = e.target;
    // let dragOver = dragElem;

    // console.log('DropElem',dragOver)


     if (dragElem) {
        parent.appendChild(dragElem);
        dragElem = null;
     }
 })
