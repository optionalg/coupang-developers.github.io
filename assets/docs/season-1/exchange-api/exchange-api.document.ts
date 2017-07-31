import {lookupChangeRequestListDocument} from "./ko/lookup-change-request-list.document";
import {exchangeRequestProductReceiptConfirmationProcessingDocument} from "./ko/exchange-request-product-receipt-confirmation-processing.document";
import {exchangeRequestDenyProcessingDocument} from "./ko/exchange-request-deny-processing.document";
import {processingExchangeProductInvoiceUploadDocument} from "./ko/processing-exchange-product-invoice-upload.document";

export const exchangeApiDocs = {
  ko:[],
  en:[]
};

exchangeApiDocs.ko.push(lookupChangeRequestListDocument);
exchangeApiDocs.ko.push(exchangeRequestProductReceiptConfirmationProcessingDocument);
exchangeApiDocs.ko.push(exchangeRequestDenyProcessingDocument);
exchangeApiDocs.ko.push(processingExchangeProductInvoiceUploadDocument)
