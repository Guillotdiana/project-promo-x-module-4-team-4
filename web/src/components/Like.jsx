
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

function Like({ onLike }) {
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

    if (onLike) onLike();
  }

  function onClick() {
    if (!liked) {
      shoot();
    }
    setLiked(!liked);
  }

  return (
    <button className="like__button" onClick={onClick}>
      <span>📖</span>
      <span>{liked ? 'Unlike' : 'Like'}</span>
    </button>
  );
}

export default Like;






