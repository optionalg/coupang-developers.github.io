export const processingExchangeProductInvoiceUploadDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `processing-exchange-product-invoice-upload`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `processing_exchange_product_invoice_upload`,
    name: `교환상품 송장 업로드 처리`,       // use display name, i will change 'translation key'
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
        apiName: `교환상품 송장 업로드 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/invoices`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `교환상품 송장 업로드 처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/invoices`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/invoices`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/invoices`,
    _description: `교환할 상품의 운송장을 입력합니다. <br/>교환상품 입고확인 API 실행 후 에
교환요청목록 조회 시 회수상태(collectStatus) 가 업체전달완료(CompleteCollect) 일때
교환송장 업로드 처리 API를 수행하실 수 있습니다!`,
    _relation: ``,
    _referenceInfo: ` `,
    _warning: `입고확인 처리 후, 교환요청 목록 조회를 하시면 deliveryInvoiceGroupDtos 정보가 생됩니다.<br/>
                    이 때, 새롭게 생성된 shipmentBoxId를 넣어 교환 송장 업로드처리를 하시기 바랍니다.<br>     
                    입고 확인처리 후 최대 10분 이후에 교환송장 업로드처리가 가능합니다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `교환 ID`,
        _relation: ``,
        _referenceInfo: `교환요청목록 조회 시 표시되는 exchangeId 입력`,
        _warning: ``
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        type: `Number`,
        require: true,
        _description: `교환 ID`,
        _relation: ``,
        _referenceInfo: `교환요청목록 조회 시 표시되는 exchangeId 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `벤더 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `goodsDeliveryCode`,
        type: `String`,
        require: true,
        _description: `택배사 코드`,
        _relation: ``,
        _referenceInfo: `<a href="../../docs/season-2/distribution-center-api#lookup_delivery_code">택배사 코드 바로가기</a>`,
        _warning: ``,
        children: false
      },{
        name: `invoiceNumber`,
        type: `String`,
        require: true,
        _description: `운송장번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },{
        name: `shipmentBoxId`,
        type: `Number`,
        require: true,
        _description: `배송번호`,
        _relation: ``,
        _referenceInfo: `재배송을 위한 배송번호`,
        _warning: `입고확인 처리 후 교환요청목록 조회 시 deliveryInvoiceGroupDtos 정보 아래에 새로 생성된 shipmentBoxId를 입력해야합니다.`,
        children: false
      }
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `리터된 결과`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },{
          name: `resultMessage`,
          type: `String`,
          _description: `결과메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/exchangeRequests/100000170/invoices`,
    code: [
      {
        language: `http`,
        codeblock: [
          {
            "exchangeId":"100000170",
            "vendorId":"A00010028",
            "shipmentBoxId":"197277127",
            "goodsDeliveryCode":"CJGLS",
            "invoiceNumber":"123456431"
          },
          {
            "exchangeId":"100000170",
            "vendorId":"A00010028",
            "shipmentBoxId":"197277128",
            "goodsDeliveryCode":"EPOST",
            "invoiceNumber":"123456432"
          }
        ]
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "Invoice number save successfully"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
