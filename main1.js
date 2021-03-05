const tabs = document.getElementById('tabs'),
      content = document.querySelectorAll('.content'),
      tabs1 = document.getElementById('tabs1'),
      content1 = document.querySelectorAll('.content1');
      
const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab ){
            content[i].classList.add('active');
        }
    }
})

const changeClass1 = ell => {
    for (let i = 0; i < tabs1.children.length; i++){
        tabs1.children[i].classList.remove('active');
    }
    ell.classList.add('active');
}

tabs1.addEventListener('click', e1 => {
    const currTab1 = e1.target.dataset.btn1;
    changeClass1(e1.target);
    for (let i = 0; i < content1.length; i++){
        content1[i].classList.remove('active');
        if(content1[i].dataset.content1 === currTab1 ){
            content1[i].classList.add('active');
        }
    }
})



