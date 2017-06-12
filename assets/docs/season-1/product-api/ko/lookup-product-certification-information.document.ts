export const lookupProductCertificationInformationDocument = {
  note: `Deprecated`,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-product-certification-information`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    name: `상품인증정보 조회`,       // use display name, i will change 'translation key'
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
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/certifications?displayCategoryCode={diplayCategoryCode}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/certifications?displayCategoryCode={diplayCategoryCode}`,
    _description: `상품 인증 정보를 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `displayCategoryCode`,
        type: `Number`,
        require: true,
        _description: `노출카테고리코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false
  },
  errorSpec: [
    {
      status: 400,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: ``,
      type: `Array`,
      _description: `상품인중정보목록`,
      _relation: ``,
      _referenceInfo: `조회된 상품 인증 정보만큼 N번 반복`,
      _warning: ``,
      children: [
        {
          name: `certificationId`,
          type: `String`,
          _description: `상품인증정보아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `certificationType`,
          type: `String`,
          _description: `상품인증정보타입`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `certificationCode`,
          type: `String`,
          _description: `상품인증정보코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `name`,
          type: `String`,
          _description: `상품인증정보명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `description`,
          type: `String`,
          _description: `상품인증정보설명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `valid`,
          type: `String`,
          _description: `상품인증정보유효여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `mandatoryCheck`,
          type: `String`,
          _description: `true일경우 certificationCode에 대한 verify가 필요함`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `recommended`,
          type: `String`,
          _description: `true일경우 해당 카테고리에서 필수`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `verificationOmit`,
          type: `String`,
          _description: `true일경우 certificationCode를 받아도 verify가 필요없음`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ],
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": [
        {
          "certificationId": 1,
          "certificationType": "KC_KID_CERTIFICATION",
          "certificationCode": null,
          "name": "KC인증 어린이제품 안전인증",
          "mandatoryCheck": true,
          "description": "구조·재질 및 사용방법 등으로 인하여 어린이의 생명·신체에 대한 위해 또는 재산상 피해에 대한 우려가 크다고 인정되는 어린이제품으로서 그 위해를 방지하기 위하여 제품검사 및 공장심사를 거쳐 제품의 안전성을 증명",
          "valid": true,
          "recommended": false,
          "verificationOmit": false
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  }
}
