import {lookupExposureCategoryListDocument} from "./ko/lookup-exposure-category-list.document";
import {exposureCategoryValidationDocument} from "./ko/exposure-category-validation.document";
import {lookupCategoryMetaInfoUseIdDocument} from "./ko/lookup-category-meta-info-use-id.document";
import {lookupCategoryMetaInfoUseCodeDocument} from "./ko/lookup-category-meta-info-use-code.document";
import {lookupExposureCategoryDocument} from "./ko/lookup-exposure-category.document";
export const categoryApiDocs = {
  ko: [],
  en: []
};

// Deprecated
// productApiDocs.ko.push(lookupCategoryListDocument);
// productApiDocs.ko.push(lookupSubcategoryListDocument);

categoryApiDocs.ko.push(lookupExposureCategoryDocument);
categoryApiDocs.ko.push(lookupExposureCategoryListDocument);
categoryApiDocs.ko.push(exposureCategoryValidationDocument);
// Deprecated
// categoryApiDocs.ko.push(lookupCategoryMetaInfoUseIdDocument);
categoryApiDocs.ko.push(lookupCategoryMetaInfoUseCodeDocument);

