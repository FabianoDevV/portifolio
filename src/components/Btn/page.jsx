import "./Btn.css";

export default function Btn(props) {
  const { text, color, id } = props;
  return (
    <div className="btn-herocard" style={color}>
      <button id={id} className="btn">
        {text}
        {props.children}
      </button>
    </div>
  );
}
