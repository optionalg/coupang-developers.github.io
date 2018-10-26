import {createFileCoupangConfirmRequestDocument} from "./ko/create-file-coupang-confirm-request.document";
import {createCoupangConfirmRequestShippingDocument} from "./ko/create-coupang-confirm-request-shipping.document";
import {createCoupangConfirmRequestVendorItemDocument} from "./ko/create-coupang-confirm-request-vendoritem.document";
import {createCoupangConfirmRequestShippingVendorItemDocument} from "./ko/create-coupang-confirm-request-shippingvendoritem.document";
import {lookupCoupangConfirmRequestDocument} from "./ko/lookup-coupang-confirm-request.document";
import {withdrawCoupangConfirmRequestDocument} from "./ko/withdraw-coupang-confirm-request.document";

export const coupangConfirmApiDocs = {
  ko:[],
  en:[],
}

coupangConfirmApiDocs.ko.push(createFileCoupangConfirmRequestDocument); //쿠팡확인요청 파일 업로드 토큰 생성 
coupangConfirmApiDocs.ko.push(createCoupangConfirmRequestShippingDocument);//쿠팡확인요청 생성(부족배송비)
coupangConfirmApiDocs.ko.push(createCoupangConfirmRequestVendorItemDocument);//쿠팡확인요청 생성(상품상태이상)
coupangConfirmApiDocs.ko.push(createCoupangConfirmRequestShippingVendorItemDocument);//쿠팡확인요청 생성(부족배송비 + 상품상태이상)
coupangConfirmApiDocs.ko.push(lookupCoupangConfirmRequestDocument); //쿠팡확인요청 조회
coupangConfirmApiDocs.ko.push(withdrawCoupangConfirmRequestDocument); //쿠팡확인요청 철회 
