export type StoneType = {
    mine_name: string;
    name: string;
    amount: number;
    total: number;
    type: string;
    thickness: string;
    color: string,
    status: 'reserved' | 'non-existent' | 'exist'
};
