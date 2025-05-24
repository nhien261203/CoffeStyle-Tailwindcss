// alert('oke')

const topMenu = document.getElementById('top-menu');
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon');

// ta bat su kien cho outside,boi vi bam ra ngoai cung an menu vao trong
//e.target: click vao dau cung chua toggleTopMenuIcon
document.addEventListener('click', (e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        // click to toggleTopMenuIcon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('top-menu-expanded')
    }else {
        //click outside from toggleTopMenuIcon
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
        }
        
    }
})