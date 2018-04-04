export const  createContractDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `create-contract`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create-contract`,
    name: `자유 계약 생성`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-08-30`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Settlement`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/contract/create/non_contract_info`,
    HMACPath: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/contract/create/non_contract_info`,
    _description: `업체의 계약서 정보에 자유계약 정보가 없는경우 자유계약 정보를 생성하는 API입니다.
    	<br/>업체별로 한개의 자유계약정보만 생성되며 최초수행 또는 반복수행 시 생성된 자유계약의 상세 정보가 반환됩니다.`,
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
	  },
	  errorSpec: [
	],
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
	      name: `httpStatus`,
	      type: `Number`,
	      _description: `HTTP Status Code(서버 응답 코드와 동일한 값)`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``,
	      children: false,
	    },   
	    {
	      name: `httpStatusMessage`,
	      type: `String`,
	      _description: `HTTP Status Message (서버 응답 메세지와 동일한 값)`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``,
	      children: false,
	    },   
	    {
	      name: `errorMessage`,
	      type: `String`,
	      _description: `HTTP Status 200을 제외한 나머지 Status에서 서버 내 상세한 실패 이유 메세지가 담깁니다.`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``,
	      children: false,
	    },   
	    {
	      name: `data`,
	      type: `Object`,
	      _description: `비계약정보 단건 데이터`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``,
	      children: [{
	        name: `success`,
	        type: `Boolean`,
	        _description: `성공 여부`,
	        _relation: ``,
	        _referenceInfo: `true or false`,
	        _warning: ``,
	        children: false
	      },
	        {
	          name: `content`,
	          type: `Object`,
	          _description: `비계약정보 단건`,
	          _relation: ``,
	          _referenceInfo: ``,
	          _warning: ``,
	          children: [{
	            name: `contractId`,
	            type: `Number`,
	            _description: `업체의 계약서 아이디`,
	            _relation: ``,
	            _referenceInfo: `예) 1, 2`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `vendorContractId`,
	            type: `Number`,
	            _description: `업체의 계약서 코드(쿠팡 관리 코드)`,
	            _relation: ``,
	            _referenceInfo: `예) -1, 1, 2`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `sellerId`,
	            type: `String`,
	            _description: `업체 ID`,
	            _relation: ``,
	            _referenceInfo: `예) A00013264`,
	            _warning: ``,
	            children: false
	          },          
	          {
	            name: `sellerShareRatio`,
	            type: `Number`,
	            _description: `해당 계약서에 명시된 업체 분담율(%)`,
	            _relation: ``,
	            _referenceInfo: `예) 100.0`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `coupangShareRatio`,
	            type: `Number`,
	            _description: `해당 계약서에 명시된 쿠팡 분담율(%)`,
	            _relation: ``,
	            _referenceInfo: `예) 100.0`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `gmvRatio`,
	            type: `Number`,
	            _description: `월별 매출 비율, 월별 예산을 쿠팡에서의 매출을 기반으로 자동 생성`,
	            _relation: ``,
	            _referenceInfo: `예) 100.0`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `start`,
	            type: `String`,
	            _description: `시작일시`,
	            _relation: ``,
	            _referenceInfo: `예) 2018-01-22 00:00:00`,
	            _warning: ``,
	            children: false
	          },
	          {
	            name: `end`,
	            type: `String`,
	            _description: `종료일시`,
	            _relation: ``,
	            _referenceInfo: `예) 2018-12-31 23:59:59`,
	            _warning: ``,
	            children: false
	          },         
	         {
	            name: `type`,
	            type: `String`,
	            _description: `계약 유형`,
	            _relation: ``,
	            _referenceInfo: `예) NON_CONTRACT_BASED`,
	            _warning: ``,
	            children: false
	         }, 
	         {
		        name: `usedBudget`,
		        type: `Boolean`,
		        _description: `예산제한 사용 여부`,
		        _relation: ``,
		        _referenceInfo: `예) true, false`,
		        _warning: `현재는 사용되지 않는 필드이며 true가 기본값입니다.`,
		        children: false
		    },
	        {
	            name: `modifiedAt`,
	            type: `String`,
	            _description: `최종 수정 일시`,
	            _relation: ``,
	            _referenceInfo: `예) 2017-09-25 11:40:01`,
	            _warning: ``,
	            children: false
	         },          
	         {
	            name: `modifiedBy`,
	            type: `String`,
	            _description: `최종 수정자 ID`,
	            _relation: ``,
	            _referenceInfo: ``,
	            _warning: ``,
	            children: false
	          },
	          ]
	         },
	        {
		          name: `Pagination`,
		          type: `null`,
		          _description: `단건 조회로 페이징 없음`,
		          _relation: ``,
		          _referenceInfo: ``,
		          _warning: ``,
		          children: false
	          }
	        ]
	    }   
	  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v2/vendors/A00013264/contract/create/non_contract_info`,
    code: [
        {
         // language: `http`,
         // codeblock: {}     
        }
    ],
    response: {
    	  "code": 200,
    	  "message": "OK",
    	  "httpStatus": 200,
    	  "httpStatusMessage": "OK",
    	  "errorMessage": "",
    	  "data": {
    	    "success": true,
    	    "content": {
    	      "contractId": 15,
    	      "vendorContractId": -1,
    	      "sellerId": "A00013264",
    	      "sellerShareRatio": 100.0,
    	      "coupangShareRatio": 0.0,
    	      "gmvRatio": 0,
    	      "start": "2017-09-25 11:40:01",
    	      "end": "2999-12-31 23:59:59",
    	      "type": "NON_CONTRACT_BASED",
    	      "useBudget": true,
    	      "modifiedAt": "2017-09-25 11:40:01",
    	      "modifiedBy": "bcho"
    	    },
    	    "pagination": null
    	  }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
