//Importo modelo de datos
const db = require("../models");
const reserva = db.Reserva;
// const cliente = db.Cliente;
// const hotel = db.Hotel;
const Op = db.Sequelize.Op; 

const reservaController = {}; 

//---------- BUSCAR TODOS LOS REGISTROS -------- 

reservaController.findAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "me cago en dios."
        });
      });
  };


// //---------- BUSCAR POR ID --------

// reservaController.getById = (req, res) => {
//     const id = req.params.id;

//     reserva.findByPk(id, {include: [{ model:reserva}]})
//       .then(data => {
//         if (data) {
//           res.send(data);
//         } else {
//           res.status(404).send({
//             message: `no puede encontrar reserva con=${id}.`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: `no puede encontrar reserva con id=${id}.`
//         });
//       });
//   };

//   //---------- BUSCAR POR NOMBRE --------

//   reservaController.getByNombre = (req, res) => {
//     const nombre = req.params.nombre;

//     reserva.findByPk(nombre, {include: [{ model:cliente}]})
//       .then(data => {
//         if (data) {
//           res.send(data);
//         } else {
//           res.status(404).send({
//             message: `no puede encontrar reserva con=${nombre}.`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "no puede encontrar reserva con nombre=" + nombre
//         });
//       });
//   };

// //---------- BUSCAR POR ClienteDni --------


// reservaController.getByClienteDni = (req, res) => {
//   const clienteDni = req.params.clienteDni;

//   reserva.findByPk(clienteDni, {include: [{ model:cliente}]})
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `no puede encontrar reserva con=${clienteDni}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "no puede encontrar reserva con clienteDni=" + clienteDni
//       });
//     });
// };

// //---------- BUSCAR POR HotelId --------

// reservaController.getByHotelId = (req, res) => {
//   const hotelId = req.params.hotelId;

//   reserva.findByPk(hotelId, {include: [{ model:hotel}]})
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `no puede encontrar reserva con=${hotelId}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "no puede encontrar reserva con hotelId=" + hotelId
//       });
//     });
// };

// //---------- BUSCAR POR FechaEntrada --------

// reservaController.getByFechaEntrada = (req, res) => {
//   const fechaEntrada = req.params.fechaEntrada;

//   reserva.findByPk(fechaEntrada, {include: [{ model:reserva}]})
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `no puede encontrar reserva con la fecha=${fechaEntrada}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "no puede encontrar reserva con fecha=" + fechaEntrada
//       });
//     });
// };

// //---------- BUSCAR POR FechaSalida --------

// reservaController.getByFechaSalida = (req, res) => {
//   const fechaSalida = req.params.fechaSalida;

//   reserva.findByPk(fechaSalida, {include: [{ model:reserva}]})
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `no puede encontrar reserva con fecha=${fechaSalida}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "no puede encontrar reserva con fecha=" + fechaSalida
//       });
//     });
// };


module.exports = reservaController;