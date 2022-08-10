import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/Purchase&Gameinfo.css";
import { motion } from "framer-motion";

export const Purchase = () => {
  const [clicked, setClicked] = useState(false);
  const [Hover, setHover] = useState(false);
  console.log(Hover);
  return (
    <div className="Purchase">
      <span>Nintendo Switch</span>
      <div className="p-info">
        <Row>
          <Col>
            <h3>Stardew Vally</h3>
          </Col>
          <Col>
            <div className="price">
              <p>$14.99</p>
              <button onClick={() => setClicked(clicked ? false : true)}>
                <svg
                  viewBox="0 0 54 54"
                  fill="currentColor"
                  stroke="currentColor"
                  width="24"
                  role="presentation"
                  alt=""
                  data-testid="heartspark"
                  color="currentColor"
                  size="24"
                >
                  <g className="hearts">
                    <path
                      className="heart heart-outline"
                      d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"
                    ></path>
                    <path
                      className={ clicked ?"heart heart-filled":''}
                      fillRule="currentColor"
                      d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"
                    ></path>
                  </g>
                  <g className={clicked ?"sparks":''}>
                    <path
                      className="spark"
                      d="M27 8V0M27 46v8"
                      stroke-width="2"
                    ></path>
                    <path
                      className="spark"
                      d="M41.171 12.828l5.657-5.657M12.829 12.828L7.171 7.172"
                      stroke-width="1.99998"
                    ></path>
                    <path
                      className="spark"
                      d="M46 27h8M8 27H0"
                      stroke-width="2"
                    ></path>
                    <path
                      class="spark"
                      d="M41.172 41.172l5.657 5.656M12.829 41.171l-5.657 5.657"
                      stroke-width="1.99998"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </Col>
          <Col>
            <div className="points">
              <img
                className="gold-coin"
                src={require("../images/my-nintendo-gold-coin.avif")}
                alt="gold coin"
              />
              <p>Eligible for up to 75 Gold Points</p>
            </div>
          </Col>
          <Col className="downloadCol">
            <motion.button
              animate={{
                x: 0,
                y: 0,
                scale: Hover ? 1.03 : 1,
                rotate: 0,
              }}
              transition={{
                ease: "easeInOut",
                repeat: Hover?1:0,
                repeatDelay:.4,

              }}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="download"
              type="download"
            >
              <a href="#">
                <img src={require("../images/icons/download.svg").default} alt="download" />
                Direct download
              </a>
            </motion.button>
          </Col>
          <Col>
            <p>
              This item will be sent to your system automatically after
              purchase.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
