import React, { useState } from 'react';
import './NutritionPage.css';

const NutritionPage = ({ signedIn, setSignedIn }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can access the form values here (name, category, quantity, calories)
    console.log('Form submitted:', name, category, quantity, calories);
    // Clear form fields
    setName('');
    setCategory('');
    setQuantity('');
    setCalories('');
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1 className='nutrition-title'> Nutrition </h1>
      {signedIn ? (
        <div>
          <div>
            <button className='add-more-btn' onClick={openPopup}>
              Add Food
            </button>
            {isOpen && (
              <div className='popup'>
                <div className='popup-content'>
                <button className='close-btn' onClick={closePopup}>
                  X
                </button>
                  <h2>Record Nutrition</h2>
                  <form className='form-container' onSubmit={handleSubmit}>
                    <div className='form-field'>
                      <label className='label' htmlFor='name'>
                        Name:
                      </label>
                      <input
                        className='input'
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className='label' htmlFor='category'>
                        Category:
                      </label>
                      <select
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option value=''>Select a category</option>
                        <option value='Fruits'>Snack</option>
                        <option value='Vegetables'>Beverage</option>
                        <option value='Grains'>Food</option>
                      </select>
                    </div>
                    <div>
                      <label className='label' htmlFor='quantity'>
                        Quantity:
                      </label>
                      <input
                        className='input'
                        type='number'
                        id='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className='label' htmlFor='calories'>
                        Calories:
                      </label>
                      <input
                        className='input'
                        type='number'
                        id='calories'
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                      />
                    </div>
                    <button className='submit-btn' type='submit'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Please Sign in to see content</div>
      )}
    </div>
  );
};

export default NutritionPage;
