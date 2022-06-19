//Importo modelo de datos
const db = require("../models");
const reserva = db.Reserva;
const cliente = db.Cliente;
const hotel = db.Hotel;
const Op = db.Sequelize.Op; 

const reservaController = {}; 

//---------- BUSCAR TODOS LOS REGISTROS -------- 

reservaController.findAll = (req, res) => {
    
    reserva.findAll({include: [{ model:reserva}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reserva."
        });
      });
};

//---------- BUSCAR POR ID --------

reservaController.findById = (req, res) => {
    const id = req.params.id;

    reserva.findByPk(id, {include: [{ model:reserva}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      });
  };

  //---------- BUSCAR POR NOMBRE --------

  reservaController.findByNombre = (req, res) => {
    const nombre = req.params.nombre;

    reserva.findByPk(nombre, {include: [{ model:cliente}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${nombre}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id=" + nombre
        });
      });
  };

//---------- BUSCAR POR ClienteDni --------


reservaController.findByClienteDni = (req, res) => {
  const clienteDni = req.params.clienteDni;

  reserva.findByPk(clienteDni, {include: [{ model:cliente}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${clienteDni}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving movies with id=" + clienteDni
      });
    });
};

//---------- BUSCAR POR HotelId --------

reservaController.findByHotelId = (req, res) => {
  const hotelId = req.params.hotelId;

  reserva.findByPk(hotelId, {include: [{ model:hotel}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${hotelId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving movies with id=" + hotelId
      });
    });
};

//---------- BUSCAR POR FechaEntrada --------

reservaController.findByFechaEntrada = (req, res) => {
  const fechaEntrada = req.params.fechaEntrada;

  reserva.findByPk(fechaEntrada, {include: [{ model:reserva}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${fechaEntrada}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving movies with id=" + fechaEntrada
      });
    });
};

//---------- BUSCAR POR FechaSalida --------

reservaController.findByFechaSalida = (req, res) => {
  const fechaSalida = req.params.fechaSalida;

  reserva.findByPk(fechaSalida, {include: [{ model:reserva}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${fechaSalida}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving movies with id=" + fechaSalida
      });
    });
};


module.exports = reservaController;