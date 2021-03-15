import { useState, useEffect } from "react";
//import { useHistory } from "react-router";

const useForm = (callback, validateInfo) => {
  //const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
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

    setErrors(validateInfo(values));

    setIsSubmitting(true);

    /*     if (validateInfo(values).length === 0) {
      history.push("/adresar");

      console.log(errors);
    } */
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
