function SubmitButton({ onClick }) {
  return (
    <button
      className="min-w-[200px] min-h-[60px] bg-primary hover:bg-primary/50 drop-shadow-custom transition-colors ease-in-out duration-300 text-gray-900 font-bold rounded-md"
      onClick={onClick}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
