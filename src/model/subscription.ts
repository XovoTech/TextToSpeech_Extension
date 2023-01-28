export interface ISubscription {
    "id": number;
    "status": string;
    "order_id": number;
    "customer_id": number;
    "currency": string;
    "version": string;
    "date_created": string;
    "date_created_gmt": string;
    "date_modified": string;
    "date_modified_gmt": string;
    "start_date": string;
    "next_payment_date": string;
    "expired_date": string;
    "cancelled_date": string;
    "end_date": string;
    "expired_pause_date": string;
    "product_id": number;
    "variation_id": number;
    "product_name": string;
    "subscription_interval": number;
    "subscription_period": string;
    "subscription_length": string;
    "trial_period": string;
    "trial_interval": string;
    "quantity": number;
    "order_item_id": number;
    "payment_method": string;
    "payment_method_title": string;
    "created_via": string;
    "prices_include_tax": false;
    "discount_total": string;
    "discount_tax": string;
    "shipping_total": string;
    "shipping_tax": string;
    "line_subtotal": string;
    "line_subtotal_tax": string;
    "line_total": string;
    "line_tax": string;
    "line_tax_data": {
        "subtotal": string;
        "total": string
    };
    "order_total": string;
    "order_tax": string;
    "order_subtotal": string;
    "fee": string;
    "total": string;
    "billing": {
        "first_name": string;
        "last_name": string;
        "company": string;
        "address_1": string;
        "address_2": string;
        "city": string;
        "state": string;
        "postcode": string;
        "country": string;
        "email": string;
        "phone": string
    };
    "shipping": {
        "first_name": string;
        "last_name": string;
        "company": string;
        "address_1": string;
        "address_2": string;
        "city": string;
        "state": string;
        "postcode": string;
        "country": string;
        "phone": string
    };
    "customer_order_note": string;
    "shipping_data": [];
    "paid_orders": Array<number>;
    "editable": boolean;
    "delivery_schedules": Array<unknown>;
    "meta_data": Array<IMeta>;
}

interface IMeta {
    key: string;
    value: Array<string>;
}