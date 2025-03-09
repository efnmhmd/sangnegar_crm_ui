export type StoneType = {
    color: string;
    coop_id: string | number;
    coop_qc: number[];
    created: string;
    image: string;
    status: 'reserved' | 'non-existent' | 'exist',
    total: number,
    amount: number
    last_updated: string;
    name: string;
    polish_type: number;
    stone_type: number;
    thickness: number;
    description?: string
};



// export type StoneType = {
//     mine_name: string;
//     name: string;
//     amount: number;
//     total: number;
//     type: string;
//     color: string,
//     thickness: string;
//     status: 'reserved' | 'non-existent' | 'exist'
// };


