const frequancies = [0.25, 0.5, 1, 2, 4, 8];
const intensities = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const buttons = [];
frequancies.forEach((frequancy, freqIndex) => {
  intensities.forEach((intensity, intensIndex) => {
    buttons.push({
      frequancy,
      intensity,
      x: 50 + freqIndex * 50,
      y: intensIndex * 20,
    });
  });
});

console.log(buttons);

export const Diagram = () => {
  return (
    <div className="mt-10 flex justify-around ">
      <div id="right-ear" className="relative">
        {intensities.map((intensity, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: "5px",
              top: `${index * 20 - 13}px`,
            }}
          >
            {intensity}
          </span>
        ))}
        {frequancies.map((frequancy, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              bottom: "-10px",
              left: `${38 + index * 52}px`,
            }}
          >
            {frequancy}
          </span>
        ))}
        <svg height="280" width="300" xmlns="http://www.w3.org/2000/svg">
          {frequancies.map((frequancy, index) => (
            <line
              key={index}
              x1={index * 50 + 50}
              y1="0"
              x2={index * 50 + 50}
              y2="260"
              stroke="red"
              width="2"
            />
          ))}

          {intensities.map((intensity, index) => (
            <line
              key={index}
              x1="50"
              y1={index * 20}
              x2="300"
              y2={index * 20}
              stroke="red"
              width="2"
            />
          ))}
          {buttons.map((button, index) => (
            <circle
              onClick={() => console.log(button)}
              key={index}
              fill="gray"
              r="5"
              cx={button.x}
              cy={button.y}
            />
          ))}
        </svg>
      </div>
      <div id="left-ear" className="relative">
        {intensities.map((intensity, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              left: "5px",
              top: `${index * 20 - 13}px`,
            }}
          >
            {intensity}
          </span>
        ))}
        {frequancies.map((frequancy, index) => (
          <span
            key={index}
            style={{
              color: "black",
              position: "absolute",
              bottom: "-10px",
              left: `${38 + index * 52}px`,
            }}
          >
            {frequancy}
          </span>
        ))}
        <svg height="260" width="300" xmlns="http://www.w3.org/2000/svg">
          {frequancies.map((frequancy, index) => (
            <line
              key={index}
              x1={index * 50 + 50}
              y1="0"
              x2={index * 50 + 50}
              y2="260"
              stroke="red"
              width="2"
            />
          ))}
          {intensities.map((intensity, index) => (
            <line
              key={index}
              x1="50"
              y1={index * 20}
              x2="300"
              y2={index * 20}
              stroke="red"
              width="2"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Diagram;
