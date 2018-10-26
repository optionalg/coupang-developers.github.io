export const applyProductCashbackDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `apply-product-cashback`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `apply_product_cashback`,
    name: `상품 캐시백 적용`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 옵션 캐시백 저장`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    HMACPath: `/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    _description: `옵션별로 캐시백 룰을 설정한다.

이 API는 동일한 캐시백 룰을 사용하는 옵션에 적용할수 있으며(승인완료 이후의 옵션들에 지정 가능) 캐시백 유형은 RATE, FIXED 및 FIXED_WITH_QUANTITY입니다.<br>

*캐쉬백 기능은 쿠팡 사업개발팀과 계약서 작성 및 이용 관련 협의 후 사용 가능, bd@coupang.com으로 문의 부탁 드립니다.<br>
각 캐시백 유형에 맞는 비즈니스 로직은 아래 테이블을 참조해 주십시오：
<table>
        <tr>
          <th>Value type</th>
          <th>Explanation</th>
          <th>value</th>
          <th>maxAmount</th>
          <th>Order case (The order submited by cusomer)</th>
          <th>Caculate fomula for cash back</th>
          <th>Cash back need to pay</th>
        </tr>
        <tr>
          <td>FIXED</td>
          <td>Give fixed cash back to customer,no matter how much they paid.</td>
          <td>1000</td>
          <td>null</td>
          <td>Price : 5000</br>Quantity : 2</br>Paid : 10000</td>
          <td>cash_back = value</td>
          <td>1000</td>
        </tr>
        <tr>
          <td rowspan="2">RATE</td>
          <td rowspan="2">No matter how much does customer paid,the cash back should not exceed maxAmount.</br>When set valueType as RATE, please note the range of value is 1~100.</td>
          <td rowspan="2">5</td>
          <td>1000</td>
          <td>Price : 5000</br>Quantity : 2</br>Paid : 10000</td>
          <td rowspan="2">a=Paid*value% . if a <=maxAmount,then cash_back = a; if a > maxAmount, then cash_back = maxAmount</td>
          <td>500</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>Price : 5000</br>Quantity : 5</br>Paid : 25000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>FIXED_WITH_QUANTITY</td>
          <td>The cash back paid influenced by quantity</td>
          <td>1000</td>
          <td>null</td>
          <td>Price : 5000</br>Quantity : 2</br>Paid : 10000</td>
          <td>cash_back = value*Quantity</td>
          <td>2000</td>
        </tr>
</table>`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `ruleId`,
        require: true,
        _description: `Rule ID`,
        _relation: ``,
        _referenceInfo: `셀러는 쿠팡이 제공한 룰 아이디를 지정한다.`,
        _warning: ``,
        children: false
      },
      {
        name: `valueType`,
        require: true,
        _description: `캐시백 유형`,
        _relation: ``,
        _referenceInfo: `FIXED; RATE;FIXED_WITH_QUANTITY.`,
        _warning: ``,
        children: false
      },
      {
        name: `value`,
        require: true,
        _description: `적립값`,
        _relation: ``,
        _referenceInfo: `최소값은 1;

RATE 일 경우 1~100`,
        _warning: ``,
        children: false
      },
      {
        name: `maxAmount`,
        require: false,
        _description: `최대적립금액`,
        _relation: ``,
        _referenceInfo: `최소값은 0;

FIXED 혹은 FIXED_WITH_QUANTITY 시 이 파라미터는 필요하지 않음

RATE 일 경우만 이 파라미터가 필수임`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemIds`,
        require: true,
        _description: `옵션아아디목록; 최대 적립할수있는 옵션개수는 50개`,
        _relation: ``,
        _referenceInfo: `null일수 없다. 동일한 캐시백 룰를 적용하려는 옵션아이디의 리스트
`,
        _warning: ``,
        children: false
      },
      {
        name: `startAt`,
        require: true,
        _description: `시작일

yyyy-MM-ddTHH:mm:ss 형태`,
        _relation: ``,
        _referenceInfo: `현재 시간보다 최소 2시간 이후로 적용 가능

(현시간 오후 2시 일 경우, startAt은 오후 4시 이후로 설정 가능)`,
        _warning: ``,
        children: false
      },
      {
        name: `endAt`,
        require: true,
        _description: `종료일

yyyy-MM-ddTHH:mm:ss 형태`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-ddTHH:mm:ss`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `RuleId can't be null, and must be numeric`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Cashback type can't be empty, and the allowed values are FIXED,RATE and FIXED_WITH_QUANTITY.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Cashback value can't be null,and the min value is 1`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `vendorItemIds'list can't be empty, the min size is 1, and max size is 50`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The start or end time of Cashback rule can't be empty`,
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
      _referenceInfo: `<table class="doc-table-col-2">
        <tr>
          <th>200:</th>
          <th> OK</th>
        </tr>
        <tr>
          <td>206:</td>
          <td> Partial successfully</td>
        </tr>
        <tr>
          <td>400:</td>
          <td> Bad request , will show corresponding bad request message</td>
        </tr>
        <tr>
          <td>500:</td>
          <td> Internal error</td>
        </tr>
        </table>`,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `캐시백 룰 성공 적용시 옵션목록으로 리턴됨; 실패시 실패원인 메세지로 리턴`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `successVendorItemIds`,
          type: `Array`,
          _description: `캐시백 룰 적용 성공한 옵션목록`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `failVendorItemIds`,
          type: `Array`,
          _description: `캐시백 룰 적용 실패한 옵션목록과 해당 실패 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
    code: [
      {
        language: `http`,
        codeblock: {
          "ruleId":"3944",
          "valueType":"FIXED",
          "value":"1000",
          "maxAmount":"",
          "vendorItemIds":[
            "3000001897",
            "3000001887"
          ],
          "startAt":"2016-12-24T10:43:54",
          "endAt":"2017-01-01T10:43:54"
        }
      }
    ],
    response: {
      "code": 206,
      "message": "PARTIAL_CONTENT",
      "data": {
        "successVendorItemIds": [
          "3000001886"
        ],
        "failVendorItemIds": [
          {
            "3000001905": "Invalid vendorItemId, vendorItemId doesn't exist or doesn't belong to corresponding vendorId"
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
