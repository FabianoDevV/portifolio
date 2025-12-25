import "./InforSection.css";
export default function InforSection({ title, descript }) {
  return (
    <div className="infor-section">
      <h2>{title}</h2>
      <p>{descript}</p>
    </div>
  );
}
