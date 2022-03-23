function Loader() {
  return (
    <div className="my-5 mx-5  rounded m-auto border border-success px-5 py-5 text-dark">
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
export default Loader;
