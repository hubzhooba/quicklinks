// Express
import { Router } from "express";
// Routers
import userRouter from "./userRouter.js";
import profileRouter from "./profileRouter.js";
import settingsRouter from "./settingsRouter.js";

const routes = Router();

/*
  When a client sends an HTTP GET request for `/`,
  render the `landing` view (Start page).
*/
routes.get("/", (req, res) => {
  res.render("landing");
});

/*
  Use routes defined in ./userRouter.js
*/
routes.use("/user", userRouter);

routes.use(profileRouter);

routes.use(settingsRouter);

/* 
  If the route is not defined in the server, render `../views/error.hbs`.
  Always define this as the last middleware!
*/

signupRouter.post("/user", (req, res) => { //Post to user
  /*
    when submitting forms using HTTP POST method
    the values in the input fields are stored in `req.body` object
    each <input> element is identified using its `name` attribute
    Example: the value entered in <input type="text" name="fName">
    can be retrieved using `req.body.fName`
  */
  const email = req.body.email;
  const pass = req.body.pass;
  const user = {
    email: email,
    pass: pass,
  };

  /*
    calls the function insertOne()
    defined in the `database` object in `../models/db.js`
    this function adds a document to collection `users`
  */
  User.create(user)
    .then((result) => {
      console.log("Added: " + result);
      res.statusCode = 200;
      /*
        upon adding a user to the database,
        redirects the client to `/success` using HTTP GET,
        defined in `../routes/routes.js`
        passing values using URL
        which calls getSuccess() method
        defined in `./successController.js`
      */
      res.redirect( //to be edited to hide pass
        "/success?email=" + email + "&pass=" + pass
      );
    })
    .catch((err) => {
      console.error(err);
      res.status = 500;
      res.render("error", {
        code: 500
      });
    });
});


routes.use((req, res) => {
  res.render("error", {
    code: 404,
  });
});

/*
  exports the object `routes` (defined above)
  when another script exports from this file
*/
export default routes;
