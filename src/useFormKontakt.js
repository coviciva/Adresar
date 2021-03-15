import { useState, useEffect } from "react";

const useFormKontakt = (validateInfoKontakt) => {
  const [values, setValues] = useState({
    ime: "",
    prezime: "",
    vrstakontakta: "",
    kontakt: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInfoKontakt(values));

    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useFormKontakt;
