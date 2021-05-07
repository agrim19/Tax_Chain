import React from "react";
import NavigationBar from "../../components/navbar/navbar.js";
import Slider from "../../components/carousel/carousel.js";
import WhiteCard from "../../components/card/card.js";
import Footer from "../../components/footer/footer.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDiceD20 } from "@fortawesome/free-solid-svg-icons";

import "./home.css";

function Home() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="black-bg">
                <Container className="img">
                    <Row>
                        <Col>
                            <Slider></Slider>
                        </Col>
                    </Row>
                    <Row className="row-2">
                        <Col md={6}>
                            <p className="white-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco
                            </p>
                            <p className="bold-green">
                                GET STARTED
                                <FontAwesomeIcon
                                    className="icon-arrow"
                                    icon={faArrowRight}
                                />
                            </p>
                        </Col>
                        <Col md={6}>
                            <FontAwesomeIcon
                                className="icon-big"
                                icon={faDiceD20}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="white-bg">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h3 className="grey">Lorem ipsum</h3>
                            <h3 className="heading">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit
                            </h3>
                        </Col>
                        <Col md={7}></Col>
                        <WhiteCard
                            caption="Some quick example text to build on the
                        card title and make up the bulk of the
                        card's content."
                            title="Citizen"
                            imgUrl="https://image.freepik.com/free-vector/group-young-people-waving-hand_23-2148361692.jpg"
                        ></WhiteCard>
                        <WhiteCard
                            caption="Some quick example text to build on the
                        card title and make up the bulk of the
                        card's content."
                            title="Government"
                            imgUrl="https://image.freepik.com/free-vector/us-supreme-court-building-flat-vector-illustration_82574-4466.jpg"
                        ></WhiteCard>
                        <WhiteCard
                            caption="Some quick example text to build on the
                        card title and make up the bulk of the
                        card's content."
                            title="Local Government Bodies"
                            imgUrl="https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/05/leadership-640x400-c-default.jpg"
                        ></WhiteCard>
                        <WhiteCard
                            caption="Some quick example text to build on the
                        card title and make up the bulk of the
                        card's content."
                            title="Contractors"
                            imgUrl="https://image.freepik.com/free-vector/engineers-team-discussing-issues-construction-site_74855-4786.jpg"
                        ></WhiteCard>
                        <Col>
                            <Button size="lg" className="button-green">
                                Login
                            </Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
