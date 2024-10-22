let images = document.querySelectorAll('.image');
let dragElem = null;
// let bgstore = null;
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

    let targetElem = e.target;

    if (targetElem.className === 'image') {
        let dragImage = dragElem.style.backgroundImage;
        let targetBgImage = targetElem.style.backgroundImage;

        dragElem.style.backgroundImage = targetBgImage;
        targetElem.style.backgroundImage = dragImage;
    }
    
    dragElem = null;
    //  if (dragElem) {
    //     parent.appendChild(dragElem);
    //  }
 })
