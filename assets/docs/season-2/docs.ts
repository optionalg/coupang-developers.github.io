import {cancelApiDocs} from "./cancel-api/cancel-api.document";
import {customerServiceApiDocs} from "./customer-service-api/customer-service-api.document";
import {deliveryApiDocs} from "./delivery-api/delivery-api.document";
import {exchangeApiDocs} from "./exchange-api/exchange-api.document";
import {productApiDocs} from "./product-api/product-api.document";
import {returnApiDocs} from "./return-api/return-api.document";
import {returnProductCoupangConfirmApiDocs} from "./return-product-coupang-confirm-api/return-product-coupang-confirm-api.document";
import {settlementApiDocs} from "./settlement-api/settlement-api.document";
import {stopShippingApiDocs} from "./stop-shipping-api/stop-shiping-api.document";

const data = [];
data.push(cancelApiDocs);
data.push(customerServiceApiDocs);
data.push(deliveryApiDocs);
data.push(exchangeApiDocs);
data.push(productApiDocs);
data.push(returnApiDocs);
data.push(returnProductCoupangConfirmApiDocs);
data.push(settlementApiDocs);
data.push(stopShippingApiDocs);

export const docs = {
  ko:[],
  en:[]
};

