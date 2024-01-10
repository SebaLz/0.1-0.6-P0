const Header = (props) => {
  return <h1>Welcome to {props.name} Course!</h1>;
};
const Content = [
  "Fundamentals of React",
  "Using props to pass data",
  "State of a component",
];
const Total = ["10", "7", "14"];
const App = () => {
  // const-definitions
  return (
    <div>
      <Header name="Half Stack application development" />
      <ul>
        {Content.map((item, index) => (
          <li key={index}>
            <p>
              {item} {Total[index]}
            </p>
          </li>
        ))}
      </ul>
      <p>Number of exercises {Total.reduce((a, b) => Number(a) + Number(b))}</p>
    </div>
  );
};

export default App;
