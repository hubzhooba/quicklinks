import { Router } from "express";
import User from "../models/UserModel.js";

successRouter.get("/user", (req, res) => {
    /*
      when passing values using HTTP GET method
      the values are stored in the req.query object
      Example url: `http://localhost/success?fName=A&lName=B&idNum=123`
      To retrieve the value of parameter `fName`: req.query.fName
    */
    const details = {
      username: query.pass,
      email: req.query.email,
      pass: req.query.pass,
      avatar: query.pass,
      bio: query.pass,
      tags: query.pass,
      links: query.pass,
    };
  
    // render `../views/profile.hbs`
    res.render("user", details);
  });
