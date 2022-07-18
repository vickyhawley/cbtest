import mutations from './mutations'
import actions from './actions'
import getters from './getters.js'

export default {
  namespaced: true,
    state() {
        return {
            products:
                [
                    {
                        "id": 1,
                        "product_name": "semper interdum mauris",
                        "image": "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
                        "price": 86.87,
                        "stock_count": 20
                      },
                      {
                        "id": 2,
                        "product_name": "suspendisse",
                        "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                        "price": 4.72,
                        "stock_count": 87
                      },
                      {
                        "id": 3,
                        "product_name": "cubilia curae donec",
                        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
                        "price": 97,
                        "stock_count": 79
                      },
                      {
                        "id": 4,
                        "product_name": "fusce",
                        "image": "https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                        "price": 4.26,
                        "stock_count": 0
                      },
                      {
                        "id": 5,
                        "product_name": "tristique est",
                        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        "price": 93.91,
                        "stock_count": 39
                      },
                      {
                        "id": 6,
                        "product_name": "semper rutrum nulla",
                        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        "price": 35.3,
                        "stock_count": 6
                      },
                      {
                        "id": 7,
                        "product_name": "cubilia curae",
                        "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
                        "price": 27.08,
                        "stock_count": 19
                      },
                      {
                        "id": 8,
                        "product_name": "sagittis nam",
                        "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                        "price": 80.65,
                        "stock_count": 38
                      },
                      {
                        "id": 9,
                        "product_name": "mauris morbi non",
                        "image": "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                        "price": 23.04,
                        "stock_count": 43
                      },
                      {
                        "id": 10,
                        "product_name": "pretium nisl",
                        "image": "https://images.unsplash.com/photo-1615306119247-67565da835da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                        "price": 4.42,
                        "stock_count": 58
                      }

                ],
                productItems: [],
        };
    },
    mutations,
    getters,
    actions

}