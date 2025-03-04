const FormGameStart = ({ handleColorSelected }) => {
  return (
    <form className="start-options" onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Pick your color</h2>
        <div className="select-color-container">
          <button
            type="button"
            className="select-color-button select-color-button-white"
            onClick={handleColorSelected}
            value="white"
          >
            White
          </button>
          <button
            type="button"
            className="select-color-button select-color-button-black"
            onClick={handleColorSelected}
            value="black"
          >
            Black
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormGameStart;
