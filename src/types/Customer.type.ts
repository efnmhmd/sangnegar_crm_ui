export type CustomerType = {
    id: number;
    first_name: string;
    last_name: string;
    mobile_numbers: {
        phone: string
    };
    customer_type: "consumer" | "worker" | "constructor" | "dealer";
    email: string;
    addresses: unknown;
    avatar: string;
    created: string;
    last_updated: string;
    national_id: string;
    introducer: string
    orders_count: number
    soldout_meter: number;
    soldout_value: number;
    register_elapsed: number;
    customer_orders: OrderType[]
};


export type OrderType = {
    description: string
    title: string
    status: 'new' | "cancel" | "register" | "passed" | "reject",
    created: string
    last_updated: string
    order_item_length: number
}