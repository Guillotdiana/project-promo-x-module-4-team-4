
import { useState } from "react";
import confetti from "https://esm.run/canvas-confetti@1";

const scalar = 2;
const unicorn = confetti.shapeFromText({ text: '📖', scalar });

const defaults = {
  spread: 1000,
  ticks: 60,
  gravity: 1,
  decay: 0.9,
  startVelocity: 20,
  shapes: [unicorn],
  scalar,
  origin: { y: 0.3 }
};

function Button() {
  const [liked, setLiked] = useState(false);

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 80
    });

    confetti({
      ...defaults,
      particleCount: 30,
      flat: true
    });

    // confetti({
    //   ...defaults,
    //   particleCount: 15,
    //   scalar: scalar / 2,
    //   shapes: ['circle']
    // });
  }

  function onClick() {
    if (!liked) {
      shoot(); // Llamar a la función shoot para mostrar los emojis de unicornio
    }
    setLiked(!liked);
  }

  return (
    <button className="like__button" onClick={onClick}>
      <span>📖</span> {/* Cambiado el emoji en el botón */}
      <span>{liked ? 'Unlike' : 'Like'}</span>
    </button>
  );
}

export default Button;







// // import { createRoot } from "https://esm.run/react-dom@18/client";
// import confetti from "https://esm.run/canvas-confetti@1";
// import { useState } from "react";

// function Button() {
//     const [liked, setLiked] = useState(false);

  
//     function onClick() {
//       if (!liked) {
//         confetti({
//           particleCount: 150,
//           spread: 60
//         });
//       }
//       setLiked(!liked);
//     }
  
//     return (
//       <button className="like__button" onClick={onClick}>
//         <span>🎉</span>
//         <span>{liked ? 'Unlike' : 'Like'}</span>
//       </button>
//     );
//   }
  
//   export default Button;


// // createRoot(document.getElementById("root")).render(<Button />);
