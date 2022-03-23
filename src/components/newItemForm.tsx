import { useNavigate } from "react-router-dom";

function NewItemForm() {
  const nav = useNavigate();
  function SubmitFormHandler(ev: any) {
    ev.preventDefault();
    const data: FormData = new FormData(ev.target);
    console.log(Object.fromEntries(data.entries()));
    let item = Object.fromEntries(data.entries());
    fetch("https://react-app-bf150-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      nav("/", { replace: true });
    });
  }
  return (
    <div>
      <form onSubmit={SubmitFormHandler}>
        <div className="mb-3">
          <input
            placeholder="Product Title"
            type="text"
            className="form-control"
            name="productTitle"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="url"
            placeholder="Product Image"
            className="form-control"
            name="productImage"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Product Price"
            className="form-control"
            name="productPrice"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Product Quantity"
            className="form-control"
            name="productQuantity"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            rows={5}
            placeholder="Add Product Description"
            className="form-control"
            name="productDescription"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default NewItemForm;
