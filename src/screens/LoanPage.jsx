import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import cryptoService from "../service/cryptoService";

const LoanPage = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    cryptoName: "",
    cryptoCollateralAmt: "",
    eligibleAmt: "",
    requiredLoanAmt: "",
  });
  const [formData, updateFormData] = React.useState(initialFormData);
  const [loan, setLoan] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // eligibleAmt: 0.7 * formData.cryptoAmt * loan[0].current_price,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleUpdate = (e) => {
    updateFormData({
      ...formData,
      eligibleAmt: 0.7 * formData.cryptoCollateralAmt * loan[0].current_price,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/loan/" + formData.cryptoName)
      .then((res) => {
        setLoan(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
    const putData = (({
      cryptoName,
      requiredLoanAmt,
      cryptoCollateralAmt,
    }) => ({ cryptoName, requiredLoanAmt, cryptoCollateralAmt }))(formData);

    console.log(putData);
    cryptoService.getLoan(putData).catch((error) => {
      console.log(error);
    });
    alert("Loan has been issued!")
    navigate("/dashboard")
  };

  if (!loading) {
    return (
      <div className="gradient__bg inline-block w-full min-h-screen">
        <div className="justify-center mt-16">
          <div className="w-96 mx-auto border border-gray-400 rounded-lg">
            <div className="w-full h-auto p-4 flex items-center border-b border-gray-400">
              <h1 className="w-full">Crypto Loan Application</h1>
            </div>
            <div className="w-full h-auto p-4">
              <form action="" id="form">
                <div className="text-black">
                  <label className="text-white font-semibold font-sans">
                    Choose a crypto :
                  </label>
                  <select
                    name="cryptoName"
                    id="cryptoName"
                    className="ml-2"
                    onChange={handleChange}
                  >
                    <option
                      className="text-black font-semibold font-sans"
                      value="bitcoin"
                    >
                      BTC
                    </option>
                    <option
                      className="text-black font-semibold font-sans"
                      value="ethereum"
                    >
                      ETH
                    </option>
                    <option
                      className="text-black font-semibold font-sans"
                      value="cardano"
                    >
                      ADA
                    </option>
                    <option
                      className="text-black font-semibold font-sans"
                      value="binancecoin"
                    >
                      BNC
                    </option>
                  </select>
                </div>

                <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500 mt-4">
                  <input
                    id="cryptoCollateralAmt"
                    type="number"
                    name="cryptoCollateralAmt"
                    className="w-full h-8 focus:outline-none mt-4 text-black font-semibold font-sans"
                    placeholder="0.1 - 10"
                    min="0.1"
                    max="1000"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 text-black">
                  <label className="text-black font-semibold font-sans">
                    Eligible Loan ammount
                  </label>
                  <input
                    id="eligibleAmt"
                    type="number"
                    name="eligibleAmt"
                    className="text-green-500 font-semibold font-sans"
                    placeholder="Eligible Loan Ammount"
                    value={formData.eligibleAmt}
                    onChange={handleChange}
                    readOnly
                  />
                </div>

                <div className="flex mb-4 px-3 py-1 bg-white rounded-sm border border-gray-300 focus-within:border-gray-500">
                  <div className="w-full focus-within:text-gray-900">
                    <label className="text-black font-semibold font-sans">
                      Enter the Required Loan Ammount
                    </label>
                    <input
                      id="requiredLoanAmt"
                      name="requiredLoanAmt"
                      type="text"
                      className="w-full h-8 focus:outline-none text-black font-semibold font-sans"
                      placeholder="Maximun - Eligibile Ammount"
                      max={formData.eligibleAmt}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-16 w-full rounded-sm bg-red-500 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
                  onClick={handleUpdate}
                >
                  Check Loan Eligibility
                </button>

                <button
                  type="submit"
                  className="h-16 mt-4 w-full rounded-sm bg-green-500 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
                  onClick={handleSubmit}
                >
                  Get Loan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LoanPage;
