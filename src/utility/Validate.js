export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isValidPassword) return "Password is not Valid";
  return null;
};

export const checkValidName = (name) => {
  const isNameValid = /^[A-Za-z\s]/.test(name);
  if (!isNameValid) return "Full Name Can't be Blank";
};
