import Footer from "../components/footer";
import Header from "../components/header";

function Main() {
  return (
    <div className="page">
      <Header />
      <div className="section section-one">
        <div className="box box-main">
          <div className="container-one">
          </div>
        </div>
      </div>

      <div className="section section-two">
        <div className="box">
          <div className="container-two">
            <div>1</div>
            <div className="block block-content-pink-one">2</div>
          </div>
        </div>
      </div>

      <div className="section section-three"><div className="box">
        <div className="container-two">
          <div className="block block-content-white">3</div>
          <div>4</div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
