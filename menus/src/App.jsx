import { useState } from 'react';
import menu from './data';
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);
// console.log(tempSet);
// console.log(tempCategories);

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  // console.log(categories);

  const filterMenu = (category) => {
    // console.log(category);
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
