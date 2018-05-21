var blocks = document.querySelectorAll('div.block')
for(var i=0; i<blocks.length; i++){
    var block = blocks[i]
    block.onclick = function(e) {
        var target = e.currentTarget;
        target.classList.toggle('collapse')
    }
}
