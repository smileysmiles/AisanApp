const uuidv4 = require('uuid/v4')

const state= {
    transactions: [{
        txid:"0273a9c5-a12c-4fc5-be2e-f2e8817e6ef6",
        sub:"0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d",
        txtype:"DEPOSIT",
        amount:100,
        currency:"GBP",
        date: new Date(2019, 5, 19, 9, 10, 10, 0),
        description:"Deposit recieved from PayPal."
    },
    {
        txid:"0273a9c5-a12c-4fc5-be2e-f2e8817e6e10",
        sub:"0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d",
        txtype:"CREDIT",
        amount:5.5,
        currency:"GBP",
        date: new Date(2019, 5, 20, 17, 10, 10, 0),
        description:"You won!! Congratulations"
    },
    {
        txid:"0273a9c5-a12c-4fc5-be2e-f2e8817e6ef9",
        sub:"0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d",
        txtype:"DEBIT",
        amount:1,
        currency:"GBP",
        date: new Date(2019, 5, 20, 12, 43, 10, 0),
        description:"You placed a bet."
    }
    ]
}

const mutations = {
    'ADD_TRANSACTION' ( state, transaction){
        transaction.date=new Date();
        state.transactions.push(transaction);
    },

}

const actions = {
    deposit({ commit }, transaction){
        transaction.txid = uuidv4();
        transaction.txtype = "DEPOSIT";
        transaction.sub = "0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d";
        transaction.currency = "GBP";
        transaction.description="Deposit recieved from PayPal.";
        commit('ADD_TRANSACTION', transaction)
    },
    withdraw({ commit }, transaction){
        transaction.txid = uuidv4();
        transaction.txtype = "WITHDRAW";
        transaction.sub = "0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d";
        transaction.currency = "GBP";
        transaction.description="Money withdrawn from wallet.";
        commit('ADD_TRANSACTION', transaction)
    },
    debit({ commit }, transaction){
        transaction.txid = uuidv4();
        transaction.txtype = "DEBIT";
        transaction.sub = "0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d";
        transaction.currency = "GBP";
        transaction.description="You placed a bet.";
        commit('ADD_TRANSACTION', transaction)
    },
    credit({ commit }, transaction){
        transaction.txid = uuidv4();
        transaction.txtype = "CREDIT";
        transaction.sub = "0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d";
        transaction.currency = "GBP";
        transaction.description="You won!! Congratulations"
        commit('ADD_TRANSACTION', transaction)
    },
}


const getters = {
    orderedTransactions(state){
        let trans = JSON.parse(JSON.stringify(state.transactions));
        trans = trans.sort( (a, b) => new Date(a.date) - new Date(b.date))
        return trans;
    },
    getBalance(state){
        let credits = state.transactions.filter( tran => tran.txtype == "DEPOSIT" || tran.txtype == "CREDIT")
        let creditBalance = 0;
        if(credits.length > 1)
            creditBalance = credits.reduce((a, b) => a + b.amount, 0 );
        else if (credits.length == 1)
            creditBalance = credits.amount
        let debits = state.transactions.filter( tran => tran.txtype == "WITHDRAW" || tran.txtype == "DEBIT")
        let debitBalance = 0;
        if(credits.length > 1)
            debitBalance = debits.reduce((a, b) => a + b.amount, 0 );
        else if (credits.length == 1)
            debitBalance = debits.amount

        let balance = creditBalance - debitBalance;

        return balance;

    }

}

export default { state, mutations, actions, getters }