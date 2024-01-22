import './Dots.css';

const Dot = ({ num, scrollIndex }) => {
    return (
      <div
        style={{
          width: 10,
          height: 10,
          border: "0px solid #000000",
          borderRadius: 999,
          backgroundColor: scrollIndex === num ? "#000000" : "transparent",
          transitionDuration: 1000,
          transition: "background-color 0.5s",
        }}
      ></div>
    );
  };
  
  const Dots = ({ scrollIndex }) => {
    return (
      <div className="dotss" style={{ position: "fixed", top: "50%", right: 100 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 20,
            height: 100,
          }}
        >
          <Dot num={1} scrollIndex={scrollIndex}></Dot>
          <Dot num={2} scrollIndex={scrollIndex}></Dot>
          <Dot num={3} scrollIndex={scrollIndex}></Dot>
          <Dot num={4} scrollIndex={scrollIndex}></Dot>
          <Dot num={5} scrollIndex={scrollIndex}></Dot>
          <Dot num={6} scrollIndex={scrollIndex}></Dot>
        </div>
      </div>
    );
  };
  
  export default Dots;