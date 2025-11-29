import "./nav.css";

showNav=function () {   
     const div=document.querySelector(".invisible");
    div.className=div.className=="invisible"? "visible":"invisible";
}

export default showNav;
