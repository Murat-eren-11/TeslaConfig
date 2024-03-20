const BoutonDeux = (props) => {
  return (
    <button onClick={() => props.onSelect(props.price)}>
      Performance - {props.price}
    </button>
  );
};

export default BoutonDeux;
