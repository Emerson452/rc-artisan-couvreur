import "./index.css";

const Highlights = ({ icon, label, alt }) => {
  return (
    <div className="highlight-item">
      <div className="highlight-content">
        {icon && <img src={icon} alt={alt} />}
        <span className="highlight-text">{label}</span>
      </div>
    </div>
  );
};

export default Highlights;
