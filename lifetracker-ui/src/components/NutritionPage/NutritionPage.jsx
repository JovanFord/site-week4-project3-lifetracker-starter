import React, { useState } from 'react';
import './NutritionPage.css';
import apiClient from '../../services/apiClient';

const NutritionPage = ({ signedIn, setSignedIn, nutritionData, setNutritionData }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    category: '',
    quantity: '',
    calories: '',
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await apiClient.addFood({
        name: name,
        category: category,
        quantity: parseInt(quantity),
        calories: parseInt(calories),
      });

      if (data) {
        console.log('Food added successfully:', data);
        setForm({
          name: '',
          category: '',
          quantity: '',
          calories: '',
        });
      }

      setNutritionData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
      setIsLoading(false);
    }
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
            <div>
              {nutritionData.map((item) => (
                <div className='nutri-card'>
                  <div className='split-nutri'>
                    <div className='content'>
                    <p className='food-name'>{item.name}</p>
                      <div className='split-nutri'>
                        <div className='nutri-calories-div'>
                          <p className='nutri-calories'>calories</p>
                          <p className='nutri-data nutri-calories-data'>
                            {item.calories}
                          </p>
                        </div>
                        <div className='nutri-quantity-div'>
                          <p className='nutri-quantity'>quantity</p>
                          <p className='nutri-data nutri-quantity-data'>
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isOpen && (
              <div className='popup'>
                <div className='popup-content'>
                  <button className='close-btn' onClick={closePopup}>
                    X
                  </button>
                  <h2>Record Nutrition</h2>
                  <form className='form-container' onSubmit={handleOnSubmit}>
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
