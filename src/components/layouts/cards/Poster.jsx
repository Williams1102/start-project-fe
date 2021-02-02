import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Poster/cardPoster.css";

import { data } from "./Poster/mockData";
import Slider from "./Poster/SliderImg";

const Poster = () => {
  return (
    <div className="cardPoster">
      <Carousel infiniteLoop showThumbs={false} autoPlay={true}>
        {data.map((o) => (
          <Slider data={o} />
        ))}
      </Carousel>
    </div>
  );
};

export default Poster;
