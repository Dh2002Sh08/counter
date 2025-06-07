"use client";
import { useEffect, useState } from 'react';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from './useTonConnect';
import { Address, OpenedContract } from '@ton/core';
import { contractAddress } from '../config/contractAddress';
import { TactCounter } from '../contract/counter';

export function useCounterContract() {
  const client = useTonClient();
  const [counter, setCounter] = useState<null | string>(null);
  const [id, setId] = useState<null | string>(null);
  const { sender } = useTonConnect();

  const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new TactCounter(
      Address.parse(contractAddress)
    );
    return client.open(contract) as OpenedContract<TactCounter>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!counterContract) return;
      setCounter(null);
      const count = await counterContract.getCounter();
      setCounter(count.toString());
      const id = await counterContract.getId();
      setId(id.toString());

      await sleep(5000); // Poll every 5 seconds
      getValue();
    }
    getValue();
  }, [counterContract]);

  const addCounter = async (amount: number) => {
    if (!counterContract || !sender) return;
    try {
      const result = await counterContract.send(sender, {
        value: BigInt(50000000), // 0.05 TON in nanotons
      }, {
        $$type: 'Add',
        queryId: BigInt(Date.now()),
        amount: BigInt(amount) // Use user-provided amount
      });
      console.log('Transaction sent:', result);
    } catch (e) {
      console.error('Error incrementing counter:', e);
    }
  };

  return {
    value: counter,
    id: id,
    address: counterContract?.address.toString(),
    addCounter, // Export the function for component use
  };
}