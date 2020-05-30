const account = {
  name: 'Gus Schiavon',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  accountSummary: function () {
    let expTotal = 0
    let incomeTotal = 0
    expenseAmount = this.expenses.forEach(function (expense) {
      expTotal = expTotal + expense.amount
    })
    incomeAmount = this.income.forEach(function(incomeItem){
      incomeTotal = incomeTotal + incomeItem.amount
    })
    let accBalance = incomeTotal - expTotal
    return `Account name ${this.name} has $${expTotal} in expenses and $${incomeTotal} in income. Account balance is $${accBalance}.`
  }
}

// Pass the expense to the 'expenses' property array.
// Define what an 'expense' is, which takes the attributes from the `addExpense` function, and push it into the array.

// const addExpense = function (description, amount = 0) {
//   const expense = {
//     description: description,
//     amount: amount
//   }
//   return account.expenses.push(expense)
// }

// Get a summary of the expenses (total)
// "Go into the expenses property array and get the 'amount' property for each object, returning that value and then adding all the values to return a total."
// const accountSummary = function (account) {
//   const expense = account.expenses
//   const amount = account.expenses.amount
//   const expensesTotal = account.findIndex(function (expense) {
//     return expensesTotal.amount
//   )}
// }
// const accountSummary = function (account) {
//   const expenseAmount = account.expenses.forEach(function (expense) {
//     return amount = expense.amount
//   })
// }

account.addExpense('sunglasses', 200)
account.addExpense('board', 1050)
account.addExpense('fuel', 20)
account.addIncome('project 1', 2000)
account.addIncome('interest', 350)
account.addIncome('project 2', 500)

console.log(account.accountSummary())
