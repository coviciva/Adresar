export default function validateInfo(values) {
  let errors = {};
  const regex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$!#?+-])");

  if (!values.email) {
    errors.email = "Ovo polje ne smije biti prazno";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Neispravna email adresa";
  }

  if (!values.password) {
    errors.password = "Ovo polje ne smije biti prazno";
  } else if (values.password.length < 6) {
    errors.password = "Lozinka mora sadržavati 6 ili više znakova";
  } else if (!regex.test(values.password)) {
    errors.password =
      "Lozinka mora sadržavati jedan broj i jedan specijalan znak";
  }
  // console.log(regex.test(values.password));
  return errors;
}
