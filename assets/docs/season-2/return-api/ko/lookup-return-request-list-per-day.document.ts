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
      name: `반품 목록 조회(일단위 페이징)`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `반품 목록 조회(분단위 전체)`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `Integrated search by day and minutes by add the parameter "searchType=timeFrame".<br>
                   Search by day parameters : createdAtFrom,createdTo and status <br>
                   Search by minutes parameters : createdAtFrom,createdTo, status, nextToken, maxPerPage and orderId`
      },
    ],
    nextVersions: [
      {
        apiName: `반품요청 목록 조회(분단위 전체)`,
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
    _description: `상태별 반품 목록 조회 분단위 전체 조회`,
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
        name: `searchType`,
        require: false,
        _description: `Indicate parameter to identify search by days or minutes,if by days no need it, if by minutes set as "searchType=timeFrame"`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `If want to search return detail info by minutes, need to add this parameter as "searchType=timeFrame"`,
        children: false
      },
      {
        name: `createdAtFrom`,
        require: true,
        _description: `검색 시작일 (yyyy-MM-ddTHH:mm)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtTo`,
        require: true,
        _description: `검색 종료일 (yyyy-MM-ddTHH:mm)`,
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
                <th>message</th>
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
        require: false,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `No need this parameter when search by minutes.`,
        children: false
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `Default 50, max 50.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `No need this parameter when search by minutes.`,
        children: false
      },
      {
        name: `orderId`,
        require: false,
        _description: `Order ID.`,
        _relation: ``,
        _referenceInfo: `If status is null, then orderId is mandatory.`,
        _warning: `No need this parameter when search by minutes.`,
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
          _referenceInfo: ``,
          _warning: ``,
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
                  <th>name</th>
              </tr>
              <tr>
                  <td>RELEASE_STOP_UNCHECKED</td>
                  <td>출고중지요청 미확인)</td>
              </tr>
              <tr>
                  <td>RETURNS_UNCHECKED</td>
                  <td>반품접수 미확인</td>
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
              <li>미처리</li>
              <li>처리(이미출고)</li>
              <li>처리(출고중지)</li>
              <li>자동처리(이미출고)</li>
              <li>비대상</li>
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
          <ul>
            <li>Coupang 과실</li>
            <li>협력사 과실</li>
            <li>고객 과실</li>
            <li>물류 과실</li>
            <li>일반</li>
          </ul>`,
          _warning: ``,
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
          <ul>
            <li>미확인</li>
            <li>파트너 확인</li>
            <li>CS 대리확인</li>
            <li>CS 손실 확인</li>
          </ul>`,
          _warning: ``,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/returnRequests?createdAtFrom=2016-03-01&createdAtTo=2016-03-31&status=UC`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
          "receiptId": 365937,
          "orderId": 500004398,
          "paymentId": 700003957,
          "receiptType": "반품",
          "receiptStatus": "RELEASE_STOP_UNCHECKED",
          "createdAt": "2016-03-25T13:05:30",
          "modifiedAt": "2016-03-25T13:05:30",
          "requesterName": "임송이",
          "requesterPhoneNumber": "010-****-4043",
          "cancelReasonCategory1": "고객변심",
          "cancelReasonCategory2": "단순변심(사유없음)",
          "cancelReason": "테스트",
          "cancelCountSum": 1,
          "returnDeliveryId": 40453,
          "returnDeliveryType": "연동택배",
          "releaseStopStatus": "미처리",
          "enclosePrice": 0,
          "faultByType": "협력사 과실",
          "preRefund": false,
          "completeConfirmDate": "",
          "completeConfirmType": "미확인",
          "returnItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "객지/한씨연대기/삼포 가는 길/섬섬옥수/몰개월의 새",
              "vendorItemId": 3000001893,
              "vendorItemName": "객지/한씨연대기/삼포 가는 길/섬섬옥수/몰개월의 새 1",
              "purchaseCount": 1,
              "cancelCount": 1,
              "shipmentBoxId": 197267583,
              "sellerProductId": 130,
              "sellerProductName": "객지/한씨연대기/삼포 가는 길/섬섬옥수/몰개월의 새 1"
            }
          ]
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
