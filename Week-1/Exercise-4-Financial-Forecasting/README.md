# Week 1 - Exercise 4: Financial Forecasting

## Objective

To implement a recursive algorithm that predicts the future value of an investment based on a fixed annual growth rate.

## Files

* FinancialForecast.java
* ForecastTest.java

## Concept Used

### Recursion

Recursion is a programming technique where a method calls itself until a base condition is reached. It simplifies problems that can be divided into smaller subproblems.

## Time Complexity

* Time Complexity: **O(n)**
* Space Complexity: **O(n)** (due to the recursive call stack)

## Optimization

The recursive solution can be optimized by using iteration or memoization. Iteration reduces memory usage by avoiding recursive function calls, while memoization is useful when the same calculations are repeated.

## Output

```text
Current Value : 10000.0
Growth Rate   : 10.0%
Years         : 5
Future Value  : 16105.10
```

## Conclusion

The recursive algorithm successfully predicts the future value based on the given annual growth rate. Recursion provides a simple solution, although an iterative approach is generally more memory efficient for this problem.
