
import {createReturnShippingFacilityDocument} from "./ko/create-return-shipping-facility.document";
import {modifyReturnShippingFacilityDocument} from "./ko/modify-return-shipping-facility.document";
import {lookupReturnShippingFacilityDocument} from "./ko/lookup-return-shipping-facility.document";
import {createOutboundShippingFacilityDocument} from "./ko/create-outbound-shipping-facility.document";
import {lookupOutboundShippingFacilityListDocument} from "./ko/lookup-outbound-shipping-facility-list.document";
import {modifyOutboundShippingFacilityDocument} from "./ko/modify-outbound-shipping-facility.document";
import {lookupReturnShippingCentersCenterCodeDocument} from "./ko/lookup-return-shipping-centers-centercode.document";

export const distributionCenterApiDocs = {
  ko:[],
  en:[]
}

distributionCenterApiDocs.ko.push(createOutboundShippingFacilityDocument);
// Deprecated
// productApiDocs.ko.push(lookupOutboundShippingFacilityDocument);
distributionCenterApiDocs.ko.push(lookupOutboundShippingFacilityListDocument);
distributionCenterApiDocs.ko.push(modifyOutboundShippingFacilityDocument);
distributionCenterApiDocs.ko.push(createReturnShippingFacilityDocument);
distributionCenterApiDocs.ko.push(lookupReturnShippingFacilityDocument);
distributionCenterApiDocs.ko.push(modifyReturnShippingFacilityDocument);
distributionCenterApiDocs.ko.push(lookupReturnShippingCentersCenterCodeDocument);

// have to check
// lookup-return-shipping-facility-list.document

