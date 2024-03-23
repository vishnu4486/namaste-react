const ShimmerUi = () => {
  return (
    <div className="shimmer-container">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => {
        return <div key={index} className="shimmer-card"></div>;
      })}
    </div>
  );
};
export default ShimmerUi;
