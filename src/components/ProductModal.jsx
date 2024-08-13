import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("category is required"),
  price: Yup.string().required("price is required"),
  image: Yup.string().required("image is required"),
  description: Yup.string().required("description is required"),
});

const ProductModal = (props) => {
  const { show, handleClose } = props;
  console.log('props', props);

  const handleSubmit = (formData) => {
    console.log("Data:", formData);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        category: formData.category,
        price: formData.price,
        image: formData.image,
        description: formData.description,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Product", json);
        alert("Product added successfully");
      })
      .catch((err) => console.error("Error:", err));

    console.log(formData);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              title: "",
              category: "",
              price: "",
              image: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {() => (
              <Form>
                <div className="mb-3">
                  <label>title</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Enter Title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    style={{ color: "red", marginTop: "2px" }}
                  />
                </div>

                <div className="mb-3">
                  <label>Category</label>
                  <Field
                    type="text"
                    id="category"
                    name="category"
                    className="form-control"
                    placeholder="Enter category"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    style={{ color: "red", marginTop: "2px" }}
                  />
                </div>

                <div className="mb-3">
                  <label>Price</label>
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"/>
                  <ErrorMessage
                    name="price"
                    component="div"
                    style={{ color: "red", marginTop: "2px" }}/>
                </div>
                <div className="mb-3">
                  <label>Image URL</label>
                  <Field
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="Enter image"/>
                  <ErrorMessage
                    name="image"
                    component="div"
                    style={{ color: "red", marginTop: "2px" }}/>
                </div>

                <div className="mb-3">
                  <label>Description</label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="form-control" 
                    placeholder="Enter description"/>
                  <ErrorMessage
                    name="description"
                    component="div"
                    style={{ color: "red", marginTop: "2px" }}/>
                </div>

                <div className="mt-3 d-flex justify-content-center">
                  <Button variant="primary" type="submit">
                    ADD
                  </Button>
                  <Button
                    variant="secondary"
                    className="mx-2"
                    onClick={handleClose}>Close
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
