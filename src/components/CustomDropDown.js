import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropDown = ({ items, placeholder, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker className=" py-3 px-4 bg-slate-200 mb-3"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      placeholder={placeholder}
      onChangeValue={onValueChange}
    />
  );
};

export default CustomDropDown;
