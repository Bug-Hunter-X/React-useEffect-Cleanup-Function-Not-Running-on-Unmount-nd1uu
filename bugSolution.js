```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    console.log('Effect runs!');
    return () => {
      console.log('Cleanup runs!');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleUnmount = () => {
    setShouldRender(false);
  };

  return (
    shouldRender && (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
    )
  );
}
```