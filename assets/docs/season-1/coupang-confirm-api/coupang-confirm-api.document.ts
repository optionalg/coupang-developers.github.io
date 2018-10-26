
import {createExchangeProductCoupangConfirmRequestDocument} from "./ko/create-exchange-product-coupang-confirm-request.document";
import {cancelExchangeProductCoupangConfirmRequestDocument} from "./ko/cancel-exchange-product-coupang-confrim-request.document";
import {lookupReturnProductCoupangConfirmDocument} from "./ko/lookup-return-product-coupang-confirm.document";
import {createReturnProductCoupangConfirmRequestDocument} from "./ko/create-return-product-coupang-confirm-request.document";
import {modifyReturnProductCoupangConfirmRequestDocument} from "./ko/modify-return-product-coupang-confirm-request.document";
import {cancelReturnProductCoupangConfirmRequestDocument} from "./ko/cancel-return-product-coupang-confrim-request.document";
export const coupangConfirmApiDocs = {
  ko:[],
  en:[],
}


coupangConfirmApiDocs.ko.push(createExchangeProductCoupangConfirmRequestDocument);
coupangConfirmApiDocs.ko.push(cancelExchangeProductCoupangConfirmRequestDocument);

coupangConfirmApiDocs.ko.push(createReturnProductCoupangConfirmRequestDocument);
coupangConfirmApiDocs.ko.push(lookupReturnProductCoupangConfirmDocument);
coupangConfirmApiDocs.ko.push(modifyReturnProductCoupangConfirmRequestDocument);
coupangConfirmApiDocs.ko.push(cancelReturnProductCoupangConfirmRequestDocument);

