import "./App.css";
import FeaturesImg from "./FeaturesImg";

function App() {
  const featuresImg = [
    "./featuresImg/techcrunch.png",
    "./featuresImg/business-insider.png",
    "./featuresImg/the-new-york-times.png",
    "./featuresImg/forbes.png",
    "./featuresImg/usa-today.png",
  ];
  return (
    <>
      <nav className="!mx-auto !my-[2rem] flex justify-between max-w-[120rem]">
        <div className="text-[2.2rem] font-medium flex items-center justify-center gap-[15px]">
          <ion-icon name="bag-outline" class="w-[24px] h-[24px]"></ion-icon>
          <span>X Shopper's Dream</span>
        </div>

        <div className="flex align-center justify-center gap-[15px]">
          <a href="#" className="text-[1.6rem] underline decoration-[#d946ef]">
            Home
          </a>
          <a href="#" className="text-[1.6rem] ">
            Products
          </a>
        </div>

        <div className="relative text-[2rem] flex justify-center items-start gap-[5px]">
          <span className="text-[1.8rem]">Cart</span>
          <ion-icon name="bag-outline" className="w-[24px] h-[24px]"></ion-icon>
          <div className="text-[14px] padding-[2px] bg-[#d946ef] text-white w-[2rem] h-[2rem] flex justify-center items-center rounded-[222px] absolute -top-[px] -right-[8px]">
            0
          </div>
        </div>
      </nav>

      <section className="grid grid-cols-2 justify-center place-items-center !mx-auto my-12 max-w-[1200px]">
        <div className="flex flex-col gap-[2rem] justify-start">
          <h1 className="text-[4.8rem] leading-[6.7rem] font-bold text-[#404040] text-left">
            Furniture design to <br></br> make you feel at home
          </h1>
          <p className="text-[2.4rem] tracking-[0.5px] font-medium text-left">
            Create your perfect space with our designs.
          </p>
          <div className="btn-cont">
            <button className="btn explore-btn">Explore products</button>
            <button className="btn more-btn">Learn more &darr;</button>
          </div>
        </div>
        <div className="heading-section-img">
          <img className="heading-img" src="./heroImg.png" />
        </div>
      </section>

      <footer className=" border-b-[2px] border-b-[#d5d5d5]">
        <div className="!py-[12rem] !mx-auto flex flex-col gap-[30px] max-w-[120rem]">
          <p className="text-[1.4rem] text-gray-500 uppercase font-semibold">
            As featured in
          </p>
          <div className=" flex justify-between ">
            {featuresImg.map((img, index) => (
              <FeaturesImg key={index} image={img} />
            ))}
          </div>
        </div>
      </footer>

      <section className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]">
        <div className="max-w-[120rem] !mx-auto">
          <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium ">
            Featured products
          </p>
          <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
            The art of modern living unlocked.
          </h1>

          <div className="some-products">
            <div className="single-product">
              <img className="h-[25rem]" src="./product-15.jpeg" />
              <div className="flex justify-between">
                <span className="text-[#444] font-semibold text-[1.6rem]">
                  Sofa Set
                </span>
                <span className="text-[#d946ef] text-[1.6rem] font-semibold">
                  $1,299.99
                </span>
              </div>
            </div>
            <div className="single-product">
              <img className="h-[25rem]" src="./product-16.jpeg" />
              <div className="flex justify-between">
                <span className="text-[#444] font-semibold text-[1.6rem]">
                  Suede Armchair
                </span>
                <span className="text-[#d946ef] text-[1.6rem] font-semibold">
                  $159.99
                </span>
              </div>
            </div>
            <div className="single-product">
              <img className="h-[25rem]" src="./product-17.jpeg" />
              <div className="flex justify-between">
                <span className="text-[#444] font-semibold text-[1.6rem]">
                  Utopia Sofa
                </span>
                <span className="text-[#d946ef] text-[1.6rem] font-semibold">
                  $799.99
                </span>
              </div>
            </div>
          </div>
          <button className="btn explore-btn">All Products</button>
        </div>
      </section>

      <section className="section_3">
        <p>Creeds we live by</p>
        <h1>
          Elevate your home with our attitude of excellence and timeless style.
        </h1>

        <div className="descriptions">
          <div className="single-description">
            <ion-icon name="sparkles-outline"></ion-icon>
            <p>Radiance</p>
            <p>
              Our commitment to providing sparkling solutions ensures every
              customer enjoys a shining, glowing experience with unmatched
              quality.
            </p>
          </div>
          <div className="single-description">
            <ion-icon name="eye-outline"></ion-icon>
            <p>Clarity</p>
            <p>
              With clear vision and keen insight, we guide customers down the
              path to lasting success with exceptional service and anticipation.
            </p>
          </div>
          <div className="single-description">
            <ion-icon name="document-outline"></ion-icon>
            <p>Heritage</p>
            <p>
              As a trusted partner, we offer expert guidance, drawing on our
              deep wisdom and wealth of experience to ensure satisfaction and
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="section_3">
        <p>Operations</p>
        <h1>Where simplicity meets efficiency to bring your home to life.</h1>
      </section>
    </>
  );
}

export default App;
