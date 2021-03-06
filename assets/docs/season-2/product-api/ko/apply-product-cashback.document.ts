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
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
    _description: `옵션별로 캐시백 룰을 설정한다.<br>

동일한 캐시백 룰을 사용하는 옵션에 적용할수 있으며 승인완료 이후의 옵션들에만 적용 가능합니다.</BR>
* 캐쉬백 기능은 쿠팡 영업 담당자와 계약서 작성 및 이용 관련 협의 후 사용 가능합니다.<br>
각 캐시백 유형에 맞는 비즈니스 로직은 아래 테이블을 참조해 주십시오.：
<table>
        <tr>
          <th>Value type</th>
          <th>Explanation</th>
          <th>value</th>
          <th>maxAmount</th>
          <th>고객 주문 예시</th>
          <th>캐시백 계산 식 Caculate fomula for cash back</th>
          <th>캐시백 금액</th>
        </tr>
        <tr>
          <td>FIXED(정액할인)</td>
          <td>고객이 구매한 상품의 수량과 상관없이 정해진 금액의 캐시백을 적용합니다.</br>
              여러개를 구매하여도 정해진 캐시백 금액만 적립됩니다. </td>
          <td>1000</td>
          <td>null</td>
          <td>Price : ￦5,000</br>Quantity : 2</br>Paid : ￦10,000</td>
          <td>cash_back = value</td>
          <td>￦1,000</td>
        </tr>
        <tr>
          <td rowspan="2">RATE(정률할인)</td>
          <td rowspan="2">판매 가격에 정해진 비율대로 캐시백을 적용합니다. </br>
          Value는 1~100 범위 내에서 적용 가능합니다. </br>
          캐시백은 maxAmount를 초과할 수 없습니다. </br>
          </td>
          <td rowspan="2">5</td>
          <td>1000</td>
          <td>Price : ￦5,000</br>Quantity : 2</br>Paid : ￦10,000</td>
          <td rowspan="2">a=Paid*value% . </br> if a <=maxAmount,then cash_back = a; if a > maxAmount, then cash_back = maxAmount</td>
          <td>￦500</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>Price : ￦5,000</br>Quantity : 5</br>Paid : ￦25,000</td>
          <td>￦1,000</td>
        </tr>
        <tr>
          <td>FIXED_WITH_QUANTITY(수량별 정액할인)</td>
          <td>정해진 금액을 구매한 상품 수량만큼 곱해서 캐시백을 적용합니다. </td>
          <td>1000</td>
          <td>null</td>
          <td>Price : ￦5,000</br>Quantity : 2</br>Paid : ￦10,000</td>
          <td>cash_back = value*Quantity</td>
          <td>￦2,000</td>
        </tr>
</table>`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체에게 발급한 고유 코드`,
        _warning: ``,
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `ruleId`,
        require: true,
        _description: `Rule ID`,
        _relation: ``,
        _referenceInfo: `캐시백 관련 계약완료 후 제공받은 룰 아이디를 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `valueType`,
        require: true,
        _description: `캐시백 유형`,
        _relation: ``,
        _referenceInfo: `FIXED(정액할인), RATE(정률할인), FIXED_WITH_QUANTITY(수량별 정액할인)`,
        _warning: ``,
        children: false
      },
      {
        name: `value`,
        require: true,
        _description: `적립값`,
        _relation: ``,
        _referenceInfo: `최소값은 1</br>
RATE 일 경우 적립률을 입력 (1~100)`,
        _warning: ``,
        children: false
      },
      {
        name: `maxAmount`,
        require: false,
        _description: `최대적립금액`,
        _relation: ``,
        _referenceInfo: `최소값은 0</br>
FIXED 혹은 FIXED_WITH_QUANTITY 선택 시 파라미터 입력 불필요`,
        _warning: `RATE 일 경우 필수 파라미터`,
        children: false
      },
      {
        name: `vendorItemIds`,
        require: true,
        _description: `옵션아아디목록; 최대 적립할수있는 옵션개수는 50개`,
        _relation: ``,
        _referenceInfo: `동일한 캐시백 룰를 적용하려는 옵션아이디의 리스트`,
        _warning: `반드시 입력, null로 입력 불가`,
        children: false
      },
      {
        name: `startAt`,
        require: true,
        _description: `시작일`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-ddTHH:mm:ss 형태`,
        _warning: `현재 시간보다 최소 2시간 이후로 적용 가능 </br>
        (현시간 오후 2시 일 경우, startAt은 오후 4시 이후로 설정 가능)`,
        children: false
      },
      {
        name: `endAt`,
        require: true,
        _description: `종료일`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-ddTHH:mm:ss 형태`,
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
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/products/items/cashback`,
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
