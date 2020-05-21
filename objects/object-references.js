let myAccount =  {
  name: 'Gus Schiavon',
  expenses: 0,
  income: 0
}

let addIncome = function(account, income){
  account.income = account.income + income
  console.log(`$${income} has been added to your account.`)
}

let addExpense = function(account, expense){
  account.expenses = account.expenses + expense
  console.log(`$${expense} has been deducted from your account.`)
}

let resetAccount = function(account){
  account.income = 0
  account.expenses = 0
  console.log(`The account ${account.name} has been reset. Balance is $0,00`)
}
let accountSummary = function(account){
  balance = account.income - account.expenses
  console.log(`Your balance for account name ${account.name} is ${balance}. Income of ${account.income} and expenses of ${account.expenses}`)
}

// addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
resetAccount(myAccount)
addIncome(myAccount, 500)
addIncome(myAccount, 200)
addExpense(myAccount, 600)
accountSummary(myAccount)
resetAccount(myAccount)
accountSummary(myAccount)
