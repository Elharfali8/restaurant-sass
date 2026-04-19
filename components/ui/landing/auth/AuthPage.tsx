import Image from 'next/image'
import React from 'react'
import TextInput from '../../forms/TextInput';

type Props = {
  mode: "login" | "register";
  setMode: React.Dispatch<React.SetStateAction<"login" | "register">>;
  handleSubmit: () => void;

  form: {
    name: string;
    email: string;
    password: string;
  };

  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
    }>
  >;

  loading: boolean;
};

const AuthPage = ({
  mode,
  setMode,
  handleSubmit,
  form,
  setForm,
  loading,
}: Props) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-115">
      
      {/* Logo */}
      <div className="flex items-center mb-2">
        <Image
          src={"/assets/logo.png"}
          alt="orderly logo image"
          width={40}
          height={40}
        />
        <h1 className="text-xl lg:text-2xl font-bold text-orange-500">
          OrderLy
        </h1>
      </div>

      {/* Title */}
      <div className="mb-2">
        <h2 className="font-medium text-lg lg:text-xl pl-2">
          {mode === "login" ? "Welcome Back!" : "Create Account"}
        </h2>
      </div>

      {/* Toggle */}
      <div className="w-full flex items-center justify-between rounded-full border border-gray-400 p-0.5 mb-6">
        <button
          onClick={() => setMode("login")}
          className={`w-full rounded-full py-2 cursor-pointer transition-all ease-in-out duration-150  ${
            mode === "login" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setMode("register")}
          className={`w-full rounded-full py-2 cursor-pointer transition-all ease-in-out duration-150  ${
            mode === "register" ? "bg-orange-500 text-white" : "hover:bg-orange-100"
          }`}
        >
          Register
        </button>
      </div>

      {/* Form */}
          <div className='grid gap-y-2'>
                    {/* Name (only register) */}
{mode === "register" && (
  <TextInput
    label="Name"
    placeholder="Enter your name"
    value={form.name}
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
  />
)}

{/* Email */}
<TextInput
  label="Email"
  type="email"
  placeholder="Enter your email"
  value={form.email}
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
/>

{/* Password */}
<TextInput
  label="Password"
  type="password"
  placeholder="Enter your password"
  value={form.password}
  onChange={(e) =>
    setForm({ ...form, password: e.target.value })
  }
/>


      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-orange-500 text-white text-lg font-medium py-2 rounded-lg transition ease-in-out duration-150 hover:bg-orange-400 cursor-pointer "
      >
        {loading
          ? "Loading..."
          : mode === "login"
          ? "Login"
          : "Register"}
      </button>

 </div>
    </div>
  );
};


export default AuthPage