const FormGameStart = ({
  handleSubmit,
  handleChangeWhitePlayer,
  handleChangeBlackPlayer,
}) => {
  return (
    <form className="start-options">
      <div>
        <label htmlFor="white-player">
          White Player
          <input
            onChange={handleChangeWhitePlayer}
            className="name-player"
            type="text"
            name="white-player"
          />
        </label>
        <label htmlFor="black-player">
          Black Player
          <input
            onChange={handleChangeBlackPlayer}
            className="name-player"
            type="text"
            name="black-player"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Start
        </button>
      </div>
    </form>
  );
};

export default FormGameStart;
