import React from 'react';

export const Home = () => {
    return <>
    <h1>Home</h1>
    <div>
    <button>Add an item</button>
    <form >
      <label>Enter an Item you'd like to add:
      <input 
        type="text" 
      />
      </label>
    </form>
    </div>
    <br></br>
    <div>
    <button>Remove an item</button>
    <form >
      <label>Enter the item you'd like to remove:
      <input 
        type="text" 
      />
      </label>
    </form>
    </div>
    <br></br>
    <div>
    <button>Update an item</button>
    <form >
      <label>Enter the item you'd like to update:
      <input 
        type="text" 
      />
      </label>
    </form>
    </div>
    </>
}