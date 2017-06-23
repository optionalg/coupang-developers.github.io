
import {lookupReturnRequestListPerDayDocument} from "./ko/lookup-return-request-list-per-day.document";
import {lookupReturnRequestListPerMinuteDocument} from "./ko/lookup-return-request-list-per-minute.document";
import {lookupReturnByProductDocument} from "./ko/lookup-return-request-by-product.document";
import {returnRequestProductReceiptConfirmationProcessingDocument} from "./ko/return-request-product-receipt-confirmation-processing.document";
import {returnRequestApprovalProcessingDocument} from "./ko/return-request-approval-processing.document";
export const returnApiDocs = {
  ko: [],
  en: []
};

returnApiDocs.ko.push(lookupReturnRequestListPerDayDocument);
returnApiDocs.ko.push(lookupReturnRequestListPerMinuteDocument);
returnApiDocs.ko.push(lookupReturnByProductDocument);
returnApiDocs.ko.push(returnRequestProductReceiptConfirmationProcessingDocument);
returnApiDocs.ko.push(returnRequestApprovalProcessingDocument);
