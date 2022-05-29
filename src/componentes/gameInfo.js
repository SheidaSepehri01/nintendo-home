import React, { useState } from "react";
import "../style/Purchase&Gameinfo.css";

export const GameInfo = () => {
  const [ moreClicked, setClicked] = useState(false);
  return (
    <div className="GameInfo">
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
        onClick={()=> setClicked(true)}
        className={moreClicked ? "hide" : "show"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          role="presentation"
          alt=""
          data-testid="PlusIcon"
          color="currentColor"
          size="24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z"
          ></path>
        </svg>
        <span>Read More..</span>
      </button>
      <div className={moreClicked ? 'show  read-more': 'hide' }>
      <p>
        one to restore Stardew Valley to greatness! Now with Multiplayer! Invite
        1-3 players to join you in the valley! Players can work together to
        build a thriving farm, share resources, and build relationships with
        townspeople or each other. As more hands are better than one, players
        have the option to scale profit margin on produce sold for a more
        challenging experience.
      </p>
      <div className="button-box">
      <button className="exploreTG">
        <a href="/">Explore this game&#39;s official website</a>
      </button>
      </div>
      <button  onClick={()=> setClicked(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="MinusIcon" color="currentColor" size="24"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M0 12h32v8H0z"></path></svg>
      <span>Read less</span></button>
      </div>
      <div className="gamePic">
      <img src={require("../images/hero.png")} />
      </div>
      <div className="ESRB">
        <h6>ESRB Rating</h6>
        <div>
          <p>
            Simulated Gambling, Use of Alcohol, Fantasy Violence, Use of
            Tobacco, Mild Blood, Mild Language
          </p>
        </div>
      </div>
    </div>
  );
};
