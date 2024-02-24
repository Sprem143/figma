
import "./Footer.scss"
export default function Footer(){
    return(
        <div className="container-fluid footer d-flex justify-content-evenly p-3">
 <div>
   <h6>CATEGORIES</h6> 
   <p>Web Builder</p>
   <p>Hosting</p>
   <p>Data Center</p>
   <p>Robotic-Automation</p>
 </div>
 <div>
   <h6>CONTACT</h6> 
<p>Contact</p>
<p>Privacy Policy</p>
<p>Terms of Service</p>
<p>Categories</p>
<p>about</p>
 </div>
 <div>United States<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></div>
        </div>
    )
}