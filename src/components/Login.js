import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utility/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../components/firebase";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const [errormessage, seterrormessage] = useState();

  const toggleSignInForm = (e) => {
    setSignInForm(!isSignInForm);
  };
  const handelButtonClick = () => {
    console.log(auth);
    const errormessage = checkValidData(
      email.current.value,
      password.current.value
    );
    seterrormessage(errormessage);
    if (errormessage) return;
    // Signin or SignUp logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="Netflix_Logo_PMS"
          />
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-4/12 my-36 p-12 mx-auto left-0 right-0 text-white bg-black bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          ref={email}
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        {errormessage && (
          <p className="text-red-500 font-bold text-lg py-3">{errormessage}</p>
        )}
        <button
          onClick={handelButtonClick}
          className="p-4 my-6 bg-red-700 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
