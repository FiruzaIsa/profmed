$(document).ready(function(){
  $(window).on("load",function(){
    if($(window).width()<576){
        $(".circ-bck-line").appendTo(".imp-man");
        $(".ellipse:last-of-type").appendTo(".imp-man");
        $(".imp-man .ellipse").css({"position": "absolute","top":"68%","left":"32%"});
        $(".imp-man").css({"position":"relative"});
        $(".respo-circ").removeClass();
        }
  });
    
});
