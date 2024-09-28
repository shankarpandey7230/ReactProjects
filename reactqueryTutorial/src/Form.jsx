import React, { useState } from 'react';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.name)}
        />
        <button className="btn" type="submit">
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
