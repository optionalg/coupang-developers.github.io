import {lookupBudgetStatusDocument} from "./ko/lookup-budget-status.document";
import {lookupContractListDocument} from "./ko/lookup-contract-list.document";
import {lookupContractDocument} from "./ko/lookup-contract.document";
import {createContractDocument} from "./ko/create-contract.document";
import {createCouponDocument} from "./ko/create-coupon.document";
import {lookupCouponDocument} from "./ko/lookup-coupon.document";
import {lookupCouponListByStatusDocument} from "./ko/lookup-coupon-list-by-status.document";
import {lookupCouponListByOrderIdDocument} from "./ko/lookup-coupon-list-by-order-id.document";
import {deleteCouponDocument} from "./ko/delete-coupon.document";
import {createCouponItemDocument} from "./ko/create-coupon-item.document";
import {lookupCouponItemListByStatusDocument} from "./ko/lookup-coupon-item-list-by-status.document";
import {lookupCouponItemByCouponitemidDocument} from "./ko/lookup-coupon-item-by-couponitemid.document";
import {lookupCouponItemByVendoritemidDocument} from "./ko/lookup-coupon-item-by-vendoritemid.document";
import {lookupCouponItemByOrderIdDocument} from "./ko/lookup-coupon-item-by-order-id.document";
import {deleteCouponItemDocument} from "./ko/delete-coupon-item.document";
import {lookupRequestStatusDocument} from "./ko/lookup-request-status.document";

export const couponApiDocs = {
  ko:[],
  en:[],
}

couponApiDocs.ko.push(lookupBudgetStatusDocument); //예산현황 조회
couponApiDocs.ko.push(lookupContractListDocument);//계약서 목록 조회 NEW
couponApiDocs.ko.push(lookupContractDocument);//계약서 단건 조회 NEW
couponApiDocs.ko.push(createContractDocument);//자유계약 생성 NEW
couponApiDocs.ko.push(createCouponDocument); //쿠폰생성 v1, v2 MERGE
couponApiDocs.ko.push(lookupCouponDocument);//쿠폰 단건 조회 NEW
couponApiDocs.ko.push(lookupCouponListByStatusDocument); //쿠폰목록 상태별 조회  v1, v2 MERGE
couponApiDocs.ko.push(lookupCouponListByOrderIdDocument);//주문번호로 프로모션정보 조회 v1, v2 MERGE
couponApiDocs.ko.push(deleteCouponDocument);//쿠폰파기
couponApiDocs.ko.push(createCouponItemDocument);//쿠폰아이템 생성 
couponApiDocs.ko.push(lookupCouponItemListByStatusDocument);//쿠폰아이템목록 상태별 조회
couponApiDocs.ko.push(lookupCouponItemByCouponitemidDocument);//쿠폰아이템 목록 쿠폰아이템아이디로 조회 
couponApiDocs.ko.push(lookupCouponItemByVendoritemidDocument);//쿠폰아이템 목록 벤더아이템아이디로 조회
//couponApiDocs.ko.push(lookupCouponItemByOrderIdDocument); //주문정보로 쿠폰적용 아이템 조회  --> 주문번호로 프로모션정보 조회로 대체 
couponApiDocs.ko.push(deleteCouponItemDocument);//쿠폰아이템 파기
couponApiDocs.ko.push(lookupRequestStatusDocument);//요청상태 확인
