import React, {useState} from "react";
import Img1 from "../assets/images/maxence.png";
import Img2 from "../assets/images/maxence-glasses.png";


function ClickablePicture (){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div>
            <img 
                src={clicked ? Img2 : Img1} 
                alt="Clickable" 
                onClick={handleClick}
                style= {{cursor: "pointer"}}
            />

        </div>
);

}

export default ClickablePicture;
