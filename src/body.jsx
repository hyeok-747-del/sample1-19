function Body() {
  const num = 19;

  return (
    <>
      <h2>{num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다</h2>
      <div>div 1</div>
      <div>div 2</div>
    </>
  );
}

export default Body;
