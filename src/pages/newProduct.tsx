import NewItemForm from "../components/newItemForm";

function NewProduct() {
  return (
    <div className="col-md-6 mx-5">
      <h4 className="my-2">Add New Product</h4>
      <NewItemForm></NewItemForm>
    </div>
  );
}

export default NewProduct;
