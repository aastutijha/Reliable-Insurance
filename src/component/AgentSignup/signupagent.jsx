import { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    permanentAddress: '',
    currentAddress: '',
    email: '',
    age: '',
    gender: '',
    academicQualification: '',
    currentOccupation: '',
    organizationName: '',
    phoneNumber: '',
    agreePrivacyPolicy: false,
    agreeTermsAndConditions: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log(formData);
  };

  return (
    <section className="user-area-all-style sign-up-area py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
            <div className="form-heading text-center mb-6">
              <h3 className="text-2xl font-semibold">Apply Form</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="permanentAddress"
                    placeholder="Permanent Address"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="currentAddress"
                    placeholder="Current Address"
                    value={formData.currentAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender" className="block mb-2">Gender:</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        className="form-check-input mr-2"
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleRadioChange}
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        className="form-check-input mr-2"
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleRadioChange}
                      />
                      Female
                    </label>
                    <label className="flex items-center">
                      <input
                        className="form-check-input mr-2"
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleRadioChange}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="academicQualification"
                    placeholder="Academic Qualification"
                    value={formData.academicQualification}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="currentOccupation"
                    placeholder="Current Occupation"
                    value={formData.currentOccupation}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="organizationName"
                    placeholder="Name of Organization"
                    value={formData.organizationName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-condition flex items-center justify-center mt-6 space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreePrivacyPolicy"
                    checked={formData.agreePrivacyPolicy}
                    onChange={handleCheckboxChange}
                    className="form-check-input mr-2"
                  />
                  I agree with Reliable Life's{' '}
                  <a href="#" className="text-blue-500 hover:underline ml-1">Privacy Policy</a>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeTermsAndConditions"
                    checked={formData.agreeTermsAndConditions}
                    onChange={handleCheckboxChange}
                    className="form-check-input mr-2"
                  />
                  I agree with Reliable Life's{' '}
                  <a href="#" className="text-blue-500 hover:underline ml-1">Terms & Conditions</a>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?
                <a href="/login" className="text-blue-500 hover:underline ml-2">Log In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
