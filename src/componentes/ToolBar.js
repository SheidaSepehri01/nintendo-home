import React ,{useState} from "react";
import "../style/main.css";
import { TMenu } from "./toolbar-menu";
export const ToolBar = (props) => {
  const[Clicked,setClicked]=useState(false)
 
 
  return (
    <div className="Toolbar">
      <div className="toolbar-box">

        <button onClick={()=>{props.childToParent(true)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            space="preserve"
            width="24"
            role="presentation"
            alt=""
            data-testid="HamburgerMenuIcon"
            color="currentColor"
            size="24"
          >
            <path
              fill="currentColor"
              d="M0 12.8h32v6.4H0zM0 24h32v6.4H0zM0 1.6h32V8H0z"
            ></path>
          </svg>
          
        </button>
        <div className={ Clicked ? 'show' : 'hide'} onClick={()=>{setClicked(false)}}>
      </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            role="presentation"
            alt=""
            data-testid="HeartIcon"
            color="currentColor"
            size="24"
          >
            <path
              d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      
        <button className="search">
          <svg
            data-name="Magnifying glass"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            role="presentation"
            alt=""
            data-testid="MagnifyingGlassIcon"
            size="32"
            color="currentColor"
          >
            <path
              d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      
        <button>
          <svg
            data-name="Shopping cart"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="20"
            role="presentation"
            alt=""
            data-testid="ShoppingCartIcon"
            size="20"
            color="currentColor"
          >
            <path
              fill="currentColor"
              d="M23.12 28.073a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326zm2.397-7.29a1.728 1.728 0 0 0 1.498-.982l4.844-11.686a1.544 1.544 0 0 0-.15-1.551 1.593 1.593 0 0 0-1.349-.673H8.44l-.55-2.895A1.494 1.494 0 0 0 6.393 1.6H1.598A1.606 1.606 0 0 0 0 3.255a1.548 1.548 0 0 0 1.598 1.654h3.496L7.49 18.973l-1.098 4.706a1.67 1.67 0 0 0 .25 1.395 1.529 1.529 0 0 0 1.198.673h18.675a1.656 1.656 0 0 0 0-3.31H9.937l.4-1.654zm-18.726 7.29a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326z"
            ></path>
          </svg>
        </button>
      
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            role="presentation"
            alt=""
            data-testid="UserIcon"
            color="currentColor"
            size="24"
          >
            <path
              d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
