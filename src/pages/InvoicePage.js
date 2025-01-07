import React, { useState, useEffect } from "react";
import TabNavigation from "../components/TabNavigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  INVOICE_TAB,
  INVOICE_TABS,
  invoiceFormState,
} from "../utils/invoiceServices";
import VendorDetails from "../components/Tabs/VendorDetails";
import InvoiceDetails from "../components/Tabs/InvoiceDetails";
import Comments from "../components/Tabs/Comments";
import { validationSchema } from "../utils/invoiceServices";
import FileUpload from "../components/FileUpload";
import TabContent from "../components/TabContent";
import { Formik, Form } from "formik";
import classNames from "classnames";

const TabRender = ({ tab, values }) => {
  switch (tab) {
    case INVOICE_TAB.VENDOR_DETAILS:
      return <VendorDetails />;
    case INVOICE_TAB.INVOICE_DETAILS:
      return <InvoiceDetails values={values} />;
    case INVOICE_TAB.COMMENTS:
      return <Comments />;
    default:
      return null;
  }
};
const InvoiceHeader = ({
  handleLogout,
  activeTab,
  setActiveTab,
  onTabChange,
}) => {
  return (
    <div className="invoice-header-container">
      <div className="invoice-header">
        <div className="arrow-icon">
          <KeyboardBackspaceIcon onClick={handleLogout} style={{cursor:'pointer'}} />
        </div>

        <h1 className="header-label">Create New Invoice</h1>
      </div>

      <TabNavigation
        tabs={INVOICE_TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTabChange={onTabChange}
      />
    </div>
  );
};
const InvoicePage = ({setLoggedIn}) => {
  const sectionsRefs = React.useRef({});
  const [initialValues, setInitialValues] = useState(invoiceFormState);
  const [activeTab, setActiveTab] = useState(INVOICE_TAB.VENDOR_DETAILS);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("invoiceData"));
    if (savedData) setInitialValues(savedData);
  }, []);

  useEffect(() => {
    const currentRef = sectionsRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleTab = entry.target.id;
            setActiveTab(visibleTab);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 } // Observe 60% visibility
    );

    Object.values(currentRef).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(currentRef).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session");
    setLoggedIn(false)
  };

  const handleSubmit = (values) => {
    localStorage.setItem("invoiceData", JSON.stringify(values));
    alert("Invoice saved successfully!");
  };
  const handleTabChange = (activeTab) => {
    const sectionRef = sectionsRefs.current[activeTab];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth", block:'start'});
    }
  };

  return (
    <div className="invoice-container">
      <InvoiceHeader
        handleLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTabChange={handleTabChange}
      />
      <div className="invoice-content">
        <FileUpload />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => {
            return (
              <Form>
                <div className="invoice-form-container">
                  {INVOICE_TABS.map((tab) => {
                    return (
                      <div key={tab}>
                      <TabContent
                        tabId={tab}
                        ref={(element) => (sectionsRefs.current[tab] = element)}
                      >
                        <TabRender tab={tab} values={values} />
                      </TabContent>
                      </div>
                    );
                  })}
                </div>

                <button className={classNames('expense-btn','remove-btn')} type="submit">Save Invoice</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default InvoicePage;
