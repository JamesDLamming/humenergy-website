const DefaultButton = ({ onClick, type, submittedStyle, ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 bg-accent text-white font-semibold rounded-md hover:shadow-lg hover:bg-opacity-80   ${props.className} ${submittedStyle} `}
    >
      {props.children}
    </button>
  );
};

export default DefaultButton;
