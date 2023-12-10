import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { Form, Button } from "react-bootstrap";
import * as styles from "../styles/input.styles.css";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form...");
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    //HERE WITH CONTEXT I CAN CALL (store) HOOK, AND THE METHOD (createItem) THIS WILL UPDATE THE STATE OF (usestate)
    store.createItem(newBook);
    navigate("/");
  }
  //function to save the img file from local.
  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }
  return (
    <Layout>
      <Form onSubmit={handleSubmit} className={styles.formContainer}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            type="file"
            name="cover"
            onChange={handleOnChangeFile}
          />
          {!!cover && <img src={cover} alt="Book cover" width="150" />}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Intro</Form.Label>
          <Form.Control
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Completed"
            name="completed"
            onChange={handleChange}
            checked={completed}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register book
        </Button>
      </Form>
    </Layout>
  );
}

//   return (
//     <Layout>
//       <form onSubmit={handleSubmit} className={styles.formContainer}>
//         <div className={styles.container}>
//           <div className={styles.title}>Title</div>
//           <input
//             className={styles.input}
//             type="text"
//             name="title"
//             onChange={handleChange}
//             value={title}
//           />
//         </div>
//         <div className={styles.container}>
//           <div className={styles.title}>Author</div>
//           <input
//             className={styles.input}
//             type="text"
//             name="author"
//             onChange={handleChange}
//             value={author}
//           />
//         </div>

//         {/* Call the function handleOnChangeFile here to preview */}
//         <div className={styles.container}>
//           <div className={styles.title}>Cover</div>
//           <input type="file" name="cover" onChange={handleOnChangeFile} />
//           <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
//         </div>
//         <div className={styles.container}>
//           <div className={styles.title}>Intro</div>
//           <input
//             className={styles.input}
//             type="text"
//             name="intro"
//             onChange={handleChange}
//             value={intro}
//           />
//         </div>
//         <div className={styles.container}>
//           <div className={styles.title}>Completed</div>
//           <input
//             className={styles.input}
//             type="checkbox"
//             name="completed"
//             onChange={handleChange}
//             checked={completed}
//           />
//         </div>
//         <div className={styles.container}>
//           <div className={styles.title}>Review</div>
//           <input
//             className={styles.input}
//             type="text"
//             name="review"
//             onChange={handleChange}
//             value={review}
//           />
//         </div>
//         <input
//           type="submit"
//           value="Register book"
//           className={styles.input}
//         />
//       </form>
//     </Layout>
//   );
// }
