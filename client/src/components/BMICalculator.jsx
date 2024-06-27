import React, { useState } from 'react';

export const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiInfo, setBmiInfo] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineBMIInfo(bmiValue);
    }
  };

  const determineBMIInfo = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiInfo('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiInfo('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiInfo('Overweight');
    } else {
      setBmiInfo('Obesity');
    }
  };

  return (
    <div className=" flex items-center justify-center  p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="height">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              Your BMI: <span className="font-bold">{bmi}</span>
            </p>
            <p className="mt-2 text-lg">
              This is considered: <span className="font-bold">{bmiInfo}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
