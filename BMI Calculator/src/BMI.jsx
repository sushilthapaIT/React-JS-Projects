import React, { useState } from "react";

const BMI = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [status, setStatus] = useState("");

    const onSetHeight = (e) => {
        const value = e.target.value;
        setHeight(value);
    }

    const onSetWeight = (e) => {
        const value = e.target.value;
        setWeight(value);
    }

    const calculateBMI = (e) => {

        e.preventDefault();
        
        const height2 = height * height;
        const result = weight / height2;
        setBmi(result);

        let BMIstatus = "Obese";

        if (result < 18.5) {
            BMIstatus = "Underweight";
        } else if (result >= 18.5 && result <= 24.9) {
            BMIstatus = "Healthy";
        } else if (result >= 25 && result <= 29.9) {
            BMIstatus = "Overweight";
        } else {
            BMIstatus = "Obese";
        }
        setStatus(BMIstatus);
    }

    return (
        <>
            <h2>BMI Calculator</h2>

            <div className="container">
                <div className="content">
                    <form>
                        <div className="form-content">
                            <label>Weight: </label>
                            <input value={weight} type="number" onChange={onSetWeight} />
                        </div>

                        <div className="form-content">
                            <label>Height: </label>
                            <input value={height} type="number" onChange={onSetHeight} />
                        </div>

                        <div className="form-content">
                            <button disabled={!weight || !height} onClick={calculateBMI}>What's my BMI</button>
                        </div>
                    </form>

                    <div className="res">
                        <span>Your BMI is - {bmi}</span>
                        <br />
                        <span>You are {status}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BMI;
