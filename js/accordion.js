/**
 * Created by vasyl on 1/26/17.
 */
console.log('Hello world');
(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
             to highlight the button that controls the panel */
            this.classList.toggle("active");
            console.log(this.lastChild);
            this.lastChild.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
})();