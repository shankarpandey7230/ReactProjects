import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from './Form';
import Items from './Items';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

const App = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items items={items} />
    </section>
  );
};

export default App;
