import React from "react";
import {  Field, ErrorMessage } from "formik";
const VendorDetails = () => {
  return (
    
          <div className="vendor-container">
            <div className="vendor-header">Vendor Details</div>
            <div className="vendor-info">
              <div className="vendor-label">Vendor information </div>
              <div className="vendor-field">
                <label for="name">
                  Vendor <span className="asterisk">*</span>
                </label>
               
                  <Field name="vendor" as="select" className='vendor-fields'>
                    <option value="">Select Vendor</option>
                    <option value="Vendor 1">Vendor 1</option>
                    <option value="Vendor 2">Vendor 2</option>
                  </Field>
                <span className="vendor-details">View Vendor Details</span>
              </div>
            </div>
            <ErrorMessage name="vendor" component="div" />
          </div>
        
  );
};
export default VendorDetails;
