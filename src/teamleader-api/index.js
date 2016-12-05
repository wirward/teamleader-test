
const customers = [
    {
        "id": "1",
        "name": "Coca Cola",
        "since": "2014-06-28",
        "revenue": 492.12
    }, {
        "id": "2",
        "name": "Teamleader",
        "since": "2015-01-15",
        "revenue": 1505.95
    }, {
        "id": "3",
        "name": "Jeroen De Wit",
        "since": "2016-02-11",
        "revenue": 0.00
    }
];

const orders = [
    {
        "id": "1",
        "customer-id": "1",
        "items": [
            {
                "product-id": "B102",
                "quantity": 10,
                "unit-price": 4.99,
                "total": 49.90
            }
        ],
        "total": 49.90
    }, {
        "id": "2",
        "customer-id": "2",
        "items": [
            {
                "product-id": "B102",
                "quantity": 5,
                "unit-price": 4.99,
                "total": 24.95
            }
        ],
        "total": 24.95
    }, {
        "id": "3",
        "customer-id": "3",
        "items": [
            {
                "product-id": "A101",
                "quantity": 2,
                "unit-price": 9.75,
                "total": 19.50
            }, {
                "product-id": "A102",
                "quantity": 1,
                "unit-price": 49.50,
                "total": 49.50
            }
        ],
        "total": 69.00
    }
];

const products = [
    {
        "id": "A101",
        "description": "Screwdriver",
        "category": 1,
        "price": 9.75
    }, {
        "id": "A102",
        "description": "Electric screwdriver",
        "category": 1,
        "price": 49.50
    }, {
        "id": "B101",
        "description": "Basic on-off switch",
        "category": 2,
        "price": 4.99
    }, {
        "id": "B102",
        "description": "Press button",
        "category": 2,
        "price": 4.99
    }, {
        "id": "B103",
        "description": "Switch with motion detector",
        "category": 2,
        "price": 12.95
    }
];


export default class Api {
    getCustomers() {
        return new Promise(function(resolve, reject) {
            resolve(customers);
        });
    }

    getOrders() {
        return new Promise(function(resolve, reject) {
            resolve(orders);
        });
    }

    getOrderDetail(orderId) {
        return new Promise(function(resolve, reject) {
            const order = orders.find(o => o.id === orderId);
            resolve(order);
        });
    }

    getProducts() {
        return new Promise(function(resolve, reject) {
            resolve(products);
        });
    }
}
