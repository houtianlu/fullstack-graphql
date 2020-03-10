'use strict'

module.exports = function(sequelize, DataTypes) {
  let Thought = sequelize.define('cases', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    type: {
      type: DataTypes.STRING
    },
    case_no_index: { //Do not know what is this!
      type: DataTypes.STRING
    },
    handlers: { //Do not know what is this!
      type: DataTypes.STRING
    },
    create_time: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    },
    update_time: {
      type: DataTypes.DATE
    },
    note: {
      type: DataTypes.TEXT
    },
    detail_of_case: {
      type: DataTypes.STRING
    },
    premises: {
      type: DataTypes.STRING
    },
    title_company: {
      type: DataTypes.STRING
    },
    immigration: {
      type: DataTypes.STRING
    },
    petitioner: {
      type: DataTypes.STRING
    },
    recepit_no: {
      type: DataTypes.STRING
    },
    a_number: {
      type: DataTypes.STRING
    },
    nvc_case_no: {
      type: DataTypes.STRING
    },
    priority_date: {
      type: DataTypes.DATE
    },
    decision_date: {
      type: DataTypes.DATE
    },
    filing_date: {
      type: DataTypes.DATE
    },
    brife_date: {
      type: DataTypes.DATE
    },
    rfe_date: {
      type: DataTypes.DATE
    },
    interview_date: {
      type: DataTypes.DATE
    },
    hearing_date: {
      type: DataTypes.DATE
    },
    manager_name: {
      type: DataTypes.STRING
    },
    assistant_name: {
      type: DataTypes.STRING
    },
    referral_last_name: {
      type: DataTypes.STRING
    },
    referral_first_name: {
      type: DataTypes.STRING
    },
    referral_phone: {
      type: DataTypes.STRING
    },
    referral_fax: {
      type: DataTypes.STRING
    },
    referral_email: {
      type: DataTypes.STRING
    },
    refferral_company: {
      type: DataTypes.STRING
    },
    opposing_attorney_last_name: {
      type: DataTypes.STRING
    },
    opposing_attorney_first_name: {
      type: DataTypes.STRING
    },
    opposing_attorney_phone: {
      type: DataTypes.STRING
    },
    opposing_attorney_fax: {
      type: DataTypes.STRING
    },
    opposing_attorney_email: {
      type: DataTypes.STRING
    },
    opposing_attorney_company: {
      type: DataTypes.STRING
    },
    bank_attorney_last_name: {
      type: DataTypes.STRING
    },
    bank_attorney_first_name: {
      type: DataTypes.STRING
    },
    bank_attorney_phone: {
      type: DataTypes.STRING
    },
    bank_attorney_fax: {
      type: DataTypes.STRING
    },
    bank_attorney_email: {
      type: DataTypes.STRING
    },
    bank_attorney_company: {
      type: DataTypes.STRING
    },
    detail_of_case_note: {
      type: DataTypes.TEXT
    },
    title_company_note: {
      type: DataTypes.TEXT
    },
    premises_add1: {
      type: DataTypes.STRING
    },
    premises_add2: {
      type: DataTypes.STRING
    },
    premises_city: {
      type: DataTypes.STRING
    },
    premises_state: {
      type: DataTypes.STRING
    },
    premises_zip: {
      type: DataTypes.STRING
    },
    case_opening_date: {
      type: DataTypes.DATE
    },
    case_close_date: {
      type: DataTypes.DATE
    },
    listing_agent_last_name: {
      type: DataTypes.STRING
    },
    listing_agent_first_name: {
      type: DataTypes.STRING
    },
    listing_agent_phone: {
      type: DataTypes.STRING
    },
    listing_agent_fax: {
      type: DataTypes.STRING
    },
    listing_agent_email: {
      type: DataTypes.STRING
    },
    selling_agent_last_name: {
      type: DataTypes.STRING
    },
    selling_agent_first_name: {
      type: DataTypes.STRING
    },
    selling_agent_phone: {
      type: DataTypes.STRING
    },
    selling_agent_fax: {
      type: DataTypes.STRING
    },
    selling_agent_email: {
      type: DataTypes.STRING
    },
    officer_last_name: {
      type: DataTypes.STRING
    },
    officer_first_name: {
      type: DataTypes.STRING
    },
    officer_phone: {
      type: DataTypes.STRING
    },
    officer_fax: {
      type: DataTypes.STRING
    },
    officer_email: {
      type: DataTypes.STRING
    },
    deed_recording_date: {
      type: DataTypes.DATE
    },
    deed_pickup_date: {
      type: DataTypes.DATE
    }
  })

  return Thought
}
