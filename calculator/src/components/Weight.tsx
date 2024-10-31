function Weight({ act }) {
  return (
    <div className={act ? "module active" : "module"}>
      <h1>IBM计算</h1>
      <div>
        <div>
          <h2>体重(kg)</h2>
          <input type="number" inputMode="numeric" />
          <h2>身高(m)</h2>
          <input type="number" inputMode="numeric" />
        </div>
      </div>
    </div>
  );
}

export default Weight;
