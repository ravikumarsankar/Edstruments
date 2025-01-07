import * as Yup from 'yup';

export const INVOICE_TAB = {
    VENDOR_DETAILS: 'Vendor Details',
    INVOICE_DETAILS: 'Invoice Details',
    COMMENTS: 'Comments',
};
export const INVOICE_TABS = [INVOICE_TAB.VENDOR_DETAILS, INVOICE_TAB.INVOICE_DETAILS, INVOICE_TAB.COMMENTS];

export const invoiceFormState = {
    vendor: "",
    purchaseOrder: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    dueDate: "",
    glPostDate: "",
    description: "",
    expenses: [{ lineAmount: "", account: "", department: "", location: "", description: "" }],
    comments: "",
  };
 export  const validationSchema = Yup.object({
    vendor: Yup.string().required("Vendor is required"),
    purchaseOrder: Yup.string().required("Purchase Order is required"),
    invoiceNumber: Yup.string().required("Invoice Number is required"),
    invoiceDate: Yup.date().required("Invoice Date is required"),
    totalAmount: Yup.number().required("Total Amount is required"),
    paymentTerms: Yup.string().required("Payment Terms are required"),
    dueDate: Yup.date().required("Due Date is required"),
    glPostDate: Yup.date().required("GL Post Date is required"),
    description: Yup.string().required("Description is required"),
    expenses: Yup.array().of(
      Yup.object({
        lineAmount: Yup.number().required("Line Amount is required"),
        account: Yup.string().required("Account is required"),
        department: Yup.string().required("Department is required"),
        location: Yup.string().required("Location is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
  });