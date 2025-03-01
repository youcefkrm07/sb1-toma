require('dotenv').config();

module.exports = {
  // API Configuration
  API_URL: "https://mobile-pre.at.dz/api",
  PAIEMENT_URL: "https://paiement.algerietelecom.dz/AndroidApp/dette_paiement.php",
  BOT_TOKEN: "7662460998:AAH94PDWrJcq5e7CeKSuObP6Yd2IaKRpPUA",

  // Conversation States
  STATES: {
    MAIN_MENU: 'MAIN_MENU',
    LOGIN_ND: 'LOGIN_ND',
    LOGIN_PASSWORD: 'LOGIN_PASSWORD',
    ND_FACT_INPUT: 'ND_FACT_INPUT',
    VOUCHER_ND_INPUT: 'VOUCHER_ND_INPUT',
    VOUCHER_CODE_INPUT: 'VOUCHER_CODE_INPUT',
    GET_NCLI_INPUT: 'GET_NCLI_INPUT',
    REGISTER_ND_INPUT: 'REGISTER_ND_INPUT',
    REGISTER_NCLI_INPUT: 'REGISTER_NCLI_INPUT',
    REGISTER_MOBILE_INPUT: 'REGISTER_MOBILE_INPUT',
    REGISTER_EMAIL_INPUT: 'REGISTER_EMAIL_INPUT',
    REGISTER_PASSWORD1_INPUT: 'REGISTER_PASSWORD1_INPUT',
    REGISTER_PASSWORD2_INPUT: 'REGISTER_PASSWORD2_INPUT',
    REGISTER_OTP_INPUT: 'REGISTER_OTP_INPUT',
    VOUCHER_LTE_ND_INPUT: 'VOUCHER_LTE_ND_INPUT',
    VOUCHER_LTE_CODE_INPUT: 'VOUCHER_LTE_CODE_INPUT'
  }
};