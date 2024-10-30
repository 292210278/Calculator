function Weight({ act }) {
  return (
    <div className={act ? "module active" : "module"}>
      <h1>IBM计算</h1>
    </div>
  );
}

export default Weight;
