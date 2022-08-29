import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Purchase&Gameinfo.css";

export const GameInfo = () => {
  const [moreClicked, setClicked] = useState(false);
  const [Hover, setHover] = useState(false);
  return (
    <div className="GameInfo">
      <div className="text">
      <p>
        You&#44;ve inherited your grandfather&#44;s old farm plot in Stardew
        Valley. Armed with hand-me-down tools and a few coins, you set out to
        begin your new life. Can you learn to live off the land and turn these
        overgrown fields into a thriving home? It won&#44;t be easy. Ever since
        Joja Corporation came to town, the old ways of life have all but
        disappeared. The community center, once the town&#44;s most vibrant hub
        of activity, now lies in shambles. But the valley seems full of
        opportunity. With a little dedication, you might just be the
      </p>
      <button
        onClick={() => setClicked(true)}
        className={moreClicked ? "hide" : "show"}
      >

        <img
          src={require("../../images/icons/plus.svg").default}
          alt="read more"
        />
        <span> Read More..</span>
      </button>
      <div className={moreClicked ? "show  read-more" : "hide"}>
        <p>
          one to restore Stardew Valley to greatness! Now with Multiplayer!
          Invite 1-3 players to join you in the valley! Players can work
          together to build a thriving farm, share resources, and build
          relationships with townspeople or each other. As more hands are better
          than one, players have the option to scale profit margin on produce
          sold for a more challenging experience.
        </p>
        <div className="button-box">
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
              
           className="exploreTG">
            <a href="/">Explore this game&#39;s official website</a>
          </motion.button>
        </div>
        <button onClick={() => setClicked(false)}>
        <img
          src={require("../../images/icons/minus.svg").default}
          alt="read less"
        />
          <span> Read less</span>
        </button>
      </div>
      </div>
      <div className="gamePic">
        <img src={require("../../images/hero.png")} />
      </div>
    </div>
  );
};
