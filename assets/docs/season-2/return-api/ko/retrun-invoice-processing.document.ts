export const returnInvoiceProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `retrun_invoice_processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `retrun_invoice_processing.`,
    name: `회수 송장 등록`,       // use display name, i will change 'translation key'
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
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2018-05-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/return-exchange-invoices/manual`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/return-exchange-invoices/manual`,
    _description: `
        반품자동연동 서비스를 사용하지 않고 자체적으로 반품을 회수하는 판매자의 경우
        반품/교환 접수 시 본 API를 통해 수동으로 회수 송장을 등록할 수 있습니다.<br/>
        계약한 택배사가 있어 반품자동연동 서비스를 이용하는 판매자의 경우 사용하실 필요가 없습니다!       
    `,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>반품 : 반품요청 목록조회 시 status가 반품접수(RETURNS_UNCHECKED) 시,<br/>
                    교환 : 교환요청 목록조회 시 회수상태(collectStatus)가 BeforeDirection(회수연동전)일 때 사용하기 바랍니다.<br/>
                    <주의> 회수송장이 등록되었더라도 배송 트래킹이 안되거나 또는 택배기사가 물건을 회수하기 전까지는 고객이 마이쿠팡을 통해 반품철회를 할 수 있습니다. `,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      },

    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `returnExchangeDeliveryType`,
        type: `String`,
        require: true,
        _description: `반품 또는 교환 입력 (RETURN or EXCHANGE)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
         name: `receiptId`,
         require: true,
         type: `Number`,
         _description: `반품 또는 교환 접수ID<br/>반품요청 목록조회, 교환요청 목록조회 API를 통해 확인가능`,
         _relation: ``,
         _referenceInfo: ``,
         _warning: `receiptId는 반드시 number 타입이어야 합니다.`,
         children: false
      },
       {
            name: `deliveryCompanyCode`,
            type: `String`,
            require: true,
            _description: `택배사 코드`,
            _relation: ``,
            _referenceInfo: `<a href="../../docs/season-2/distribution-center-api#lookup_delivery_code">택배사 코드 바로가기</a>`,
            _warning: ``,
            children: false
       },   
      {
        name: `invoiceNumber`,
        type: `String`,
        require: true,
        _description: `운송장번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `regNumber`,
        type: `String`,
        require:false,
        _description: `택배사 회수번호 (회수번호 발행 시 입력)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `Object is null : 필수항목 미입력 시 발생`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
  ],
   responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `HTTP Status Code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `HTTP Status message`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `InvoiceNumberCreateDto`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `deliveryCompanyCode`,
          type: `String`,
          _description: `택배사코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `invoiceNumber`,
          type: `String`,
          _description: `운송장번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `invoiceNumberId`,
          type: `Number`,
          _description: `내부 invoiceNumberId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `receiptId`,
          type: `Number`,
          _description: `반품 또는 교환 접수ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `regNumber`,
          type: `String`,
          _description: `택배사 회수번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnDeliveryId`,
          type: `Number`,
          _description: `내부 returnDeliveryId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnExchangeDeliveryType`,
          type: `String`,
          _description: `RETURN or EXCHANGE`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012345/return-exchange-invoices/manual',
    code: [
      {
        language: `http`,
        codeblock: {
            "returnExchangeDeliveryType":"EXCHANGE",
            "receiptId": 101606005,
            "deliveryCompanyCode":"KDEXP",
            "invoiceNumber":"201805291435",
            "regNumber":"1234568"
        }
      }
    ],
    response: {
      "code": 200,
      "message": "OK",
      "data": {
        "deliveryCompanyCode": "KDEXP",
        "invoiceNumber": "201805291435",
        "invoiceNumberId": 26125633,
        "receiptId": 101606005,
        "regNumber": "1234568",
        "returnDeliveryId": 25726758,
        "returnExchangeDeliveryType": "EXCHANGE"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
