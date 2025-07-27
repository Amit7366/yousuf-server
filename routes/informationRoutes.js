const express = require("express");
const { getAllInformations, createInformation, updateInformation, deleteInformation, updateCashpin, updateGmail, updateGmailPass } = require("../controllers/informationController");
const router = express.Router();


router.get('/informations', getAllInformations);
router.post('/informations', createInformation);
router.put('/informations/:id', updateInformation);
router.put('/informations/cashpin/:id', updateCashpin);
router.put('/informations/gmail/:id', updateGmail);
router.put('/informations/gmailpass/:id', updateGmailPass);
router.delete('/informations/:id', deleteInformation);

module.exports = router