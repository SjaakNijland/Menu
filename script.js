var scrollvalue;
var eindPositie = 0;
var Menubalk = $('nav');
var menuHeight = Menubalk.outerHeight();


function verschuif(){
    
    scrollvalue = $(this).scrollTop();
    if(scrollvalue>eindPositie){
        //er word naar beneden gescrollt
        //console.log('er word naar beneden gescrollt');
        eindPositie=scrollvalue;
        Menubalk.css('top',-menuHeight + 'px');
        
    
    }else{
        //er word naar boven gescrollt
        // console.log('er word naar boven gescrollt');
        eind=scrollvalue;
       Menubalk.css('top','0px');
        
    }
    
    
}

$(window).on('scroll', verschuif);