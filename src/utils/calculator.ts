function getDelimiter(numbers: string): { delimiter: RegExp; numberPart: string } {
    let delimiter = /,|\n/; 
  
    if (numbers.startsWith("//")) {
      const [delimiterLine, numberPart] = numbers.split("\n", 2);
      return { delimiter: new RegExp(delimiterLine.slice(2)), numberPart };
    }
  
    return { delimiter, numberPart: numbers };
  }
  
  export function add(numbers: string): number {
    if (!numbers) return 0;

    const { delimiter, numberPart } = getDelimiter(numbers);

    const numArray = numberPart.split(delimiter).map(Number);
  
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
    }
  
    return numArray.reduce((sum, num) => (num > 1000 ? sum : sum + num), 0);
  }