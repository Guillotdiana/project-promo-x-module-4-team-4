
// import { createRoot } from "https://esm.run/react-dom@18/client";
import confetti from "https://esm.run/canvas-confetti@1";
import { useState } from "react";

function Button() {
    const [liked, setLiked] = useState(false);
  
    function onClick() {
      if (!liked) {
        confetti({
          particleCount: 150,
          spread: 60
        });
      }
      setLiked(!liked);
    }
  
    return (
      <button className="like__button" onClick={onClick}>
        <span>🎉</span>
        <span>{liked ? 'Unlike' : 'Like'}</span>
      </button>
    );
  }
  
  export default Button;


// createRoot(document.getElementById("root")).render(<Button />);
