export const invoiceUploadProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `invoice-upload-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `invoice_upload_processing`,
    name: `송장업로드 처리`,       // use display name, i will change 'translation key'
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
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/invoices`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/invoices`,
    _description: `송장을 업로드하여 주문을 배송지시 상태로 변경합니다.
                        <br/>상품준비중 상태의 주문에 대해서만 송장업로드가 가능합니다. `,
    _relation: ``,
    _referenceInfo: `분리배송이 필요한 경우, 송장 업로드 예시는 별도 문의해주세요.`,
    _warning: `<br/>6개월 이내에 중복된 송장번호를 입력할 경우 송장중복에러가 발생할 수 있습니다.
<br/>올바르지 않은 운송장을 입력하여 정확한 배송흐름을 추적할 수 없거나 기한 내 운송장을 입력하지 않아 고객이 취소를 요청할 경우 이로 인해 발생하는 배송비는 판매자가 부담해야 합니다.`,
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `송장업로드 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/invoices`,
        _description: `송장을 업로드하여 발주서의 상태를 배송지시로 변경`,
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
            _referenceInfo: `분리배송 시, 이미 발송한 상품의 shipmentBoxId는 변경됩니다. (orderId로 발주서 단건 조회API를 통해 확인 가능)`,
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
            _description: `택배사 코드<br>취소선은 합병 또는 폐업한 택배사를 의미합니다.`,
            _relation: ``,
            _referenceInfo: `
              <table class="table">
               <tr>
                  <th>CODE</th>
                  <th>NAME</th>
                </tr>
                <tr>
                  <td>HYUNDAI</td>
                  <td>롯데택배</td>
                </tr>
                <tr>
                  <td>KGB</td>
                  <td>로젠택배</td>
                </tr>
                <tr>
                  <td>EPOST</td>
                  <td>우체국</td>
                </tr>
                <tr>
                  <td>HANJIN</td>
                  <td>한진택배</td>
                </tr>
                <tr>
                  <td>CJGLS</td>
                  <td>CJ대한통운</td>
                </tr>
                <tr>
                    <td><del>KOREX</del></td>
                    <td><del>대한통운[합병]</del></td>
                </tr>
                <tr>
                  <td><del>KGBLS</del></td>
                  <td><del>KGB택배</del></td>
                </tr>
                <tr>
                  <td>KDEXP</td>
                  <td>경동택배</td>
                </tr>
                <tr>
                  <td><del>DONGBU</del></td>
                  <td><del>드림택배(구 KG로지스)</del></td>
                </tr>
                    <tr>
                        <td><del>INNOGIS</del></td>
                        <td><del>GTX로지스[폐업]</del></td>
                    </tr>
                <tr>
                  <td>ILYANG</td>
                  <td>일양택배</td>
                </tr>
                <tr>
                  <td>CHUNIL</td>
                  <td>천일택배</td>
                </tr>
                 <tr>
                  <td>AJOU</td>
                  <td>아주택배</td>
                </tr>
                <tr>
                  <td>CSLOGIS</td>
                  <td>SC로지스</td>
                </tr>
                <tr>
                  <td>DAESIN</td>
                  <td>대신택배</td>
                </tr>
                 <tr>
                  <td>CVS</td>
                  <td>CVS택배</td>
                </tr>
                <tr>
                  <td>HDEXP</td>
                  <td>합동택배</td>
                </tr>
                <tr>
                  <td>DADREAM</td>
                  <td>다드림</td>
                </tr>
                 <tr>
                  <td>DHL</td>
                  <td>DHL</td>
                </tr>
                <tr>
                  <td>UPS</td>
                  <td>UPS</td>
                </tr>
                <tr>
                  <td>FEDEX</td>
                  <td>FEDEX</td>
                </tr>
                 <tr>
                  <td>REGISTPOST</td>
                  <td>우편등기</td>
                </tr>
                <tr>
                  <td>DIRECT</td>
                  <td>업체직송</td>
                </tr>
                <tr>
                  <td>COUPANG</td>
                  <td>쿠팡자체배송</td>
                </tr>
                <tr>
                  <td><del>IQS</del></td>
                  <td><del>굿스포스트</del></td>
                </tr>
                <tr>
                  <td>EMS</td>
                  <td>우체국 EMS</td>
                </tr>
                <tr>
                  <td>TNT</td>
                  <td>TNT</td>
                </tr>
                <tr>
                  <td>USPS</td>
                  <td>USPS</td>
                </tr>
                <tr>
                  <td>IPARCEL</td>
                  <td>i-parcel</td>
                </tr>
                <tr>
                  <td>GSMNTON</td>
                  <td>GSM NtoN</td>
                </tr>
                <tr>
                  <td>SWGEXP</td>
                  <td>성원글로벌</td>
                </tr>
                <tr>
                  <td>PANTOS</td>
                  <td>범한판토스</td>
                </tr>
                <tr>
                  <td>ACIEXPRESS</td>
                  <td>ACI Express</td>
                </tr>
                <tr>
                  <td>DAEWOON</td>
                  <td>대운글로벌</td>
                </tr>
                <tr>
                  <td>AIRBOY</td>
                  <td>에어보이익스프레스</td>
                </tr>
                <tr>
                  <td>KGLNET</td>
                  <td>KGL네트웍스</td>
                </tr>
                <tr>
                  <td>KUNYOUNG</td>
                  <td>건영택배</td>
                </tr>
                <tr>
                  <td>SLX</td>
                  <td>SLX택배</td>
                </tr>
                <tr>
                  <td>HONAM</td>
                  <td>호남택배</td>
                </tr>
                <tr>
                  <td>LINEEXPRESS</td>
                  <td>LineExpress</td>
                </tr>
                <tr>
                  <td>SFEXPRESS</td>
                  <td>순풍택배</td>
                </tr>
                <tr>
                  <td>TWOFASTEXP</td>
                  <td>2FastsExpress</td>
                </tr>
                <tr>
                  <td>ECMS</td>
                  <td>ECMS익스프레스</td>
                </tr>
              </table>
            `,
            _warning: ``,
            children: false
          },
          {
            name: `invoiceNumber`,
            type: `String`,
            require: true,
            _description: `송장번호`,
            _relation: ``,
            _referenceInfo: `분리배송 시 선택. 입력 하지 않는 경우 "" 공백으로 입력한다.`,
            _warning: `분리배송 시에는 송장번호 또는 출고예정일 둘중에 한가지만 입력한다.
                            <br/> 업체직송(DIRECT)일 경우 임의의 숫자만 입력가능하며 배송트래킹은 지원하지 않습니다.`,
            children: false
          },
          {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `옵션Id`,
            _relation: ``,
            _referenceInfo: `송장을 업로드 할 상품의 옵션 ID를 입력. <br>분리배송 시 해당 shipmentBoxId의 vendorItemId단위로 접수해야한다.`,
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
    endpoint: `https://api-gateway.coupang.com//v2/providers/openapi/apis/api/v4/vendors/A00034612/orders/invoices`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00034612",
          "orderSheetInvoiceApplyDtos": [
            {
              "shipmentBoxId": 606920263,
              "orderId": 4000019469460,
              "vendorItemId": 3823839899,
              "deliveryCompanyCode": "KDEXP",
              "invoiceNumber": "20180731040123",
              "splitShipping": false,
              "preSplitShipped": false,
              "estimatedShippingDate": ""
            },
            {
              "shipmentBoxId": 606920263,
              "orderId": 4000019469460,
              "vendorItemId": 3834780191,
              "deliveryCompanyCode": "KDEXP",
              "invoiceNumber": "20180731040123",
              "splitShipping": false,
              "preSplitShipped": false,
              "estimatedShippingDate": ""
            }
          ]
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "responseCode": 0,
        "responseMessage": "SUCCESS",
        "responseList": [
          {
            "shipmentBoxId": 606920263,
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
