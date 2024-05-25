import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from './images/image1.webp'
import image2 from './images/image2.jpg'
import image3 from './images/imge3.jpg'

function App() {


  let cardData = [
    { title: "Comfortable Sofa", description: " $80.99 ", image: { image1 } },
    { title: "Elegant Side Table", description: " $80.99 ", image: { image2 } },
    { title: "Classy Padded Chair", description: " $80.99 ", image: { image3 } }
  ]
  let cardsData = [
    { title: "Wooden Shelf", description: " $80.99 ", image: { image1 } },
    { title: "Comfortable Sofa", description: " $80.99 ", image: { image2 } },
    { title: "Classy Chair", description: " $80.99 ", image: { image3 } },
    { title: "Luxuries Bed", description: " $80.99 ", image: "he" },
    { title: "Stylish Lamp", description: " $80.99 ", image: "" },
    { title: "Classy Chair", description: " $80.99 ", image: "" },
    { title: "Stylish Bed", description: " $80.99 ", image: "" },
    { title: "Comfortable Sofa", description: " $80.99 ", image: "" },
    { title: "Stylish Divon", description: " $80.99 ", image: "" }
  ]

  return (




    <div className="App">
      <header className="App-header">

        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand fs-3 " href="#">Furnilux</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5 my-4 " id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item mx-5">
                  <a className="nav-link active" aria-current="page" href="#">Find Designers</a>
                </li>
                <li className="nav-item  text-dark  mx-5">
                  <a className="nav-link" href="#">Inspiration</a>
                </li>
                <li className="nav-item text-dark  mx-5">
                  <a className="nav-link " href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>

                </li>
                <li className="nav-item text-dark mx-5">
                  <a className="nav-link " href="#" aria-disabled="true">Job</a>
                </li>
              </ul>
              <form className="d-flex ">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

                <a className='fs-4 text-decoration-none text-dark ms-2 ' href="/">Login</a>
                <a className='fs-4 text-decoration-none bg-dark text-light rounded-pill ms-2' href="/">SignUp</a>
              </form>
            </div>
          </div>
        </nav>


        <div className="main">
          <h1 className='text-xl-center mt-2 lh-lg ms-5  text-success '>Furnilux  -  Your Brand <br /> For Stylish Living</h1>
          <p className='mt-4 text-xl-center ps-5 ms-5 text-dark'>Discover a fusion of modern design and fuctionality, crafted to elevate every <br /> corner of your living spce. Furnilux redefining stylish living for you</p>
          <button type='button' className='btn rounded-pill mt-4 mb-5 btn-outline-success btn-lg text-center'>Shop Now &rarr; </button>
        </div>
        <h1 className='text-xl-center mt-5 lh-lg ms-5  text-success '>Elevate your Living Room</h1>
        <div className=" continer ">

          <div className="card-container row ">
            {cardData.map((card) => (
              <div className="card col-md-3 mb-4 ms-5 mt-4 me-5 border-0" >
                <img src={card.image.image1} className="card-img-top" alt="" />
                <img src={card.image.image2} className="card-img-top" alt="" />
                <img src={card.image.image3} className="card-img-top" alt="" />

                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>

            ))}

          </div>
        </div>
        <div className="continer">
          <div className="row">
            <div className="col-md-6">
              <h1 className=' position-relative text-succes  top-50 end-25 text-center align-middle'>Luxuries Bed</h1>
              <p className='mt-4 text-xl-center ps-5 ms-5 text-dark position-relative top-50' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis quibusdam doloribus, distinctio rem corporis sit unde impedit veniam deleniti
              </p>
              <button type='button' className='btn rounded-pill mt-0 me5-2 mb-5 btn-outline-dark btn-lg text-center'>Buy Now &rarr; </button>
            </div>
            <div className="col-md-6 bed">
              <img className='mt-0 ' src="https://img.freepik.com/premium-photo/double-bed-isolated-white-background-front-view-classic-furniture-grey-white-bedding-beautiful-bed-luxury-style-3d-rendering_429124-2930.jpg" alt="" />
            </div>
          </div>
          <div className="head">
            <h1 className='text-xl-center mt-5 mb-5 lh-lg ms-5  text-success '>All Products</h1>
          </div>
          <div className="continer">
            <div className="row">
              {cardsData.map((card) => (
                <div className="card col-md-3 mb-4 ps-3 ms-5 mt-4 me-5 border-0">
                  <img src={image1} />




                  <div className="card-body ">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
