function reload_funt() {
    location.reload();
 }

 // Movement functions
 function move_to_projects(){
    window.location.pathname = "Gallery.html";
  }
 function move_to_game(){
    window.location.pathname = "game.html";
  }
 function move_to_index(){
    window.location.pathname = "index.html";
  }
 function move_to_downloads(){
    window.location.pathname = "Aboutus.html";
  }

function move_to_contact_us(){
    window.location.pathname = "Contactus.html";
}

function toggle_visibility_CV()
{
    var x = document.getElementById("CV_Window");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




//Testing for reusable code.


const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<!--<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css">-->
<!--<link rel="stylesheet" type="text/css" href="general_style.css">-->

<div class="header" >
<!--        <h1> Header - My First Blog on Web Component </h1>-->
<!-- Buttons -->

    <aside>

        <div class="top_bottom_box"></div>


    </aside>

    <!--Main logo-->
    <div class="mySlides fade">
        <div style="padding-left:17px">
<!--        <img src="Images/Logo_Mk2_1.png" style="width:500px; height:200px;">-->
            <img src="Images/Legacy Website Assets/Logo_2.png" style="width:auto; height:130px;">
        </div>
    </div>


    <div class="centering_property">
        <div class="mysquare"></div>
        <button class="btn_2" onclick="move_to_index()">Home</button>
        <button class="btn_2" onclick="move_to_projects()">Projects</button>
        <button class="btn_2" onclick="move_to_contact_us()">Contact Details</button>
<!--        <button class="btn_2" onclick="move_to_downloads()">Downloads</button>-->
<!--        <button class="btn_2" onclick="move_to_game()">Random Games</button>-->
        <div class="mysquare"></div>
    </div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        while (this.childNodes.length > 0) {
            this.shadowRoot.appendChild(this.childNodes[0]);
        }

        const cssFiles = this.getAttribute('css-files');

        if (cssFiles) {
            const arrCssFiles = cssFiles.split(',');

            // for(let i = 0; i < arrCssFiles.length; i++){
            let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', arrCssFiles[0]);
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(headerTemplate.content);
            shadowRoot.appendChild(link);
            // }
        }
    }

    // connectedCallback() {
    //     const shadowRoot = this.attachShadow({ mode: 'open' });
    //     shadowRoot.appendChild(headerTemplate.content);
    // }
}

customElements.define('header-component', Header);



const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<div>
<div class="rail"></div>-->
<footer style="text-align:center">
  <h5> Copyright 2022 - Esteban Segarra -<a href="https://kovant.wordpress.com">Alternate Website Kovant</a> </h5>
</footer>
</div>
`
class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        while (this.childNodes.length > 0) {
            this.shadowRoot.appendChild(this.childNodes[0]);
        }

        const cssFiles = this.getAttribute('css-files');

        if (cssFiles) {
            const arrCssFiles = cssFiles.split(',');
            let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', arrCssFiles[0]);
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(footerTemplate.content);
            shadowRoot.appendChild(link);
        }
    }

}
customElements.define('footer-component', Footer);







function stop() {
       //clearTimeout(animate);
       //imgObj.style.left = '0px';
       //imgObj2.style.left = '0px';
 }

 function stop_at_point(value){
       imgObj.style.left = value.toString() + 'px';
       imgObj2.style.left = value.toString() + 'px';
 }