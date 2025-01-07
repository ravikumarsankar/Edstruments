import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import classNames from "classnames";

const Label  = ({label}) =>{
  return <label>
    {label}
    <span className="asterisk">*</span>
  </label>
}

const GeneralInfo = ({ index }) => {
  return (
    <div className="general-info-content">
      <label>
        Purchase Order Number<span className="asterisk">*</span>
      </label>
      <Field
        name={`expenses[${index}].account`}
        as="select"
        className="vendor-fields"
      >
        <option value="">Select PO Number</option>
        <option value="Account 1">PO 1</option>
        <option value="Account 2">PO 2</option>
      </Field>
    </div>
  );
};

const InvoiceContent = ({ index }) => {
  return (
    <>
      <div className="invoice-subContainer">
        <div className="invoice-container-1">
         <Label label={'Invoice Number'}/>
          <Field name={`expenses[${index}].account`} as="select" className='invoice-fields'>
            <option value="">Select Vendor</option>
            <option value="Account 1">Vendor 1</option>
            <option value="Account 2">Vendor 2</option>
          </Field>
        </div>
        <div className="invoice-container-1">
         <Label label={'Total Amount'}/>
          <Field name="vendor" type="number" className='invoice-fields'/>
          <ErrorMessage name="vendor" component="div" />
        </div>
      </div>

      <div className="invoice-subContainer">
       
        <div className="invoice-container-1">
        <Label label={'Payment Terms'}/>
          <Field name={`expenses[${index}].account`} as="select" className='invoice-fields'>
            <option value="">Select</option>
            <option value="Account 1">Term 1</option>
            <option value="Account 2">Term 2</option>
          </Field>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
         <Label label={'Description'}/>
          <Field name="vendor" type="text" className='invoice-fields' />
          <ErrorMessage name="vendor" component="div" />
        </div>
      </div>
    </>
  );
};

const ExpenseDetails = ({ index }) => {
  return (
    <div className="expense-container">
      <div className='invoice-subContainer'>
        <div className="invoice-container-1">
          <Label label={'Line Amount'}/>
          <Field name="vendor" type="text" className='invoice-fields' />
          <ErrorMessage name="vendor" component="div" />
        </div>
        <div className="invoice-container-1">
         <Label label={'Department'}/>
          <Field name={`expenses[${index}].account`} as="select"  className='invoice-fields' >
            <option value="">Select Department</option>
            <option value="Account 1">Department 1</option>
            <option value="Account 2">Department 2</option>
          </Field>
        </div>
      </div>
      <div className="invoice-subContainer">
      <div className="invoice-container-1">
         <Label label={'Account'}/>
          <Field name={`expenses[${index}].account`} as="select"  className='invoice-fields' >
            <option value="">Select Account</option>
            <option value="Account 1">Savings</option>
            <option value="Account 2">Current</option>
          </Field>
        </div>
        <div className="invoice-container-1">
          <Label label={'Location'}/>
          <Field name={`expenses[${index}].account`} as="select"  className='invoice-fields' >
            <option value="">Select Location</option>
            <option value="Account 1">Chennai</option>
            <option value="Account 2">Bengaluru</option>
          </Field>
        </div>
      </div>
      
      <div className={classNames('description-container','invoice-container-1')}>
        <Label label={'Description'}/>
        <Field name="vendor" type="text"  className='invoice-fields' />
        <ErrorMessage name="vendor" component="div" />
      </div>
    </div>
  );
};

const InvoiceDetails = ({ values }) => {
  return (
    <div className="invoice-tab-container">
      <div className="invoice-tab-header">
        <label className="invoice-header-label">Invoice Details</label>
      </div>
      <FieldArray
        name="expenses"
        render={(arrayHelpers) => (
          <>
            {values?.expenses.map((expense, index) => (
              <div key={index} >
                <div className="general-info">
                  <div className="vendor-label">General Information</div>
                  <GeneralInfo index={index} />
                </div>
                <div className="invoice-content-container">
                  <div className="vendor-label">Invoice Details</div>
                  <InvoiceContent />
                </div>
                <div className="invoice-content-container">
                <div className="vendor-label">Expense Details</div>
                  <ExpenseDetails />
                </div>

                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  className={classNames('expense-btn','remove-btn')}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => arrayHelpers.push({})} className="expense-btn" >
              + Add Expense Coding
            </button>
          </>
        )}
      />
    </div>
  );
};
export default InvoiceDetails;
