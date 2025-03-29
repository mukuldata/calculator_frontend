import { useState } from "react";
import { add } from "../utils/calculator"; // Import the add function
import "../styles/calculatorStyles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleCalculate = () => {
    try {
      const result = add(input);
      setOutput(result.toString());
      setIsError(false);
    } catch (error) {
      setOutput((error as Error).message);
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="heading">String Calculator</h2>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          cols={40}
          className="textarea"
          placeholder="Enter numbers, using ',' or new lines..."
        />

        <button onClick={handleCalculate} className="button">
          Calculate
        </button>

        {output !== null && (
          <h3 className={isError ? "error-text" : "result-text"}>{
            isError ? "Error: " + output : "Result: " + output
          }</h3>
        )}
      </div>
    </div>
  );
};

export default App;
