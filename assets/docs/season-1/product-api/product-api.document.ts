import {createSellerProductDocument} from "./ko/create-seller-product.document";
import {modifySellerProductDocument} from "./ko/modify-seller-product.document";
import {deleteSellerProductDocument} from "./ko/delete-seller-product.document";
import {lookupSellerProductDocument} from "./ko/lookup-seller-product.document";
import {lookupSellerProductListPagingDocument} from "./ko/lookup-seller-product-list-paging.document";
import {requestForProductApprovalDocument} from "./ko/request-for-product-approval.document";
import {lookupProductModifyHistoryDocument} from "./ko/lookup-product-modify-history.document";
import {lookupProductSummaryDocument} from "./ko/lookup-product-summary.document";
import {lookupQuantityPriceStatusByProductDocument} from "./ko/lookup-quantity-price-status-by-product.document";
import {changeQuantityByProductDocument} from "./ko/change-quantity-by-product.document";
import {changePriceByProductDocument} from "./ko/change-price-by-product.document";
import {changeSaleStatusToResumptionByProductDocument} from "./ko/change-sale-status-to-resumption-by-product.document";
import {changeSaleStatusToStopByProduct} from "./ko/change-sale-status-to-stop-by-product.document";
import {changePriceBasedOnDiscountRateByProductDocument} from "./ko/change-price-based-on-discount-rate-by-product.document";
import {lookupExposureProductListPagingDocument} from "./ko/lookup-exposure-product-list-paging.document";
import {lookupProductCertificationInformationDocument} from "./ko/lookup-product-certification-information.document";
import {createOutboundShippingFacilityDocument} from "./ko/create-outbound-shipping-facility.document";
import {lookupOutboundShippingFacilityDocument} from "./ko/lookup-outbound-shipping-facility.document";
import {modifyOutboundShippingFacilityDocument} from "./ko/modify-outbound-shipping-facility.document";
import {lookupSellerProductListPeriodDocument} from "./ko/lookup-seller-product-list-period.document";
import {applyProductCashbackDocument} from "./ko/apply-product-cashback.document";
import { removeProductCashbackDocument } from './ko/remove-product-cashback.document';

export const productApiDocs = {
  ko: [],
  en: []
};

productApiDocs.ko.push(createSellerProductDocument);
productApiDocs.ko.push(requestForProductApprovalDocument);
productApiDocs.ko.push(modifySellerProductDocument);
productApiDocs.ko.push(deleteSellerProductDocument);
productApiDocs.ko.push(lookupSellerProductDocument);

// Deprecated
// productApiDocs.ko.push(lookupSellerProductListDocument);
productApiDocs.ko.push(lookupSellerProductListPagingDocument);
productApiDocs.ko.push(lookupSellerProductListPeriodDocument);
productApiDocs.ko.push(lookupExposureProductListPagingDocument);

productApiDocs.ko.push(lookupProductModifyHistoryDocument);
productApiDocs.ko.push(lookupProductSummaryDocument);

productApiDocs.ko.push(lookupQuantityPriceStatusByProductDocument);
productApiDocs.ko.push(changeQuantityByProductDocument);
productApiDocs.ko.push(changePriceByProductDocument);
productApiDocs.ko.push(changeSaleStatusToResumptionByProductDocument);
productApiDocs.ko.push(changeSaleStatusToStopByProduct);
productApiDocs.ko.push(changePriceBasedOnDiscountRateByProductDocument);

// Deprecated
// productApiDocs.ko.push(lookupProductCertificationInformationDocument);
productApiDocs.ko.push(applyProductCashbackDocument);
productApiDocs.ko.push(removeProductCashbackDocument);
