    window.onload = function(){
        console.log('elgva.js has been loaded!');
        document.querySelector('.vjs-tech').style['z-index'] = 9999999;
        document.querySelector('.vjs-control-bar').style['z-index'] = 9999999;
        document.querySelector('.vjs-tech').play();
        var imgs = document.getElementsByTagName('img');
        var aTags = document.getElementById('lkd16');
        aTags.style.display ='none';
        console.log(aTags)


        // for(let i=0; i<aTags.length;i++){
        //     aTags[i].style.display ='none';
        // }
        if(window.location.href.indexOf('pussl48')>-1){
            console.log('kill ad')
            window.close();
        }
    };


