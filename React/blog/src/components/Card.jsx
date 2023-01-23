import Page from "./Page";

export default function Card({ image, title }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} onClick={<Page />} alt={title} />
      </div>
      <div className="card-body">{title}</div>
    </div>
  );
}
