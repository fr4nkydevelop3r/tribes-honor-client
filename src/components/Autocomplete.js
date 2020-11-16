import React, { useState } from 'react';

const Autocomplete = ({ categories, register, setValue }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const onChange = (e) => {
    const cat = [
      'Papaya',
      'Persimmon',
      'Paw Paw',
      'Prickly Pear',
      'Peach',
      'Pomegranate',
      'Pineapple',
    ];
    const userInput = e.target.value;
    const filteredCategories = cat.filter(
      (category) =>
        category.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    setUserInput(userInput);
    setFilteredOptions(filteredCategories);
    setActiveOption(0);
    setShowOptions(true);
  };

  const onClick = (e) => {
    e.preventDefault();
    setFilteredOptions([]);
    setActiveOption(0);
    setShowOptions(false);
  };
  const setCategory = (e) => {
    setValue('category', e.target.innerHTML, {
      shouldValidate: true,
      shouldDirty: true,
    });
    //e.target.value = filteredOptions[activeOption];
    setFilteredOptions([]);
    setShowOptions(false);
  };

  const optionList = () => {
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        return (
          <ul onClick={setCategory} className="list-suggestions">
            {filteredOptions.map((optionName, index) => {
              return (
                <li
                  key={index}
                  style={{
                    color: index === activeOption ? '#118ab2' : 'gray',
                  }}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    return <></>;
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      if (!userInput) {
        setUserInput('');
        return;
      } else {
        setUserInput(userInput);
      }
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        console.log(activeOption);
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (e.keyCode === 40) {
      console.log(activeOption);

      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  return (
    <>
      <div className="categories-container">
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
          className="field-input input-autocomplete"
          placeholder="Use one of the recommendations or create a new one"
          ref={register({ required: true })}
          name="category"
        />

        {optionList()}
      </div>
    </>
  );
};

export default Autocomplete;
