import { Ledger } from './ledger';

const ledger = new Ledger();

ledger.addTransaction({ from: "João", to: "Maria", amount: 100000 });
ledger.addTransaction({ from: "Maria", to: "Bob", amount: 5000 });

ledger.display();

console.log(ledger.getBalance("Maria"));