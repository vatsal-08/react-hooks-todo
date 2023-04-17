import { useState } from "react";

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [editingConfig, setEditingConfig] = useState(null);
  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
    editingConfig,
    setEditingConfig,
  };
};
