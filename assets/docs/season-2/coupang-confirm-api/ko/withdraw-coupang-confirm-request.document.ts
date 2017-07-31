export const withdrawCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `withdraw-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `withdraw_coupang_confirm_request`,
    name: `쿠팡확인요청 철회`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/withdraw`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/withdraw`,
    _description: `반품 또는 교환건에 대해 쿠팡에 보상 요청을 철회합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
		pathSegmentParameters: [
			{
				name: `vendorId`,
				require: true,
				_description: `vendor Id`,
				_relation: ``,
				_referenceInfo: ``,
				_warning: ``,
				children: false,
			}
		],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `coupangConfirmationId`,
        type: `Long`,
        require: true,
        _description: `쿠팡확인요청ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
	    {
	      status: 400,
	      _description: `쿠팡확인요청ID를 입력해 주세요.`,
	      _relation: ``,
	      _referenceInfo: `쿠팡확인요청ID`,
	      _warning: `쿠팡확인요청ID를 입력해 주세요.`
	    },
	    {
		      status: 400,
		      _description: `쿠팡확인요청 상태를 확인하세요.`,
		      _relation: ``,
		      _referenceInfo: `접수중 상태가 아닐때 철회 신청`,
		      _warning: `쿠팡확인요청 상태를 확인하세요.`
		 },
		 {
		      status: 500,
		      _description: `"{\"success\":false,\"code\":\"error\",\"message\":\"쿠팡확인요청 접수가 존재하지 않습니다. coupangConfirmId XXX\",\"body\":null}"`,
		      _relation: ``,
		      _referenceInfo: `존재하지 않는 접수번호 입력`,
		      _warning: `"{\"success\":false,\"code\":\"error\",\"message\":\"쿠팡확인요청 접수가 존재하지 않습니다. coupangConfirmId XXX\",\"body\":null}"`
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
        name: `data`,
        type: `Long`,
        _description: `쿠팡확인요청ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
    },
    {
        name: `success`,
        type: `Boolean`,
        _description: `수행 성공 여부`,
        _relation: ``,
        _referenceInfo: `true:성공 false:실패`,
        _warning: ``,
        children: false,
      },
      {
          name: `responseCode`,
          type: `Number`,
          _description: `Response Code`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }, 
      {
          name: `responseMessage`,
          type: `String`,
          _description: `Response Message`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
      }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/vendors/A00013264/coupang-confirmations/withdraw`,
    code: [
      {
        language: `http`,
        codeblock: {
          "coupangConfirmationId" : "74"
        }
      }
    ],
    response: {
    	"code": "200",
    	"message": "OK",
    	"data": 74,
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