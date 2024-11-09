import { nanoid } from "nanoid";

interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  timestamp: Date;
}

export class Ledger {
  private transactions: Transaction[] = [];

  addTransaction({ from, to, amount }: { from: string; to: string; amount: number }): void {
    if (amount <= 0) {
      throw new Error("The transaction amount must be greater than 0");
    }

    const transaction: Transaction = {
      id: nanoid(),
      from,
      to,
      amount,
      timestamp: new Date(),
    }

    this.transactions.push(transaction);
  }

  getTransactions(): Transaction[] {
    return [...this.transactions];
  }

  getBalance(address: string): number {
    return this.transactions.reduce((balance, transaction) => {
      if (transaction.from === address) {
        return balance - transaction.amount;
      } else if (transaction.to === address) {
        return balance + transaction.amount;
      }
      return balance;
    }, 0);
  }

  display(): void {
    console.table(this.transactions);
  }
}