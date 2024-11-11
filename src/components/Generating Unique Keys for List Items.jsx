
import { v4 as uuidv4 } from 'uuid';

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map(item => {
        const itemId = uuidv4(); // Generate unique id for each item
        return (
          <li key={itemId}>
            {itemId} - {item}  {/* Display the item name along with its uuid */}
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
