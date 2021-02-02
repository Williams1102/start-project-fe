import React from "react";
import { Card } from "react-bootstrap";
export default function Slider(props) {
  const { url, filmName, description } = props.data;

  return (
    <Card className="bg-dark text-white">
      <Card.Img className=" heightImg" src={url} alt="Card image" />
      <Card.ImgOverlay className="bgcl-40  d-flex justify-content-center flex-wrap align-content-center p-0">
        <div className="col-sm-5">
          <Card.Body>
            <Card.Title>{filmName} </Card.Title>
            <Card.Text>{description} </Card.Text>

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
    </Card>
  );
}
