import {lookupFeesRetroactiveDocument} from "./ko/lookup-fees-retroactive.document";
import {lookupSalesHistoryDocument} from "./ko/lookup-sales-history.document";

export const settlementApiDocs = {
  ko:[],
  en:[]
};

settlementApiDocs.ko.push(lookupFeesRetroactiveDocument);
settlementApiDocs.ko.push(lookupSalesHistoryDocument);
