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
      name: `반품승인 처리`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-2-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/approval`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/approval`,
    _description: `반품요청 승인`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `receiptId`,
        require: true,
        _description: `쿠팡에 확인요청할 반품접수번호`,
        _relation: `ReceiptId is from relational api: GET /v2/providers/wing_api/apis/internal-api/v1/return`,
        _referenceInfo: ``,
        _warning: `ReceiptId must be a number.`
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
          name: `resultCode`,
          type: `String`,
          _description: `결과코드`,
          _relation: ``,
          _referenceInfo: `
            <ul>
              <li>SUCCESS</li>
              <li>FAIL</li>
            </ul>`,
          _warning: ``,
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과메세지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/363585/approval',
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
      "message": "OK",
      "data": {
        "resultCode" : "SUCCESS",
        "resultMessage" : "반품승인요청이 성공했습니다."
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
