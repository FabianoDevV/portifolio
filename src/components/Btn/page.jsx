import "./Btn.css";

export default function Btn({ text, color, id }) {
  return (
    <button id={id} style={color} className="btn">
      {text}
    </button>
  );
}
