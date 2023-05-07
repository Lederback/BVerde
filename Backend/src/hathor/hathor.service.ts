import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HathorService {
    
    constructor () {}

    async getWalletId () {
        const headers = {
            'Content-Type': 'application/json',
            'x-wallet-id': process.env.HATHOR_WALLET_ID
        };

        const response = await axios.get(`${process.env.HATHOR_URI}/wallet/address?mark_as_used=true`, { headers });

        return response.data;
    }

    async createToken (name: String, symbol: String, amount: Number) {
        const headers = {
            'Content-Type': 'application/json',
            'x-wallet-id': process.env.HATHOR_WALLET_ID
        };

        const data = {
            name: name,
            symbol: symbol,
            amount: amount
        }

        try {

            const response = await axios.post(`${process.env.HATHOR_URI}/wallet/create-token`, data, { headers } );
            
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
