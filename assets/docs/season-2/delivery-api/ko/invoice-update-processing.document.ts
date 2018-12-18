export const invoiceUpdateProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `invoice-update-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `invoice_update_processing`,
    name: `송장업데이트 처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2018-08-21
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2018-08-21
    developer: `Seattle`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/updateInvoices`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/updateInvoices`,
    _description: `잘못 등록한 운송장 내용을 변경합니다.  <br/>변경된 운송장의 배송상태는 배송지시(DEPARTURE)로 변경되며 이후 트래킹 정보 연동에 따라 변경될 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>배송상태가 배송지시(DEPARTURE), 배송중(DELIVERING), 배송완료(FINAL_DELIVERY), 업체직송(NONE_TRACKING) 상태일 때만 운송장정보 변경이 가능합니다.
                (나머지 상태에서는 에러 발생).`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체에게 발급한 고유 코드. Wing 로그인 후 확인 가능`,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체에게 발급한 고유 코드. Wing 로그인 후 확인 가능`,
        _warning: ``,
        children: false
      },
      {
        name: `orderSheetInvoiceApplyDtos`,
        type: `Object`,
        require: true,
        _description: `배송지시 상태로 변경할 대상 정보 목록`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `shipmentBoxId`,
            type: `Number`,
            require: true,
            _description: `배송번호(=묶음배송번호)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `orderId`,
            type: `Number`,
            require: true,
            _description: `주문번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `deliveryCompanyCode`,
            type: `String`,
            require: true,
            _description: `변경할 택배사 코드`,
            _relation: ``,
            _referenceInfo: `<a href="../../docs/season-2/distribution-center-api#lookup_delivery_code">택배사 코드 바로가기</a>`,
            _warning: ``,
            children: false
          },
          {
            name: `invoiceNumber`,
            type: `String`,
            require: true,
            _description: `변경할 송장번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `옵션Id`,
            _relation: ``,
            _referenceInfo: `송장을 업데이트할 상품의 옵션 ID를 입력.`,
            _warning: ``,
            children: false
          },
          {
            name: `splitShipping`,
            type: `String`,
            require: true,
            _description: `분리배송 여부`,
            _relation: ``,
            _referenceInfo: `● false(전체배송) <br> 1개의 주문번호에 포함된 전체 상품을 1개의 송장번호로 배송하는 경우 <br>
            ● true(분리배송) <br> 1개의 주문번호에 포함 된 상품을 분리하여 여러 송장번호로 배송하는 경우`,
            _warning: ``,
            children: false
          },
          {
            name: `preSplitShipped`,
            type: `String`,
            require: true,
            _description: `분리 배송중인지 여부`,
            _relation: ``,
            _referenceInfo: `● false <br> 분리배송을 하지 않는 경우 (=splitshipping이 false인 경우)<br>
            해당 주문번호에 대해 처음으로 분리배송처리 할 경우 <br>
            ● true <br> 해당 주문번호에 이미 분리배송을 진행한 상품이 있을 경우`,
            _warning: ``,
            children: false
          },
          {
            name: `estimatedShippingDate`,
            type: `String`,
            require: true,
            _description: `(분리배송)출고예정일`,
            _relation: ``,
            _referenceInfo: `YYYY-MM-DD 포멧으로 분리배송 시에만 선택적으로 입력.
            <br> 입력 하지 않는 경우 "" 공백을 입력한다.`,
            _warning: `분리배송 시, 송장번호 또는 출고예정일 둘 중 한가지만 입력.`,
            children: false
          },
        ]
      },
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `responseCode`,
          type: `Number`,
          _description: `request 전체결과값에 대한 상태메세지`,
          _relation: ``,
          _referenceInfo: `

          <table class="table">
               <tr>
                  <th>code</th>
                  <th>message</th>
                  <th>remark</th>
                </tr>
                <tr>
                  <td>-1</td>
                  <td>NONE</td>
                  <td>결과없음</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>SUCCESS</td>
                  <td>성공</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>PARTIAL_ERROR</td>
                  <td>부분실패</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>FAILED</td>
                  <td>실패</td>
                </tr>
            </table>
          `,
          _warning: ``,
          children: false,
        },
        {
          name: `responseMessage`,
          type: `String`,
          _description: `request 전체결과값에 대한 상태메세지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `responseList`,
          type: `Array`,
          _description: `개별 건에 대한 결과셋`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `shipmentBoxId`,
              type: `Number`,
              _description: `배송번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `succeed`,
              type: `Boolean`,
              _description: `성공여부`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `resultCode`,
              type: `String`,
              _description: `결과코드`,
              _relation: ``,
              _referenceInfo: `
               <table class="table">
                 <tr>
                    <th>code</th>
                    <th>retry required</th>
                    <th>remark</th>
                  </tr>
                  <tr>
                    <td>OK</td>
                    <td>false</td>
                    <td>성공</td>
                  </tr>
                  <tr>
                    <td>NOT_FOUND_SHIPMENT_BOX</td>
                    <td>false</td>
                    <td>존재하지 않는 송장번호입니다.</td>
                  </tr>
                  <tr>
                    <td>INVALID_STATUS</td>
                    <td>false</td>
                    <td>배송진행상태가 유효하지 않습니다.</td>
                  </tr>
                  <tr>
                    <td>PERMISSION_DENIED</td>
                    <td>true</td>
                    <td>권한이 없습니다.</td>
                  </tr>
                  <tr>
                    <td>DUPLICATE_INVOICE_NUMBER</td>
                    <td>true</td>
                    <td>이미 저장된 송장번호가 있습니다.</td>
                  </tr>
                  <tr>
                    <td>INVALID_INVOICE_NUMBER</td>
                    <td>true</td>
                    <td>송장번호가 유효하지 않습니다.</td>
                  </tr>
                  <tr>
                    <td>ORDER_DELIVERY_CANCELED</td>
                    <td>false</td>
                    <td>취소된 주문건입니다. or 출고 준비중 상태인경우-> 출고중지 요청건입니다.</td>
                  </tr>
                  <tr>
                    <td>ORDER_DELIVERY_PARTIAL_STOP_REQUESTED</td>
                    <td>true</td>
                    <td>출고중지 요청건입니다.</td>
                  </tr>
                  <tr>
                    <td>ORDER_DELIVERY_CANCELED_HOLDING_FOR_CANCEL</td>
                    <td>true</td>
                    <td>취소대기상태의 주문건입니다.</td>
                  </tr>
                  <tr>
                    <td>UNDEFINED_ERROR_OCCUR</td>
                    <td>true</td>
                    <td>알수없는 오류</td>
                  </tr>
                  <tr>
                    <td>NOT_ALLOW_INVOICE_NUMBER_RE_UPLOAD</td>
                    <td>false</td>
                    <td>이미 저장된 송장번호가 있어, 송장번호 등록이 불가능합니다. (동일송장번호 업로드 조건 : 주문자/수취인정보 동일)</td>
                  </tr>
                  <tr>
                    <td>NOT_FOUND_INVOICE_NUMBER</td>
                    <td>false</td>
                    <td>이미 출고 예정일이 등록된 상품이어서 운송장 번호를 입력하셔야 합니다.</td>
                  </tr>
                  <tr>
                    <td>NOT_FOUND_VENDOR_ITEM</td>
                    <td>false</td>
                    <td>합포장건 중 누락된 상품이 있습니다.</td>
                  </tr>
                  <tr>
                    <td>NOT_ALLOW_VENDOR_DIRECT</td>
                    <td>false</td>
                    <td>업체직송은 분리배송 할 수 없습니다.</td>
                  </tr>
                  <tr>
                    <td>PSD_NOT_ALLOW_TO_CHANGE</td>
                    <td>false</td>
                    <td>출고예정일은 최초 등록 이후 변경 할 수 없습니다.</td>
                  </tr>
                  <tr>
                    <td>NOT_ALLOW_SEPARATE_AFTER_NORMAL_DELIVERY</td>
                    <td>false</td>
                    <td>일반배송 접수 후 분리배송을 다시 할 수 없습니다.</td>
                  </tr>
                  <tr>
                    <td>IS_SEPARATE_MUST_BE_TRUE_WHEN_SEPARATE_DELIVERY</td>
                    <td>false</td>
                    <td>분리배송 접수 후 일반배송으로 처리 할 수 없습니다. 분리배송 여부를 Y로 수정하시기 바랍니다.</td>
                  </tr>
                  <tr>
                    <td>NOT_ALLOW_SEPARATE_WHEN_ONE_VENDOR_ITEM</td>
                    <td>false</td>
                    <td>상품이 한가지인 경우 분리배송 할 수 없습니다.</td>
                  </tr>

               </table>
            `,
              _warning: ``,
              children: false,
            },
            {
              name: `resultMessage`,
              type: `String`,
              _description: `결과메세지`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `retryRequired`,
              type: `Boolean`,
              _description: `retry 가능 여부`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
          ],
        },
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00034612/orders/updateInvoices`,
    code: [
      {
        language: `http`,
        codeblock: {
            "vendorId": "A00013264",
            "orderSheetInvoiceApplyDtos": [
            {
                "shipmentBoxId": 614018634,
                "orderId": 2000019631453,
                "vendorItemId": 3819657333,
                "deliveryCompanyCode": "KDEXP",
                "invoiceNumber": 201808231414,
                "splitShipping": "False",
                "preSplitShipped": "False",
                "estimatedShippingDate": ""
             }
     ]
    }
      }
    ],
    response: {
      "code": 200,
      "message": "OK",
      "data": {
        "responseCode": 0,
        "responseMessage": "SUCCESS",
        "responseList": [
          {
            "shipmentBoxId": 614018634,
            "succeed": true,
            "resultCode": "OK",
            "retryRequired": false,
            "resultMessage": null
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
