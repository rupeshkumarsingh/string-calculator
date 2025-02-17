export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numString = numbers;

    // Check if a custom delimiter is defined
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numString = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numString.split(delimiter).map((n) => parseInt(n, 10));

    // Filter out negative numbers and throw an exception if any are found
    const negativeNumbers = numArray.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(',')}`,
      );
    }

    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
