function MyButton({ text, clickEvent, btnType }) {
  return (
    <button onClick={clickEvent} className={`${btnType} btn`}>
      {text}
    </button>
  );
}

export default MyButton;
