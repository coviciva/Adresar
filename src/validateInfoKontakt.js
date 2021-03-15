export default function validateInfoKontakt(values) {
  let errors = {};

  if (!values.ime.trim()) {
    errors.ime = "Ovo polje ne smije biti prazno";
  } else if (values.ime.length > 100) {
    errors.ime = "Ime treba biti kraće od 100 znakova";
  }

  if (!values.prezime.trim()) {
    errors.prezime = "Ovo polje ne smije biti prazno";
  } else if (values.prezime.length > 300) {
    errors.ime = "Prezime treba biti kraće od 300 znakova";
  }

  if (!values.vrstakontakta) {
    errors.vrstakontakta = "Ovo polje ne smije biti prazno";
  }

  if (!values.kontakt) {
    errors.kontakt = "Ovo polje ne smije biti prazno";
  }
  return errors;
}
