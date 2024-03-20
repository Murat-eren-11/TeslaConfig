const BoutonTrois = (props) => {
  return (
    <button onClick={() => props.onSelect(props.price)}>
      Blanc Nacré multicouches - {props.price}
    </button>
  );
};

export default BoutonTrois;
