const BoutonUn = (props) => {
  return (
    <button onClick={() => props.onSelect(props.price)}>
      Grand Autonomie - {props.price}
    </button>
  );
};

export default BoutonUn;
