import React, { useState } from 'react';
import "./ExercisePage.css"

const ExercisePage = ({signedIn, setSignedIn}) => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [intensity, setIntensity] = useState('');
  const [duration, setDuration] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can access the form values here (name, category, intensity, duration)
    console.log('Form submitted:', name, category, intensity, duration);
    // Clear form fields
    setName('');
    setCategory('');
    setIntensity('');
    setDuration('');
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1 className='exercise-title'> Excercise </h1>
      {signedIn ? (
        <div>
          <div>
            <button className='add-more-btn' onClick={openPopup}>
              Add Exercise
            </button>
            {isOpen && (
              <div className='popup'>
                <div className='popup-content'>
                <button className='close-btn' onClick={closePopup}>
                  X
                </button>
                  <h2>Record Exercise</h2>
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
                        <option value='Run'>Run</option>
                        <option value='Bike'>Bike</option>
                        <option value='Lift'>Lift</option>
                        <option value='Swim'>Swim</option>
                        <option value='Sports'>Sports</option>
                      </select>
                    </div>
                    <div>
                      <label className='label' htmlFor='intensity'>
                        Intensity:
                      </label>
                      <input
                        className='input'
                        type='number'
                        id='intensity'
                        value={intensity}
                        onChange={(e) => setIntensity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className='label' htmlFor='duration'>
                        Duration (min):
                      </label>
                      <input
                        className='input'
                        type='number'
                        id='duration'
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
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
}

export default ExercisePage