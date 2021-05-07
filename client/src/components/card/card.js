import React from "react";
import { Col, Card } from "react-bootstrap";

import "./card.css";

function WhiteCard({ caption, title, imgUrl }) {
    return (
        <Col md={6}>
            <Card className="card-home">
                <Card.Img
                    className="card-home-img-top"
                    variant="top"
                    src={imgUrl}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{caption}</Card.Text>
                </Card.Body>
            </Card>{" "}
        </Col>
    );
}

export default WhiteCard;
