export const lookupCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `lookup-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_coupang_confirm_request`,
    name: `쿠팡확인요청 조회`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-07-18`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/{requestId}`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/{requestId}`,
    _description: `기존에 접수한 쿠팡확인요청의 상세 내용을 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
		pathSegmentParameters: [
            {
                name: `vendorId`,
                type: `String`,
                require: true,
                _description: `업체 ID`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
            },
            {
                name: `requestId`,
                type: `Number`,
                require: true,
                _description: `요청아이디`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
            }
    	],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `requestIdType`,
        type: `String`,
        require: true,
        _description: `요청아이디 구분`,
        _relation: ``,
        _referenceInfo: `
            <table class="table">
                <tr>
                    <th>요청아이디 구분</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>RETURN</td>
                    <td>반품</td>
                </tr>
                <tr>
                    <td>EXCHANGE</td>
                    <td>교환</td>    
                </tr>
                <tr>
                    <td>COUPANG_CONFIRMATION</td>
                    <td>쿠팡확인요청</td>    
                </tr>
            </table>`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
	    {
	      status: 400,
	      _description: `요청 아이디 타입이 잘못 되었습니다.(EXCHANGE, RETURN, COUPANG_CONFIRMATION)`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``
	    },
        {
          status: 400,
          _description: `셀러 아이디는 필수값입니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `요청한 데이터가 없습니다. (내부 로깅 - 데이터의 오너가 아닙니다.)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `요청한 데이터가 없습니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `내부 오류가 발생하였습니다. 쿠팡으로 문의하세요. 에러번호 : %s`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        }
	  ],
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
          name: `coupangConfirmationId`,
          type: `Number`,
          _description: `쿠팡확인요청 ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `order`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `status`,
          type: `String`,
          _description: `진행 상태`,
          _relation: ``,
          _referenceInfo: `
          <table class="table">
              <tr>
                  <th>code</th>
                  <th>name</th>
              </tr>
              <tr>
                  <td>RECEIPT</td>
                  <td>보상접수</td>
              </tr>
              <tr>
                  <td>INPROGRESS</td>
                  <td>보상검토중</td>
              </tr>
              <tr>
                  <td>CANCEL</td>
                  <td>보상반려</td>
              </tr>
              <tr>
                  <td>CONFIRMED</td>
                  <td>보상승인</td>
              </tr>
              <tr>
                  <td>FINISH</td>
                  <td>보상완료</td>
              </tr>
           </table>`,
          _warning: ``,
          children: false
        },
        {
          name: `reviewResult`,
          type: `Number`,
          _description: `리뷰 상태`,
          _relation: ``,
         _referenceInfo: `
          <table class="table">
              <tr>
                  <th>code</th>
                  <th>name</th>
              </tr>
              <tr>
                  <td>CONFIRM</td>
                  <td>승인</td>
              </tr>
              <tr>
                  <td>PARTIAL</td>
                  <td>부분승인</td>
              </tr>
              <tr>
                  <td>REJECT</td>
                  <td>반려</td>
              </tr>
              </tr>
           </table>`,
          _warning: ``,
          children: false
        },
        {
          name: `receiptType`,
          type: `String`,
          _description: `접수 타입`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                <tr>
                    <th>code</th>
                    <th>name</th>
                </tr>
                <tr>
                    <td>RETURN</td>
                    <td>반품</td>
                </tr>
                <tr>
                    <td>EXCHANGE</td>
                    <td>교환</td>    
                </tr>
            </table>`,
          _warning: ``,
          children: false
        },            
       {
          name: `receiptId`,
          type: `Number`,
          _description: `접수번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
      {
        name: `optionDtos`,
        type: `Object`,
        _description: `쿠팡확인요청에 대한 옵션 DTO`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
           children: [
           {
             name: `coupangConfirmationId`,
             type: `Number`,
             _description: `쿠팡확인요청 ID`,
             _relation: ``,
             _referenceInfo: ``,
             _warning: ``,
             children: false
           },
          {
            name: `vendorItemId`,
            type: `Number`,
            _description: `해당 아이템 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `requestType`,
            type: `String`,
            _description: `쿠팡확인요청 유형`,
            _relation: ``,
            _referenceInfo: `
               <table class="table">
                    <tr>
                        <th>code</th>
                        <th>name</th>
                    </tr>
                    <tr>
                        <td>VENDOR_ITEM</td>
                        <td>상품상태 이상</td>
                    </tr>
                    <tr>
                        <td>SHIPPING_FEE</td>
                        <td>부족배송비</td>    
                    </tr>
                </table>`,
            _warning: ``,
            children: false,
          },
         {
            name: `productProblemType`,
            type: `String`,
            _description: `옵션별 문제 사유 구분값(상품 이상 시)`,
            _relation: ``,
            _referenceInfo: `
                <table class="table">
                    <tr>
                        <th>구분코드</th>
                        <th>설명</th>
                    </tr>
                    <tr>
                        <td>QUANTITY</td>
                        <td>수량부족</td>
                    </tr>
                    <tr>
                        <td>DAMAGE</td>
                        <td>상품파손</td>
                    </tr>
                    <tr>
                        <td>COMPONENT</td>
                        <td>구성품누락</td>
                    </tr>
                    <tr>
                        <td>OTHER_SELLER_GOODS</td>
                        <td>타 판매자 상품</td>
                    </tr>
                </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `detailReason`,
            type: `String`,
            _description: `옵션별 상세 사유`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },       
          {
            name: `receiptedQuantity`,
            type: `Number`,
            _description: `접수수량(VendorItem 별 취소/반품/교환이 신청된 수량`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },           
           {
            name: `confirmRequestQuantity`,
            type: `Number`,
            _description: `확인요청 수량(VendorItem 별 쿠팡확인요청을 신청한 수량`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },                   
          {
            name: `confirmRequestAmount`,
            type: `Number`,
            _description: `요청 금액`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },        
           {
            name: `isRequiredAttachment`,
            type: `Boolean`,
            _description: `첨부파일 필수여부`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `attachments`,
            type: `Array`,
            _description: `첨부 이미지`,
            _relation: ``,
            _referenceInfo: `첨부 파일 이름&첨부 파일 경로`,
            _warning: ``,
            children: [
              {
                name: `name`,
                type: `String`,
                _description: `첨부 파일 이름`,
                _relation: ``,
                _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
                _warning: ``,
                children: false,
              },
              {
                name: `path`,
                type: `String`,
                _description: `첨부 파일 경로`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
            ]
          },
           {
              name: `confirmResult`,
              type: `Number`,
              _description: `승인 결과 유형`,
              _relation: ``,
             _referenceInfo: `
              <table class="table">
                  <tr>
                      <th>code</th>
                      <th>name</th>
                  </tr>
                  <tr>
                      <td>CONFIRM</td>
                      <td>승인</td>
                  </tr>
                  <tr>
                      <td>PARTIAL</td>
                      <td>부분승인</td>
                  </tr>
                  <tr>
                      <td>REJECT</td>
                      <td>반려</td>
                  </tr>
                  </tr>
               </table>`,
              _warning: ``,
              children: false
            },
            {
                name: `confirmRequestAmount`,
                type: `Number`,
                _description: `승인 금액`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
            }, 
            {
                name: `confirmResultReason`,
                type: `String`,
                _description: `결과 사유`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
            },
            {
              name: `attachImage`,
              type: `Boolean`,
              _description: `이미지 첨부 여부`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },       
            {
              name: `createdAt`,
              type: `Date`,
              _description: `승인 시각`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
              _warning: ``,
              children: false
            }                 
        ]
      },
        {
          name: `attachImage`,
          type: `Boolean`,
          _description: `이미지 첨부 여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },       
        {
          name: `createdAt`,
          type: `Date`,
          _description: `쿠팡확인요청 생성시각`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `modifiedAt`,
          type: `String`,
          _description: `최종 수정시각(최종 상태 변경시각)`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
          _warning: ``,
          children: false
        },
     
      {
        name: `histories`,
        type: `Object`,
        _description: `이력정보`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `processStatus`,
            type: `String`,
            _description: `진행 상태`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `processDate`,
            type: `Date`,
            _description: `진행 시각`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          }
        ]
      }
      ]
    },
    {
      name: `success`,
      type: `Boolean`,
      _description: `true or false`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `responseCode`,
      type: `Number`,
      _description: `응답코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
     {
      name: `responseMessage`,
      type: `String`,
      _description: `SUCCESS or FAIL`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/vendors/A00013264/coupang-confirmations/371894`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
          "coupangConfirmationId": 24,
          "orderId": 20000000000079,
          "status": "CONFIRMED",
          "reviewResult": "CONFIRM",
          "receiptType": "RETURN",
          "receiptId": 370403,
          "optionDtos": [
            {
              "coupangConfirmId": 24,
              "requestType": "SHIPPING_FEE",
              "vendorItemId": null,
              "productProblemType": null,
              "detailReason": "detail reason",
              "receiptedQuantity": 0,
              "confirmRequestQuantity": null,
              "confirmRequestAmount": 2500,
              "isRequiredAttachment": false,
              "attachments": [
                 
              ],
              "confirmResult": "CONFIRM",
              "confirmedAmount": 2500,
              "confirmResultReason": "20000000000079 ",
              "confirmedAt": 1496048319000
            }
          ],
          "attachImage": null,
          "createdAt": 1496048251000,
          "modifiedAt": 1496048319000,
          "histories": [
            {
              "processStatus": "보상검토중",
              "processDate": 1496048292000
            },
            {
              "processStatus": "보상접수",
              "processDate": 1496048251000
            },
            {
              "processStatus": "보상승인",
              "processDate": 1496048319000
            }
          ]
        }
      ],
      "success": true,
      "responseCode": 0,
      "responseMessage": "SUCCESS"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}