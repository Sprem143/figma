import "./Home.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Home() {
  const rate=(id,rating)=>{
    for(let i=1;i<=rating;i++){
      console.log(`${id+rating}`)
      document.getElementById(`${id+i}`).style.fill="yellow"
    }
  }
  return (
    <div className="container-fluid home-page mt-2">
      {/* ----------card 1 ------------ */}
      <div className="card-container mb-2">
        <div className="crd">
          <div className="section1">
            {/* -----------label for card------------ */}
            <div className="lbl dfdc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-trophy"
                viewBox="0 0 16 16"
              >
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
              </svg>
              <p style={{ fontSize: "small" }}>Best Choice</p>
            </div>
            {/* ---------photo and serial number */}
            <div className="img-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-1-circle mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
              </svg>
              <img src="/static/computer.jpg" alt="" width="80%" />
            </div>
          </div>
          <div className="section2 p-3">
            <b>Wixpro 72-inch Responsive Website Builder - </b>{" "}
            <span>
              Comprehensive Digital platform creation TOol, Streamlined design
              interface for professional websites and online stores
              (Black/white)
            </span>
            <h5 className="mt-3">Main Highlights</h5>
            <p className="ms-4">
              [What you get]: Receive the Wixpro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailsed step by step guides
            </p>
            <p><a href="">see more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg></a></p>
          </div>
          <div className="section3">
            <div className="ps-2 pe-3 pb-2 bgblue">
            <p style={{ fontSize: "4rem" }}>9.8</p>
            <p>Exceptional</p>
            <div className="d-flex justify-content-between">
            
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('p',1)} id="p1" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('p',2)} id="p2" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('p',3)} id="p3" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('p',4)} id="p4" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('p',5)} id="p5" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
             
            </div>
            </div>
            <button className="mt-4 btn bg-primary ps-4 pe-4 btn-primary">view</button>
          </div>
        </div>
      </div>
{/* -----------card 2------------- */}
      <div className="card-container mb-2">
        <div className="crd">
          <div className="section1">
            {/* -----------label for card------------ */}
            <div className="lbl dfdc">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
</svg>
              <p style={{ fontSize: "small" }}>Best Value</p>
            </div>
            {/* ---------photo and serial number */}
            <div className="img-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-1-circle mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
              </svg>
              <img src="/static/computer.jpg" alt="" width="80%" />
            </div>
          </div>
          <div className="section2 p-3">
            <b>Wixpro 72-inch Responsive Website Builder - </b>{" "}
            <span>
              Comprehensive Digital platform creation TOol, Streamlined design
              interface for professional websites and online stores
              (Black/white)
            </span>
            <h5 className="mt-3">Main Highlights</h5>
            <p className="ms-4">
              [What you get]: Receive the Wixpro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailsed step by step guides
            </p>
            <p><a href="">see more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg></a></p>
          </div>
          <div className="section3">
            <div className="ps-2 pe-3 pb-2 bgblue">
            <p style={{ fontSize: "4rem" }}>9.8</p>
            <p>Exceptional</p>
            <div className="d-flex justify-content-between">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('q',1)} id="q1" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('q',2)} id="q2" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('q',3)} id="q3" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('q',4)} id="q4" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('q',5)} id="q5" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            </div>
            <button className="mt-4 btn bg-primary ps-4 pe-4 btn-primary">view</button>
          </div>
        </div>
      </div>
      {/* ---------------card 3--------------- */}
      <div className="card-container mb-2">
        <div className="crd">
          <div className="section1">
           
            <div className="img-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-1-circle mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
              </svg>
              <img src="/static/computer.jpg" alt="" width="80%" />
            </div>
          </div>
          <div className="section2 p-3">
            <b>Wixpro 72-inch Responsive Website Builder - </b>{" "}
            <span>
              Comprehensive Digital platform creation TOol, Streamlined design
              interface for professional websites and online stores
              (Black/white)
            </span>
            <h5 className="mt-3">Main Highlights</h5>
            <p className="ms-4">
              [What you get]: Receive the Wixpro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailsed step by step guides
            </p>
            <p><a href="">see more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg></a></p>
          </div>
          <div className="section3">
            <div className="ps-2 pe-3 pb-2 bgblue">
            <p style={{ fontSize: "4rem" }}>9.3</p>
            <p>Exceptional</p>
            <div className="d-flex justify-content-between">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('r',1)} id="r1" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('r',2)} id="r2" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('r',3)} id="r3" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('r',4)} id="r4" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('r',5)} id="r5" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            </div>
            <button className="mt-4 btn bg-primary ps-4 pe-4 btn-primary">view</button>
          </div>
        </div>
      </div>

      {/* -------card 4--------- */}

      <div className="card-container mb-2">
        <div className="crd">
          <div className="section1">
            {/* ---------photo and serial number */}
            <div className="img-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-1-circle mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
              </svg>
              <img src="/static/computer.jpg" alt="" width="80%" />
            </div>
          </div>
          <div className="section2 p-3">
            <b>CDK Responsive Builder - </b>
            <span>
             An Extensive library of widgets and apps, and detailed step by step guides.
            </span>
            <p className="offer">20% off</p>
            <h5 className="mt-3">Main Highlights</h5>

            <div className="bgylow">
            <p className="ms-4 ">
             
              <li className="d-flex m-1"><span className="offer rate me-3">9.9</span> Buliding Responsive</li>
              <li className="d-flex m-1"><span className="offer rate me-3">8.9</span> Cool</li>
              <li className="d-flex m-1"><span className="offer  me-3">8.9</span> Docs</li>
            </p>
           
            </div>
            <p>Why we love it</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" me-2 bi bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>Documentation</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" me-2 bi bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>Easy Use</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" me-2 bi bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>Out of Box</p>
            <p><a href="">see more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg></a></p>
          </div>
          <div className="section3">
            <div className="ps-2 pe-3 pb-2 bgblue">
            <p style={{ fontSize: "4rem" }}>9.1</p>
            <p>Exceptional</p>
            <div className="d-flex justify-content-between">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('s',1)} id="s1" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('s',2)} id="s2" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('s',3)} id="s3" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('s',4)} id="s4" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>rate('s',5)} id="s5" width="16" height="16" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            </div>
            <button className="mt-4 btn bg-primary ps-4 pe-4 btn-primary">view</button>
          </div>
        </div>
      </div>
<h4>Related deals you might like for</h4>
<div className="mdl">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="static/computer.jpg" />
      <Card.Body>
        <div className="d-flex">
          <p className="offer dc me-2 ps-2 pe-2">20% off</p>
          <p className="offer dc ps-2 pe-2">Limited time</p>
        </div>
        <Card.Title className="text-center">Webbuilder 1</Card.Title>
        <Card.Text>
        Computer modern classic with wix support
        <p><span className="me-2" style={{fontSize:"large"}}>$39.96</span><span className="discount">$49.96</span> <span className="text-danger fs-6">(20% off)</span></p>
        </Card.Text>
        <button type="button" class="btn btn-primary">View Deal</button>   
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="static/computer.jpg" />
      <Card.Body>
        <div className="d-flex">
          <p className="offer dc me-2 ps-2 pe-2">20% off</p>
          <p className="offer dc ps-2 pe-2">Limited time</p>
        </div>
        <Card.Title className="text-center">Webbuilder 1</Card.Title>
        <Card.Text>
        Computer modern classic with wix support
        <p><span className="me-2" style={{fontSize:"large"}}>$39.96</span><span className="discount">$49.96</span> <span className="text-danger fs-6">(20% off)</span></p>
        </Card.Text>
        <button type="button" class="btn btn-primary">View Deal</button>   
           </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="static/computer.jpg" />
      <Card.Body>
        <div className="d-flex">
          <p className="offer dc me-2 ps-2 pe-2">20% off</p>
          <p className="offer dc ps-2 pe-2">Limited time</p>
        </div>
        <Card.Title className="text-center">Webbuilder 1</Card.Title>
        <Card.Text>
        Computer modern classic with wix support
        <p><span className="me-2" style={{fontSize:"large"}}>$39.96</span><span className="discount">$49.96</span> <span className="text-danger fs-6">(20% off)</span></p>
        </Card.Text>
        <button type="button" class="btn btn-primary">View Deal</button>      </Card.Body>
    </Card>
   
    
</div>
<div className="dfdc justify-content-between m-3 su">
  <p className="fs-4">Sign up and get exclusive special deals</p>
  <div className="searchBox sb2">
          <input className="box" type="text"  />
          <button className="search signup">
            Sign Up
          </button>
        </div>
</div>
    </div>
  );
}
