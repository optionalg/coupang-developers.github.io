
import {lookupCustomerInquiryByProductDocument} from "./ko/lookup-customer-inquiry-by-product.document";
import {customerEnquiryResponseDocument} from "./ko/answer-to-customer-inquiry.document";
import {lookupCustomerServiceCenterEnquiryDocument} from "./ko/lookup-coupang-call-center-inquiry.document";
import {customerServiceCenterEnquiryResponseDocument} from "./ko/answer-to-coupang-call-center-inquiry.document";
export const customerServiceApiDocs = {
  ko:[],
  en:[]
};

customerServiceApiDocs.ko.push(lookupCustomerInquiryByProductDocument);
customerServiceApiDocs.ko.push(customerEnquiryResponseDocument);
customerServiceApiDocs.ko.push(lookupCustomerServiceCenterEnquiryDocument);
customerServiceApiDocs.ko.push(customerServiceCenterEnquiryResponseDocument);
