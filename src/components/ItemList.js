// ItemList.js
import React, { useState, useEffect } from 'react';
import { fetchItems } from '../api/api';

function ItemList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      try {
        const data = await fetchItems(page, 10);
        setItems((prevItems) => [...prevItems, ...data]);
        setPage(page + 1);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        loadItems();
      }
    });

    loadItems();

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [page, loading]);

  return (
    <div>
      {/* Render the list of items */}
      {items.map((item) => (
        // Display item details here
        <div key={item.id}>{item.name}</div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default ItemList;
