export const applyProductCashbackDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `apply-product-cashback`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `apply_product_cashback`,
    name: `상품 옵션 캐시백 저장`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
    
  },
  
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    HMACPath: `/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    _description: `Seller can use this API to set cash back rule to vendorItems. This API is applicable to vendorItems used the same cash back rule, and the allowed cash back types are RATE, FIXED and FIXED_WITH_QUANTITY.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: ``,
        require: false,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `ruleId`,
        require: true,
        _description: `Rule ID`,
        _relation: ``,
        _referenceInfo: `When seller make the rule. Coupang provide them ruleId and they save the ruleId.`,
        _warning: ``,
        children: false
      },
      {
        name: `valueType`,
        require: true,
        _description: `Cash back type`,
        _relation: ``,
        _referenceInfo: `Allowed values: RATE; FIXED;FIXED_WITH_QUANTITY.`,
        _warning: ``,
        children: false
      },
      {
        name: `value`,
        require: true,
        _description: `Cash back value`,
        _relation: ``,
        _referenceInfo: `Min value is 1;
If valueType is RATE : min value is 1, and max value is 100.`,
        _warning: ``,
        children: false
      },
      {
        name: `maxAmount`,
        require: false,
        _description: `Cash back maxAmount`,
        _relation: ``,
        _referenceInfo: `Min value is 0;
if valueType is FIXED and FIXED_WITH_QUANTITY, this parameter isn't needed;
if valueType is RATE, this parameter is mandatory.`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemIds`,
        require: true,
        _description: `VendorItemIds' list,and the max list size is 50`,
        _relation: ``,
        _referenceInfo: `Must not be empty. Those vendorItemsId which want to apply one cash back rule.`,
        _warning: ``,
        children: false
      },
      {
        name: `startAt`,
        require: true,
        _description: `Cash back rule effective date `,
        _relation: ``,
        _referenceInfo: `The start time should be after 2 hours later from now.
        format: yyyy-MM-ddTHH:mm:ss`,
        _warning: ``,
        children: false
      },
      {
        name: `endAt`,
        require: true,
        _description: `Cash back rule expiry date `,
        _relation: ``,
        _referenceInfo: `format: yyyy-MM-ddTHH:mm:ss`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `RuleId can't be null, and must be numeric`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Cashback type can't be empty, and the allowed values are FIXED,RATE and FIXED_WITH_QUANTITY.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Cashback value can't be null,and the min value is 1`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `vendorItemIds'list can't be empty, the min size is 1, and max size is 50`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The start or end time of Cashback rule can't be empty`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `successVendorItemIds`,
          type: `Array`,
          _description: `List the vendorItemIds which apply the cash back rule successfully`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `failVendorItemIds`,
          type: `Array`,
          _description: `List the vendorItemIds and corresponding error message which apply the cash back rule failed`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    code: [
      {
        language: `http`,
        codeblock: {
          "ruleId": "3944",
          "valueType": "FIXED",
          "value": "1000",
          "maxAmount": "",
          "vendorItemIds": [
            "3000001897",
            "3000001887"
          ],
          "startAt": "2016-12-24T10:43:54",
          "endAt": "2017-01-01T10:43:54"
        }
      }
    ],
    response: {
      "code": 206,
      "message": "PARTIAL_CONTENT",
      "data": {
        "successVendorItemIds": [
          "3000001886"
        ],
        "failVendorItemIds": [
          {
            "3000001905": "Invalid vendorItemId, vendorItemId doesn't exist or doesn't belong to corresponding vendorId"
          }
        ]
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
