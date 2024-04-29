import app from "./app.js";
/**
 * Set port value
 */
const port = process.env.PORT || 8000;

 /**
  * Init the server
  */
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});