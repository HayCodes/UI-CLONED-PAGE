function menuFunc(){
    var menu = document.getElementById("menu");
    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function readMoreFunc(){
    var p = document.getElementById("hidden");
    var btn = document.getElementById('button');
    if(p.style.display === 'flex'){
        p.style.display = 'none';
        btn.innerHTML = 'READ MORE';
    } else{
        p.style.display = 'flex';
        btn.innerHTML = 'READ LESS';
    }
}