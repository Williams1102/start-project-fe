import { Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cardPoster.css";

const Poster = () => {
  return (
    <div className="cardPoster">
      <Card className="bg-dark text-white">
        <div>
          <Carousel infiniteLoop showThumbs={false} autoPlay={true}>
            <div>
              <Card.Img
                className="heightImg"
                src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUjXrSYg8i-JAp7k-0lvtyLdu7HI0n6fpy0QIysrygazy5S_P3aeOnxiNpMY1KiejecGY2oPlV6GQ77avvZ5w-oyY-B6.jpg?r=b50"
                alt="Card image"
              />
              <Card.ImgOverlay className="bgcl-40  d-flex justify-content-center flex-wrap align-content-center p-0">
                <div className="col-sm-5">
                  <Card.Body>
                    <Card.Title>Ten Film</Card.Title>
                    <Card.Text>Last updated</Card.Text>

                    <button class="btn btnPlay">
                      <span class="fas fa-play pr-2" aria-hidden="true"></span>
                      Play
                    </button>
                    <button class="btn btnInfo  ml-3">
                      <span class="fas fa-info-circle pr-2" aria-hidden="true"></span>
                      More info
                    </button>
                  </Card.Body>
                </div>
                <div className="col-sm-7"></div>
              </Card.ImgOverlay>
            </div>

            <div>
              <Card.Img
                className="heightImg"
                src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfJtcMO6GSn_vtXtm4nkYoqaE_HJZ_tJvdF_7jwcK8l_w72bzHzfn8OR8xoKP3wfiL9uU1RIHFNC-bMKoAs4H1zAbUGb.jpg?r=5a8"
                alt="Card image"
              />
              <Card.ImgOverlay className="bgcl-40  d-flex justify-content-center flex-wrap align-content-center p-0">
                <div className="col-sm-5">
                  <Card.Body>
                    <Card.Title>Ten Film</Card.Title>
                    <Card.Text>
                      In this action-packed follow-up to XXX, U.S. intelligence officer Augustus Gibbons must thwart a
                      massive conspiracy to overthrow the government.
                    </Card.Text>
                    <>
                      <button class="btn btnPlay">
                        <span class="fas fa-play pr-2" aria-hidden="true"></span>
                        Play
                      </button>
                      <button class="btn btnInfo  ml-3">
                        <span class="fas fa-info-circle pr-2" aria-hidden="true"></span>
                        More info
                      </button>
                    </>
                  </Card.Body>
                </div>
                <div className="col-sm-7"></div>
              </Card.ImgOverlay>
            </div>

            <div>
              <Card.Img
                className="heightImg"
                src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWpZOaLReJYfI23TQnJDqq_hSvEdp2f3Pya0pfOjEtGzP9me9eygrFJXQ_Lf7SlnYlpQwXbU5fRBzWvHoqoUlY-tqdHh.jpg?r=0a6"
                alt="Card image"
              />
              <Card.ImgOverlay className="bgcl-40  d-flex justify-content-center flex-wrap align-content-center p-0">
                <div className="col-sm-5">
                  <Card.Body>
                    <Card.Title>Ten Film</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>

                    <button class="btn btnPlay ">
                      <span class="fas fa-play pr-2" aria-hidden="true"></span>
                      Play
                    </button>
                    <button class="btn btnInfo  ml-3">
                      <span class="fas fa-info-circle pr-2" aria-hidden="true"></span>
                      More info
                    </button>
                  </Card.Body>
                </div>
                <div className="col-sm-7"></div>
              </Card.ImgOverlay>
            </div>
          </Carousel>
        </div>
      </Card>
    </div>
  );
};

export default Poster;
