export const createCoupangConfirmRequestVendorItemDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `create-coupang-confirm-request-vendoritem`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_coupang_confirm_requet_vendoritem`,
    name: `쿠팡확인요청 생성(상품상태이상)`,       // use display name, i will change 'translation key'
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
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/vendor-item`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/vendor-item`,
    _description: `반품 또는 교환을 위해 회수한 상품 상태가 이상할 경우 보상 요청을 위한 API`,
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
        }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `receipId`,
        type: `Number`,
        require: true,
        _description: `반품 또는 교환 접수번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `receiptType`,
        type: `String`,
        require: true,
        _description: ` 반품 또는 교환 구분`,
        _relation: ``,
        _referenceInfo: `
            <table class="table">
                <tr>
                    <th>구분코드</th>
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
            </table>`,
        _warning: ``,
        children: false
      },
      {
        name: `optionDtos`,
        type: `Object`,
        require: true,
        _description: `옵션 그룹`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `requestType`,
            type: `String`,
            require: true,
            _description: `VENDOR_ITEM`,
            _relation: ``,
            _referenceInfo: `상품상태 이상에 대한 쿠팡확인요청 구분값`,
            _warning: ``,
            children: false,
          },
          {
            name: `detailReason`,
            type: `String`,
            require: true,
            _description: `상세 사유(최대 500자)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `해당 아이템 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
         {
            name: `productProblemType`,
            type: `String`,
            require: true,
            _description: `문제 사유 구분값`,
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
            name: `confirmRequestQuantity`,
            type: `Number`,
            require: true,
            _description: `요청수량`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },        
          {
            name: `attachments`,
            type: `Array`,
            require: true,
            _description: `첨부 파일을 함께 접수할 때 파일 정보로서 첨부파일 필수 여부는 각각의 업체별로 쿠팡 내부에서 첵크합니다.`,
            _relation: ``,
            _referenceInfo: `첨부 파일 이름&첨부 파일 경로`,
            _warning: ``,
            children: [
              {
                name: `name`,
                type: `String`,
                require: true,
                _description: `첨부 파일 이름`,
                _relation: ``,
                _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
                _warning: ``,
                children: false,
              },
              {
                name: `path`,
                type: `String`,
                require: true,
                _description: `첨부 파일 경로`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
            ]
          }
        ]
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `배송비를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `상세사유를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `첨부파일은 필수 입니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `첨부파일명을 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
     {
      status: 400,
      _description: `첨부파일 경로를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
     {
      status: 400,
      _description: `사유를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
     {
      status: 400,
      _description: `확인요청수량을 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
      {
      status: 400,
      _description: `최대 500 자 이하로 입력해 주세요`,
      _relation: ``,
      _referenceInfo: ` 상세사유 길이 초과 입력 `,
      _warning: ``
    },
      {
      status: 400,
      _description: `쿠팡확인요청을 이미 신청했습니다.`,
      _relation: ``,
      _referenceInfo: `이미 신청했을때`,
      _warning: ``
    },
     {
      status: 400,
      _description: `쿠팡확인요청 가능일이 아닙니다.`,
      _relation: ``,
      _referenceInfo: `신청가능일이 아닐때`,
      _warning: ``
    }
  ],
  responseSpec: [
      {
      name: `code`,
      type: `Number`,
      _description: `http 쿠팡확인요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `쿠팡확인요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Number`,
      _description: `쿠팡확요청 ID`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/vendor-item`,
    code: [
      {
        language: `http`,
        codeblock: {
                "receiptId" : "371024",
                "receiptType" : "RETURN",
                "optionDtos" : [ {
                    "requestType" : "VENDOR_ITEM",
                    "confirmRequestQuantity" : "2",
                    "vendorItemId" : "53000424728",
                    "productProblemType" : "QUANTITY",
                    "detailReason" : "Detail Reason1",
                    "attachments" : [ {
                        "name" : "image1.png",
                        "path" : "MEDIATION/2017/06/20/9/7/A00013264/3e5c7c99-75cf-46f9-a4bd-edaf00ccc0da.png"
                        }]
                    }, {
                    "requestType" : "VENDOR_ITEM",
                    "confirmRequestQuantity" : "3",
                    "vendorItemId" : "53000424729",
                    "productProblemType" : "DAMAGE",
                    "detailReason" : "Detail Reason2",
                    "attachments" : [ {
                        "name" : "image2.png",
                        "path" : "MEDIATION/2017/06/20/9/7/A00013264/3e5c7c99-75cf-46f9-a4bd-edaf00ccc0db.png"
                    }]
                    }
                ]  
        }
      }
    ],
    response: {
        "code": "200",
        "message": "OK",
        "data": 60,
        "success": true,
        "responseCode": 0,
        "responseMessage": "SUCCESS"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
