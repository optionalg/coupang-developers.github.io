export const lookupFeesRetroactiveDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `settlement-api`,   // input category ex) exchange-service-api
    id: `lookup-fees-retroactive`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_fees_retroactive`,
    name: `수수료 소급분 조회`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-01-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/greatwall_api/apis/api/v1/settlement/goods/fee-corrections/inquiries/{vendorId}`,
    HMACPath: `/v2/providers/greatwall_api/apis/api/v1/settlement/goods/fee-corrections/inquiries/{vendorId}`,
    _description: `수수료소급분을 조회할수 있다. 수수료소급분이란 수수료 변경에 따라 지급해줘야하는 금액.

예:

수수료가 9%였는데 7%로 변경시 2% 소급해줘야하는 금액을 수수료소급분으로 지칭한다;
수수료가 변경되지 않을경우 수수료소급분은 0.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `path Vendor id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    
    ],
    queryStringParameters: [
      {
        name: `recognitionDate`,
        require: true,
        _description: `recognition date`,
        _relation: ``,
        _referenceInfo: `매출인식일 형식: yyyy-MM-dd`,
        _warning: ``
      },
      {
        name: `nextToken`,
        require: true,
        _description: `next page start`,
        _relation: ``,
        _referenceInfo: `다음 페이지를 호출하기
위한 토컨값(검색 시작시
index, 첫 페이지 호출시 0 입력)`,
        _warning: ``
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `this parameter for page per limit`,
        _relation: ``,
        _referenceInfo: `페이지당 최대 호출개수

(default = 50, min = 1, max = 50)`,
        _warning: ``
        // _warning: `if maxPerPage is null,set default value 50;if maxPerPage > 50,return message: "maxPerPage should be less than:50;if maxPerPage<1,return message: "maxPerPage should be more than:1`
      }
    ],
    bodyParameters: false
  },
  errorSpec: [
    {
      status: 400,
      _description: `The vendorId in requestBody doesn't match the one got from api-gateway.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maxPerPage should be less than:50`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maxPerPage should be more than:1`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `nextToken should be digital...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `input nextToken should be more than:0`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `recognitionDate should be not blank and:yyyy-MM-dd`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `recognitionDate should be less than today;`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `maybe call some internal api errors`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: `call other api exception`
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
      name: `hasNext`,
      type: `Boolean`,
      _description: `has next data`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `nextToken`,
      type: `Number`,
      _description: `nextToken`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `GoodsFeeCorrectionOutputDto`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `saleType`,
          type: `String`,
          _description: `
          <table class="table">
          <tr>
            <th>ReturnParameter</th>     
            <th>Meaning</th>
          </tr>
          <tr>
            <td>SA</td>
            <td>매출형태, 판매</td>
          </tr>
          <tr>
            <td>RT</td>
            <td>이달취소</td>
          </tr>
          <tr>
            <td>RP</td>
            <td>전달취소</td>
          </tr>
          </table>`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `recognitionDate`,
          type: `String`,
          _description: `e.g:2015-12-12`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorItemId`,
          type: `String`,
          _description: `vendorItemId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `orderId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `feeCorrection`,
          type: `Number`,
          _description: `feeCorrection`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `feeCorrectionVat`,
          type: `Number`,
          _description: `feeCorrectionVat`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v1/settlement/goods/fee-corrections/inquiries/A0002475?recognitionDate=2016-12-30&nextToken=1&maxPerPage=20`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00012697",
          "recognitionDate": "2016-09-18",
          "nextToken": "0",
          "maxPerPage": 50
        }
      }
    ],
    response: {
      "code": 200,
      "message": "OK",
      "data": [
        {
          "vendorItemId": 3020196356,
          "saleDate": "2016-10-06",
          "recognitionDate": "2016-11-11",
          "orderId": 22000001785905,
          "feeCorrection": -43883,
          "feeCorrectionVat": -4389
        }
      ],
      "hasNext": true,
      "nextToken": 63963
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
