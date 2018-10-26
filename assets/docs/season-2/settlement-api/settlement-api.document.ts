import {lookupFeesRetroactiveDocument} from "./ko/lookup-fees-retroactive.document";
import {lookupSalesHistoryDocument} from "./ko/lookup-sales-history.document";
import { lookupAllSettlementInfoDocument } from './ko/lookup-all-settlementInfo.document';
import { lookupSettlementInfoByOrderIdDocument } from './ko/lookup-settlementInfo-by-order-id.document';

export const settlementApiDocs = {
  ko:[],
  en:[]
};

settlementApiDocs.ko.push(lookupFeesRetroactiveDocument);
settlementApiDocs.ko.push(lookupSalesHistoryDocument);
settlementApiDocs.ko.push(lookupAllSettlementInfoDocument);
settlementApiDocs.ko.push(lookupSettlementInfoByOrderIdDocument);
