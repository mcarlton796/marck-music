function dick(){
    let marck=document.querySelector('#content');
    let links=document.querySelector('#links');
    let socials=document.querySelector('#socials');
    let albums=document.querySelector('#albums');
    if (marck.classList.contains('name')){
        marck.classList.remove('name');
        marck.classList.add('name-altered');
        links.classList.remove('links');
        links.classList.add('links-altered')
    }
    else if (marck.classList.contains('name-altered')){
        if (socials.classList.contains('socials-altered')){
            social();
        }
        if (albums.classList.contains('albums-expanded')){
            music();
        }
        marck.classList.remove('name-altered');
        marck.classList.add('name');
        links.classList.remove('links-altered');
        links.classList.add('links')
    }
}

function social(){
    let svgs=document.querySelector('#svgs');
    let socials=document.querySelector('#socials');
    let music=document.querySelector('#music');
    let albums=document.querySelector('#albums');

    if (socials.classList.contains('socials')){
        music.classList.remove('music');
        music.classList.add('music-moved');
        svgs.classList.remove('svgs');
        svgs.classList.add('svgs-altered');
        socials.classList.remove('socials');
        socials.classList.add('socials-altered');
    }
    else if (socials.classList.contains('socials-altered')){
        svgs.classList.remove('svgs-altered');
        svgs.classList.add('svgs');
        socials.classList.remove('socials-altered');
        socials.classList.add('socials');
        music.classList.remove('music-moved');
        music.classList.add('music');
    }
}

function music(){
    let albums=document.querySelector('#albums');
    if (albums.classList.contains('albums')){
        albums.classList.remove('albums');
        albums.classList.add('albums-expanded');
    } else if (albums.classList.contains('albums-expanded')){
        albums.classList.remove('albums-expanded');
        albums.classList.add('albums');
    }
}

function album(album_id){
    let albums=document.querySelector('#albums');
    const hash = "#";
    const expand = album_id + "_expanded";
    let release=document.querySelector(hash.concat("",album_id));
    if(release.classList.contains(album_id)){
        release.classList.remove(album_id);
        release.classList.add(expand);
    }else if(release.classList.contains(expand)){
        release.classList.remove(expand);
        release.classList.add(album_id);
    }
}