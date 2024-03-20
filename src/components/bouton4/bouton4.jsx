const BoutonQuatre = (props) => {
  return (
    <button onClick={() => props.onSelect(props.price)}>
      Noir uni - {props.price}
    </button>
  );
};

export default BoutonQuatre;
