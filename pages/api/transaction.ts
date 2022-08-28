import type { NextApiRequest, NextApiResponse } from "next";

export type ClientInfo = {
  id: number;
  name: string;
  phone: string;
  address: string;
  accountNumber: number;
  secretKey: string;
};

export type SupplierTransaction = {
  txnId: string;
  clientInfo: ClientInfo;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  recievedAmount: number;
};

export type SupplierResponse = {
  txnId: string;
  products: {
    id: string;
    quantity: number;
    suplier: number;
  }[];
  verdict: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { txnId, products }: SupplierTransaction = req.body;
    console.log("New Transaction:");
    console.log({ transaction: req.body });

    const response: SupplierResponse = {
      txnId,
      products,
      verdict: true,
    };
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ status: false, message: "invalid token" });
}
