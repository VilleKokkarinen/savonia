const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.OSOITE = customer.OSOITE;
  this.NIMI = customer.NIMI;
  this.POSTINRO = customer.POSTINRO;
  this.POSTITMP = customer.POSTITMP;
  this.ASTY_AVAIN = customer.ASTY_AVAIN;
  this.LUONTIPVM = customer.LUONTIPVM;
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO asiakas SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.get = (Id, result) => {
  sql.query(`SELECT * FROM asiakas WHERE AVAIN = ${Id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM asiakas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("getting all customers");
    result(null, res);
  });
};

Customer.update = (id, customer, result) => {
  sql.query(
    "UPDATE asiakas SET NIMI = ?, OSOITE = ?, POSTITMP = ? POSTINRO = ? ASTY_AVAIN = ? WHERE AVAIN = ?",
    [customer.NIMI, customer.OSOITE, customer.POSTITMP, customer.POSTINRO, customer.ASTY_AVAIN, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = (id, result) => {
  sql.query("DELETE FROM asiakas WHERE AVAIN = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Customer;