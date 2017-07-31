export const createFileCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `create-file-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_file_coupang_confirm_request`,
    name: `쿠팡확인요청 파일업로드 토큰 생성`,       // use display name, i will change 'translation key'
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
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorid}/coupang-confirmations/token`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorid}/coupang-confirmations/token`,
    _description: `쿠팡확인요청시 첨부할 파일 업로드를 위한 토큰의 생성을 요청한다.`,
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
    bodyParameters: false
  },
  errorSpec: [
	    {
	      status: 400,
	      _description: `토큰 생성에 실패하였습니다. 잠시후 다시 시도해주세요.`,
	      _relation: ``,
	      _referenceInfo: `내부 오류로 인한 토큰 생성 실패`,
	      _warning: `토큰 생성에 실패하였습니다. 잠시후 다시 시도해주세요.`
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
      type: `Object`,
      _description: `TokenApiDto`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `token`,
          type: `String`,
          _description: `쿠팡 확인요청시 첨부할 파일 업로드를 위한 토큰`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `paramName`,
          type: `String`,
          _description: ``,
          _relation: ``,
          _referenceInfo: `Possible values:files`,
          _warning: ``,
          children: false
        },
        {
            name: `iframeUrl`,
            type: `String`,
            _description: `파일을 업로드 할 수 있는 Landing url`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
         },
         {
             name: `actionUrl`,
             type: `String`,
             _description: `파일을 바로 Form submit을 할 수 있는 action url`,
             _relation: ``,
             _referenceInfo: ``,
             _warning: ``,
             children: false
         }
      ]
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/vendors/A00013264/coupang-confirmations/token`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
    	  	"token": "6dd28689-96b9-45a7-a242-5410953fea21",
    	  	"paramName": "files",
    	  	"iframeUrl": "http://fileupload.coupang.com/seller/A00013264/fileupload?token=6dd28689-96b9-45a7-a242-5410953fea21&serviceInfo=SELLER_COUPANG_CONFIRMATION&resizeOrigin=false",
    		"actionUrl": "http://fileupload.coupang.com/seller/A00013264/file/upload?token=6dd28689-96b9-45a7-a242-5410953fea21&serviceInfo=SELLER_COUPANG_CONFIRMATION&resizeOrigin=false"
      	 },
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