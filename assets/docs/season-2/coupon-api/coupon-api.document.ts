import {createCouponDocument} from "./ko/create-coupon.document";
import {deleteCouponDocument} from "./ko/delete-coupon.document";
import {createCouponItemDocument} from "./ko/create-coupon-item.document";
import {deleteCouponItemDocument} from "./ko/delete-coupon-item.document";
import {lookupRequestStatusDocument} from "./ko/lookup-request-status.document";
import {lookupCouponListByStatusDocument} from "./ko/lookup-coupon-list-by-status.document";
import {lookupCouponItemListByStatusDocument} from "./ko/lookup-coupon-item-list-by-status.document";
import {lookupCouponItemByCouponitemidDocument} from "./ko/lookup-coupon-item-by-couponitemid.document";
import {lookupCouponItemByVendoritemidDocument} from "./ko/lookup-coupon-item-by-vendoritemid.document";
import {lookupCouponItemByOrderIdDocument} from "./ko/lookup-coupon-item-by-oreder-id.document";
import {lookupBudgetStatusDocument} from "./ko/lookup-budget-status.document";

export const couponApiDocs = {
  ko:[],
  en:[],
}

couponApiDocs.ko.push(createCouponDocument); //쿠폰생성 
couponApiDocs.ko.push(deleteCouponDocument);//쿠폰파기
couponApiDocs.ko.push(createCouponItemDocument);//쿠폰아이템 생성 
couponApiDocs.ko.push(deleteCouponItemDocument);//쿠폰아이템 파기
couponApiDocs.ko.push(lookupRequestStatusDocument);//요청상태 확인
couponApiDocs.ko.push(lookupCouponListByStatusDocument); //쿠폰목록 상태별 조회
couponApiDocs.ko.push(lookupCouponItemListByStatusDocument);// 쿠폰아이템목록 상태별 조회
couponApiDocs.ko.push(lookupCouponItemByCouponitemidDocument);// 쿠폰아이템 목록 쿠폰아이템아이디로 조회 
couponApiDocs.ko.push(lookupCouponItemByVendoritemidDocument);// 쿠폰아이템 목록 벤더아이템아이디로 조회
couponApiDocs.ko.push(lookupCouponItemByOrderIdDocument); // 주문번호로 쿠폰 적용 아이템 조회
couponApiDocs.ko.push(lookupBudgetStatusDocument); // 예산현황 조회
