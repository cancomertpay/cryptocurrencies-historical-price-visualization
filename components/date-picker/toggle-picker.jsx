import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function TogglePicker({ togglePicker, isPickerOpen }) {
  return (
    <button
      className="absolute top-0 right-40 p-5 bg-primary drop-shadow-custom transition-all hover:pt-10 rounded-b-xl"
      onClick={togglePicker}
    >
      {isPickerOpen ? (
        <FaAngleUp color="black" size={24} />
      ) : (
        <FaAngleDown color="black" size={24} />
      )}
    </button>
  );
}

export default TogglePicker;
