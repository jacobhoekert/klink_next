import React, { useState, useEffect } from 'react';
import '../styles/calculator.scss';

const CalculatorSection = () => {
  const [donorAmount, setDonorAmount] = useState(15);
  const [monthAmount, setMonthAmount] = useState(6);
  const [totalAmount, setTotalAmount] = useState("1000");

  useEffect(() => {
    const total = donorAmount * monthAmount * 13;
    const totalString = total.toString();
    let formattedTotal = '';
    if (totalString.length == 4) {
      const lastDigits = totalString.slice(1);
      formattedTotal = totalString[0] + ',' + lastDigits;
    }
    else if (totalString.length == 5) {
      const lastDigits = totalString.slice(2);
      formattedTotal = totalString[0] + totalString[1] + ',' + lastDigits;
    }
    else {
      formattedTotal = totalString;
    }
    setTotalAmount(formattedTotal);
  }, [donorAmount, monthAmount]);

  const handleDonorChange = (e) => {
    const {value} = e.currentTarget;
    setDonorAmount(value);
  }

  const handleMonthChange = (e) => {
    const {value} = e.currentTarget;
    setMonthAmount(value);
  }

  return (
    <>
    <section id="calculator-section">
      <div id="calculator-wrapper">
        <h1>You share with donors.<br/>We bring you funds. </h1> 
        <div id="calculator-container">
          <div className="sliders-container">
            <div className="slider1">
              <div className="slider-text">{donorAmount} donors</div>
              <div className="range">
                  <label htmlFor="slider1">Donor Range Slider</label> {/* Hidden – Here for screen readers */}
                0 <input 
                  id="slider1"
                  type="range" 
                  min="0"
                  max="130"
                  onChange={handleDonorChange}
                  value={donorAmount}
                  /> 130
              </div>
            
            </div>
            <div className="slider2">
              <div className="slider-text">{monthAmount} months fundraising</div>
              <div className="range">
                  <label htmlFor="slider2">Month Range Slider</label> {/* Hidden – Here for screen readers */}
                0 <input 
                  id="slider2"
                  type="range"
                  min="1"
                  max="12"
                  onChange={handleMonthChange}
                  value={monthAmount}
                  step="1" 
                  /> 12
              </div>
            </div>
          </div>
          <div className="total-container">
            <span className="total">${totalAmount}</span>
            <p className="explanation">Get {donorAmount} people to connect their card to your campaign for {monthAmount} months and you will raise ${totalAmount} towards your trip or cause*</p>
            <p className="small-font">*Numbers based off of an average of $13 in total roundups per donor per month. Estimate doesn't include donation tips or multipliers.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CalculatorSection