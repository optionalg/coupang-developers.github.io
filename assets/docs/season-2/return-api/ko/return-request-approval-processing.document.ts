export const returnRequestApprovalProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `return-request-approval-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `return_request_approval_processing`,
    name: `반품요청 승인 처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `반품승인 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/approval`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품요청 승인 처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/approval`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-2-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PATCH`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/approval`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/approval`,
    _description: `
    빠른환불(선환불)조건에 해당하지 않는 상품의 반품이나 반품 회수가 완료되었는데 반품회수의 상태에 머물러 있는 경우에는<br>
    반품요청 승인 처리를 판매자가 해주시면 반품승인,반품 완료로 진행됩니다.  
    `,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      },
      {
          name: `receiptId`,
          require: true,
          _description: `취소(반품)접수번호`,
          _relation: `ReceiptId는 반품요청 목록 조회API를 통해 확인가능합니다.`,
          _referenceInfo: ``,
          _warning: `ReceiptId는 반드시 number타입이어야 합니다.`
        }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `receiptId`,
        type: `Number`,
        require: true,
        _description: `반품접수Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `cancelCount`,
        type: `Number`,
        require: true,
        _description: `반품접수 수량`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: false,
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
      _description: `성공 혹은 실패시 해당 결과메시지가 나타남`,
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
      children:false,
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00013264/returnRequests/363585/approval',
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId" : "A00013264",
          "receiptId" : 363585,
          "cancelCount" : 1
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
