# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook: the cleanup function not being called when the component unmounts. The example code shows a simple counter component where an effect logs messages to the console. Ideally, the cleanup function should log 'Cleanup runs!' when the component is unmounted but this isn't always the case if there are other issues in the code. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs.  The cleanup function should run if you remove the component from the DOM in other parts of your application. 
5. Review the solution to see how to resolve the problem and test the effect. 

## Solution

The solution involves careful consideration of how the component is being mounted and unmounted.  The original implementation correctly uses an empty dependency array [] to trigger it only once. But issues with the conditional rendering in the parent component can lead to the cleanup function not being called.