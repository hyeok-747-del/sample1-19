function Body({ name }) {
  console.log(name);
  return (
    <div className="body">
      <h1 className="text-pink-700">Body {name}</h1>
    </div>
  );
}

export default Body;
