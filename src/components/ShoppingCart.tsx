

interface Props {
  items: string[];
  deleting: () => void;
}

const shoppingCart = ({ items, deleting }: Props) => {
  return (
    <>
      <div>
        <p>cart items</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={deleting}>button</button>
    </>
  );
};

export default shoppingCart;
