import React, { useState, ChangeEvent, FormEvent } from "react";
import empService from "../Service/emp.service"; // Import the empService module

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  salary: number | null;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  salary: string;
}

const initialFormData: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  salary: null,
};

const AddEmp: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    salary: null,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    salary: "",
  });

  const [msg, setMsg] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({
      ...formErrors,
      [id]: value ? "" : "Please fill out this field.",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {
      firstName: formData.firstName ? "" : "Please fill out this field.",
      lastName: formData.lastName ? "" : "Please fill out this field.",
      email: formData.email ? "" : "Please fill out this field.",
      address: formData.address ? "" : "Please fill out this field.",
      salary: formData.salary ? "" : "Please fill out this field.",
    };

    setFormErrors(errors);

    const isValid = Object.values(errors).every((error) => error === "");

    if (isValid) {
      empService
        .saveEmp(formData)
        .then((response: unknown) => {
          setMsg("Employee added successfully");
          console.log(response);
          setFormData(initialFormData);
        })
        .catch((error: unknown) => {
          console.log(error);
        });

      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      salary: "",
    });
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <form
        className="w-full max-w-lg"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {msg && (
            <h1 className="text-center text-3xl my-5 text-green-500">{msg}</h1>
          )}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                formErrors.firstName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="firstName"
              type="text"
              placeholder="Jane"
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <p className="text-red-500 text-xs italic">
                {formErrors.firstName}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                formErrors.lastName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <p className="text-red-500 text-xs italic">
                {formErrors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                formErrors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="email"
              type="email"
              placeholder="demo@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs italic">{formErrors.email}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                formErrors.address ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
              id="address"
              type="text"
              placeholder="Albuquerque"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <p className="text-red-500 text-xs italic">
                {formErrors.address}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="salary"
            >
              Salary
            </label>
            <div className="relative">
              <input
                className={`block appearance-none w-full bg-gray-200 border ${
                  formErrors.salary ? "border-red-500" : "border-gray-200"
                } text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                id="salary"
                type="number"
                placeholder="20000"
                value={formData.salary ?? ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salary: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
              />
            </div>
            {formErrors.salary && (
              <p className="text-red-500 text-xs italic">{formErrors.salary}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-8 py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddEmp;
