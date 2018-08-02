export const lookupReturnRequestListPerDayDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `lookup-return-request-list-per-day`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_return_request_list_per_day`,
    name: `반품요청 목록 조회(일단위 페이징)`,       // use display name, i will change 'translation key'
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
        apiName: `반품 목록 조회(일단위 페이징)`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품요청 목록 조회(일단위 페이징`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests`,
    _description: `상태별 반품 목록 조회 일단위 페이징`,
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
        children: false
      }
    ],
    queryStringParameters: [
      {
        name: `createdAtFrom`,
        require: true,
        _description: `검색 시작일 (yyyy-MM-dd)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtTo`,
        require: true,
        _description: `검색 종료일 (yyyy-MM-dd)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `status`,
        require: false,
        _description: `
          <table class="table">
            <tr>
                <th>code</th>
                <th>description</th>
            </tr>
            <tr>
                <td>RU</td>
                <td>출고중지요청</td>
            </tr>
            <tr>
                <td>CC</td>
                <td>반품완료</td>
            </tr>
            <tr>
                <td>PR</td>
                <td>쿠팡확인요청</td>
            </tr>
            <tr>
                <td>UC</td>
                <td>반품접수</td>
            </tr>
          </table>`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `nextToken`,
        type: `String`,
        require: false,
        _description: `다음 페이지 조회를 위한 token값`,
        _relation: ``,
        _referenceInfo: `첫번째 페이지 조회시에는 필요하지 않습니다.`,
        //_warning: `if searchType equals timeFrame this parameter is not supported`,
        children: false
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당 최대 조회 요청 값`,
        _relation: ``,
        _referenceInfo: `default = 50`,
        //_warning: `if searchType equals timeFrame this parameter is not supported`,
        children: false
      },
      {
        name: `orderId`,
        require: false,
        _description: `Order ID.`,
        _relation: ``,
        _referenceInfo: `status 파라메터를 제외하고 조회할 경우에는 orderId가 파라메터에 포함되어야 합니다.`,
        //_warning: `No need this parameter when search by minutes. `,
        children: false
      }
    ],
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `Example: 200, 400, 500`,
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
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `receiptId`,
          type: `Number`,
          _description: `취소(반품)접수번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `paymentId`,
          type: `Number`,
          _description: `결제번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `receiptType`,
          type: `String`,
          _description: `취소유형`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
              <tr>
                  <th>v2</th>
                  <th>v4</th>
              </tr>
              <tr>
                  <td>반품</td>
                  <td>RETURN</td>
              </tr>
         </table>`,
         _warning: `※ v2와 v4 각 version별로 값에 차이가 있습니다.`,
          children: false
        },
        {
          name: `receiptStatus`,
          type: `String`,
          _description: `취소(반품)진행 상태`,
          _relation: ``,
          _referenceInfo: `
          <table class="table">
              <tr>
                  <th>code</th>
                  <th>description</th>
              </tr>
              <tr>
                  <td>RELEASE_STOP_UNCHECKED</td>
                  <td>출고중지요청</td>
              </tr>
              <tr>
                  <td>RETURNS_UNCHECKED</td>
                  <td>반품접수</td>
              </tr>
              <tr>
                  <td>VENDOR_WAREHOUSE_CONFIRM</td>
                  <td>입고완료</td>
              </tr>
              <tr>
                  <td>REQUEST_COUPANG_CHECK</td>
                  <td>쿠팡확인요청</td>
              </tr>
              <tr>
                  <td>RETURNS_COMPLETED</td>
                  <td>반품완료</td>
              </tr>
           </table>`,
          _warning: ``,
          children: false
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `취소(반품) 접수시간`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `modifiedAt`,
          type: `String`,
          _description: `취소(반품) 상태 최종 변경시간`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `requesterName`,
          type: `String`,
          _description: `반품 신청인 이름`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `requesterPhoneNumber`,
          type: `String`,
          _description: `반품 신청인 전화번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelReasonCategory1`,
          type: `String`,
          _description: `반품 사유 카테고리 1`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelReasonCategory2`,
          type: `String`,
          _description: `반품 사유 카테고리 2`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelReason`,
          type: `String`,
          _description: `취소사유 상세내역`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelCountSum`,
          type: `Number`,
          _description: `총 취소수량`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnDeliveryId`,
          type: `Number`,
          _description: `반품배송번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnDeliveryType`,
          type: `String`,
          _description: `회수종류`,
          _relation: ``,
          _referenceInfo: `
            <ul>
                <li>전담택배</li>
                <li>연동택배</li>
                <li>수기관리</li>
            </ul>`,
          _warning: ``,
          children: false
        },
        {
          name: `releaseStopStatus`,
          type: `String`,
          _description: `출고중지처리상태`,
          _relation: ``,
          _referenceInfo: `
          <ul>
            <li><span>미처리</span></li>
            <li>처리(이미출고)</li>
            <li>처리(출고중지)</li>
            <li>자동처리(이미출고)</li>
            <li>비대상</li>
          </ul>`,
          _warning: ``,
          children: false
        },
        {
          name: `enclosePrice`,
          type: `Number`,
          _description: `동봉배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `faultByType`,
          type: `String`,
          _description: `귀책타입`,
          _relation: ``,
          _referenceInfo: `
          <table class="table">
              <tr>
                  <th>v2</th>
                  <th>v4</th>
              </tr>
              <tr>
                  <td>Coupang 과실</td>
                  <td>COUPANG</td>
              </tr>
              <tr>
                  <td>협력사 과실</td>
                  <td>VENDOR</td>
              </tr>
              <tr>
                  <td>고객 과실</td>
                  <td>CUSTOMER</td>
              </tr>
              <tr>                  
                  <td>물류 과실</td>
                  <td>WMS</td>
              </tr>
              <tr>                  
                  <td>일반</td>
                  <td>GENERAL</td>
              </tr>
         </table>`,
          _warning: `※ v2와 v4 각 version별로 값에 차이가 있습니다.`,
          children: false
        },
        {
          name: `preRefund`,
          type: `Boolean`,
          _description: `선환불 여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `completeConfirmType`,
          type: `String`,
          _description: `완료 확인 종류`,
          _relation: ``,
          _referenceInfo: `
          <table class="table">
              <tr>
                  <th>v2</th>
                  <th>v4</th>
              </tr>
              <tr>
                  <td>파트너 확인</td>
                  <td>VENDOR_CONFIRM</td>
              </tr>
              <tr>
                  <td>미확인</td>
                  <td>UNDEFINED</td>
              </tr>
              <tr>
                  <td>CS 대리확인</td>
                  <td>CS_CONFIRM</td>
              </tr>
              <tr>                  
                  <td>CS 손실확인</td>
                  <td>CS_LOSS_CONFIRM</td>
              </tr>
         </table>`,
         _warning: `※ v2와 v4 각 version별로 값에 차이가 있습니다.`,
          children: false
        },
        {
          name: `completeConfirmDate`,
          type: `String`,
          _description: `완료 확인 시간`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddTHH:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `returnItems`,
          type: `Array`,
          _description: `반품 아이템 목록`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `vendorItemPackageId`,
              type: `Number`,
              _description: `딜번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `딜명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `벤더아이탬번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemName`,
              type: `String`,
              _description: `벤더아이탬명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `cancelCount`,
              type: `Number`,
              _description: `취소 수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `purchaseCount`,
              type: `Number`,
              _description: `주문 수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `shipmentBoxId`,
              type: `Number`,
              _description: `원 배송번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `sellerProductId`,
              type: `Number`,
              _description: `업체등록상품번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `sellerProductName`,
              type: `String`,
              _description: `업체등록상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `returnDeliveryDtos`,
          type: `Array`,
          _description: `회수 운송장 정보`,
          _relation: ``,
          _referenceInfo: `receiptId 별로 복수 개의 회수 운송장정보가 발생할 수 있음`,
          _warning: ``,
          children: [
            {
              name: `deliveryCompanyCode`,
              type: ` String`,
              _description: `회수 택배사코드`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryInvoiceNo`,
              type: `String`,
              _description: `회수 운송장번호`,
              _relation: ``,
              _referenceInfo: `회수 운송장번호 값이 "" 또는 null일 경우 무시`,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `nextToken`,
          type: `String`,
          _description: `다음 호출시 필요한 토큰값`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com:443/v2/providers/openapi/apis/api/v4/vendors/A00127960/returnRequests?maxPerPage=20&createdAtFrom=2017-08-27&createdAtTo=2017-09-03&status=UC`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
          "code": 200,
          "message": "OK",
          "data": [
            {
              "receiptId": 50229613,
              "orderId": 28000008707838,
              "paymentId": 28000009486604,
              "receiptType": "RETURN",
              "receiptStatus": "RETURNS_UNCHECKED",
              "createdAt": "2017-09-02T22:52:42",
              "modifiedAt": "2017-09-02T22:52:42",
              "requesterName": "구*숙",
              "requesterPhoneNumber": "0503-****-3560",
              "cancelReasonCategory1": "고객변심",
              "cancelReasonCategory2": "단순변심(사유없음)",
              "cancelReason": "",
              "cancelCountSum": 1,
              "returnDeliveryId": 20234047,
              "returnDeliveryType": "연동택배",
              "releaseStopStatus": "처리(이미출고)",
              "enclosePrice": 0,
              "faultByType": "VENDOR",
              "preRefund": false,
              "completeConfirmDate": "",
              "completeConfirmType": "UNDEFINED",
              "returnItems": [
                {
                  "vendorItemPackageId": 0,
                  "vendorItemPackageName": "스파오(SPAO) (#)시원하고 편안한 캉캉 롱스커트",
                  "vendorItemId": 3187044096,
                  "vendorItemName": "스파오(SPAO) (#)시원하고 편안한 캉캉 롱스커트, (19)Black, S",
                  "purchaseCount": 1,
                  "cancelCount": 1,
                  "shipmentBoxId": 434119941,
                  "sellerProductId": 57623797,
                  "sellerProductName": "스파오 (#)시원하고 편안한 캉캉 롱스커트,(19)Black S"
                }
              ],
              "returnDeliveryDtos": [
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": ""
                }
              ]
            },
            {
              "receiptId": 50203804,
              "orderId": 26000008536134,
              "paymentId": 26000009289336,
              "receiptType": "RETURN",
              "receiptStatus": "RETURNS_UNCHECKED",
              "createdAt": "2017-09-02T11:36:02",
              "modifiedAt": "2017-09-02T11:36:02",
              "requesterName": "이*진",
              "requesterPhoneNumber": "0503-****-6341",
              "cancelReasonCategory1": "상품불량",
              "cancelReasonCategory2": "사용중 제품결함",
              "cancelReason": "단 이틀 착용하였는데 초침이 궤도를 이탈하였습니다 ㅡ., ㅡ",
              "cancelCountSum": 1,
              "returnDeliveryId": 20227073,
              "returnDeliveryType": "연동택배",
              "releaseStopStatus": "비대상",
              "enclosePrice": 0,
              "faultByType": "VENDOR",
              "preRefund": false,
              "completeConfirmDate": "",
              "completeConfirmType": "UNDEFINED",
              "returnItems": [
                {
                  "vendorItemPackageId": 0,
                  "vendorItemPackageName": "라템 KEY OF LOVE WATCH (AG2G6302LA)",
                  "vendorItemId": 3136499833,
                  "vendorItemName": "라템 KEY OF LOVE WATCH (AG2G6302LA), 골드",
                  "purchaseCount": 1,
                  "cancelCount": 1,
                  "shipmentBoxId": 431114431,
                  "sellerProductId": 40230613,
                  "sellerProductName": "라템 KEY OF LOVE WATCH (AG2G6302LA),골드"
                }
              ],
              "returnDeliveryDtos": [
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": ""
                },
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": null
                },
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": "840806808800"
                },
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": null
                }
              ]
            },
            {
              "receiptId": 50201937,
              "orderId": 6000008625134,
              "paymentId": 6000009340358,
              "receiptType": "RETURN",
              "receiptStatus": "RETURNS_UNCHECKED",
              "createdAt": "2017-09-02T10:48:29",
              "modifiedAt": "2017-09-02T10:48:29",
              "requesterName": "서*희",
              "requesterPhoneNumber": "0503-****-6778",
              "cancelReasonCategory1": "고객변심",
              "cancelReasonCategory2": "단순변심(사유없음)",
              "cancelReason": "신랑이 맘에 안든데요",
              "cancelCountSum": 1,
              "returnDeliveryId": 20226438,
              "returnDeliveryType": "연동택배",
              "releaseStopStatus": "비대상",
              "enclosePrice": 0,
              "faultByType": "CUSTOMER",
              "preRefund": false,
              "completeConfirmDate": "",
              "completeConfirmType": "UNDEFINED",
              "returnItems": [
                {
                  "vendorItemPackageId": 0,
                  "vendorItemPackageName": "슈펜(SHOOPEN) SUPER FLEX 모던 로퍼 (BYSL7S36)",
                  "vendorItemId": 3127006595,
                  "vendorItemName": "슈펜(SHOOPEN) SUPER FLEX 모던 로퍼 (BYSL7S36), 09 BLACK, 260MM",
                  "purchaseCount": 1,
                  "cancelCount": 1,
                  "shipmentBoxId": 431901185,
                  "sellerProductId": 36981198,
                  "sellerProductName": "슈펜 SUPER FLEX 모던 로퍼 (BYSL7S36),09 BLACK 260MM"
                }
              ],
              "returnDeliveryDtos": [
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": ""
                },
                {
                  "deliveryCompanyCode": "CJGLS",
                  "deliveryInvoiceNo": "840807127473 "
                }
              ]
            }
          ],
          "nextToken": ""
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
