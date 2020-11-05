const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
   // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    NIMI: req.body.NIMI,
    OSOITE: req.body.OSOITE,
    POSTITMP: req.body.POSTITMP,
    POSTINRO: req.body.POSTINRO,
    ASTY_AVAIN: req.body.ASTY_AVAIN,
    LUONTIPVM: new Date,
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
   Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// find specified customer
exports.get = (req, res) => {
  Customer.get(req.params.Id, (err, data) => {
   if (err) {
     if (err.kind === "not_found") {
       res.status(404).send({
         message: `Not found Customer with id ${req.params.Id}.`
       });
     } 
   } else res.send(data);
 });
};


// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
   // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.update(
    req.body.AVAIN,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.body.AVAIN}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.body.AVAIN
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
   Customer.remove(req.params.Id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.Id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.Id
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};