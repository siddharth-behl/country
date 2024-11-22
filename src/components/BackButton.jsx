

export default function BackButton() {
  return (
    <button className="back-button" onClick={() => history.back()}>
      <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
    </button>
  );
}

