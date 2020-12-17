import React from 'react'
import {Route} from 'react-router-dom'

const CardOut = () => {
  return (
    <Route path='/profile/cardOut' exact>
      <form action="https://merchant.intellectmoney.ru/ru/" name="pay" method="POST">
        <input type="hidden" name="eshopId" readOnly={true} value="459141"/>
        <input type="hidden" name="orderId" readOnly={true} value="order_0000001"/>
        <input type="hidden" name="serviceName" readOnly={true} value="Arenagames"/>
        <input type="number" name="recipientAmount"/>
        <input type="hidden" name="recipientCurrency" readOnly={true} value="TST"/>
        <input type="text" name="user_email" readOnly={true} value="test@test.ru"/>
        <input type="text" name="user_phone" readOnly={true} value="+996703411547"/>
        <input type="hidden" name="successUrl" readOnly={true} value="https://google.com"/>
        <input type="hidden" name="failUrl" readOnly={true} value="https://youtube.com"/>
        <input type="hidden" name="expireDate" readOnly={true} value="12/17/2020 23:37:00"/>
        <input
          type="hidden"
          name="merchantReceipt"
          readOnly={true}
          value='{
            "inn":"7704019762",
            "group":"Main",
            "content":{
              "type":1,
              "positions":[
                {
                  "quantity":2.000,
                  "price":12.45,
                  "tax":6,
                  "text":"Булка"
                },
                {
                  "quantity":1.000,
                  "price":5.10,
                  "tax":4,
                  "text":"Спички"
                }
              ],
              "customerContact":"foo@example.com"
            }
          }'
        />
        <input type="text" name="UserField_1"/>
        <input type="text" name="UserField_2"/>
        <input type="hidden" name="UserFieldName_2" value="Param name for value_2"/>
        <input type="submit" name="button" value="оплатить"/>
      </form>
    </Route>
  )
}

export default CardOut