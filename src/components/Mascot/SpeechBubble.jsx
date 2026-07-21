import "./SpeechBubble.css";

function SpeechBubble({ message }) {
  if (!message) return null;

  return (
    <div className="speech-bubble">
      {message}
    </div>
  );
}

export default SpeechBubble;