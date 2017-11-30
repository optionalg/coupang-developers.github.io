import {lookupOrderListPerDayDocument} from "./ko/lookup-order-list-per-day.document";
import {lookupOrderListPerMinuteDocument} from "./ko/lookup-order-list-per-minute.document";
import {lookupOrderBookDocument} from "./ko/lookup-order-book.document";
import {lookupDeliveryModifyHistoryDocument} from "./ko/lookup-delivery-modify-history.document";
import {productPreparationProcessingDocument} from "./ko/product-preparation-processing.document";
import {invoiceUploadProcessingDocument} from "./ko/invoice-upload-processing.document";
import {stopShippingCompleteProcessingDocument} from "./ko/stop-shipping-complete-processing.document";
import {paymentCompleteRefundDocument} from "./ko/payment-complete-refund.document";
import {productAlreadyShippedProcessingDocument} from "./ko/products-already-shipped-processing.document";

export const deliveryApiDocs = {
  ko: [],
  en: []
};

deliveryApiDocs.ko.push(lookupOrderListPerDayDocument);
deliveryApiDocs.ko.push(lookupOrderListPerMinuteDocument);
deliveryApiDocs.ko.push(lookupOrderBookDocument);
deliveryApiDocs.ko.push(lookupDeliveryModifyHistoryDocument);
deliveryApiDocs.ko.push(productPreparationProcessingDocument);
deliveryApiDocs.ko.push(invoiceUploadProcessingDocument);
deliveryApiDocs.ko.push(stopShippingCompleteProcessingDocument);
deliveryApiDocs.ko.push(productAlreadyShippedProcessingDocument);
deliveryApiDocs.ko.push(paymentCompleteRefundDocument);
