export const emptyWithDescriptionDocument = {

  // 각각의 속성들에는 _description, _relation, _referenceInfo, _warning속성이 있습니다.
  //
  // _description은 해당정보를 서술하는 란 입니다.
  // _relation은 연관된 API를 서술하는 곳입니다.
  // _referenceInfo는 연관된 정보들, 이를테면 리퀘스트를 보낼때 파라미터가 규격으로 정해져 있는경우,
  // 또는 참고하면 좋은 정보를 서술하는 곳입니다.
  //
  // _warning은 경고에 대해서 서술합니다.
  //
  // 해당 4가지 속성모두 HTML tag를 지원합니다.
  // 하지만<table>과 하이퍼링크용 <a></a>, 그리고 자세한 설명을 위한 첨부 이미지 즉<img>에 대해서만 사용해 주십시오.

  note: ``, // 내부 개발자를 위한 노트입니다. document 입력하시는분 team, 성함을 첫줄에 기록해 주십시오.
  // EX) note: `GW - DK`
  // 또한 내부개발자에게 필요한 내용, 메모, 낙서, 어떠한것도 적어주셔도 됩니다.

  // *경고* documentInfo는 수정하시면 안됩니다.
  documentInfo: {
    category: ``,   // input category ex) exchange-service-api
    id: ``,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    name: ``,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``
  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,  // 개발자 성함을 기록해주십시오, 만약 모를경우 'unknown'으로 입력해주십시오.
    domain: `https://api-gateway.coupang.com`,     // `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`
    httpMethod: ``, // GET, POST, PUT, DELETE
    
    // path는 사전적 의미 그대로 domain다음부분을 모두 적어주십시오.
    path: ``,       // '/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries'
    
    // HMACPath는 HMAC signature생성시 필요한 path값을 적어 주십시오.
    // 동일할경우 중복으로 입력 해 주시면 됩니다.
    HMACPath: ``,
    
    _description: ``, // 목적, 언제(어떤 상황에서), 어떻게를 자세히 서술해 주시면 됩니다.
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    //  _description: ``,
    //  이것이 무었인지 자세히 설명합니다.
    //
    // _relation: ``,
    // 연관된 API에 대하여 서술합니다.
    // 어떤 API의 어떤 response로 얻을수 있는지 서술합니다.
    // 예)이 파라미터는 '상품 목록 조회하기'API의 response값중 xx를 통해서 얻을 수 있습니다
    //
    // _referenceInfo: ``,
    // 요청할때 사용되는 고정된 상수들을 나열하거나, 참고할 정보에 대해 서술합니다.
    // 상수들을 나열할때는 테이블로 표현 해 주십시오.
    // ex) T1, T2, T3 세가지만 입력이 허용되는경우
    // <table>
    // <th>파라미터</th>
    // <td>T1</td>
    // <td>T2</td>
    // <td>T3</td>
    // </table>
    //
    // _warning: ``
    // 유의해야 할 사항에 대해서 서술해 주십시오.

    // 사용하지 않는 속성에 대해서 아래와 같이 false로 변경하시면 됩니다.
    // pathSegmentParameters: false,
    pathSegmentParameters: [
      {
        name: ``,      // input korean
        require: true, // true || false
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    // 사용하지 않는 속성에 대해서 아래와 같이 false로 변경하시면 됩니다.
    // queryStringParameters: false,
    queryStringParameters: false,
    // 사용하지 않는 속성에 대해서 아래와 같이 false로 변경하시면 됩니다.
    // bodyParameters: false,
    bodyParameters: [
      {
        name: ``,
        // type은 json표준에 의거 아래 6가지만 허용됩니다.
        // Number, String, Boolean, Array, Value, Object
        type: ``,
        require: false,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: ``,//messsage 를 입력합니다.
      _relation: ``,
      _referenceInfo: ``, //(예상되는)원인과, 해결방법에 대해 서술합니다.
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      // type은 json표준에 의거 아래 6가지만 허용됩니다.
      // Number, String, Boolean, Array, Value, Object
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
    //children depth 1 example
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        // request body를 json형태로 code block에 입력하시면 됩니다.
        codeblock: {}
      }
    ],

    // response body를 json형태로 data에 입력 하시면 됩니다.
    response: {
      "code": "200",
      "message": "",
      "data": {}
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
