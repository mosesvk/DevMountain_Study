const budgetData = require('./budgetData');
const timer = 2000;
let id = 4;
module.exports = {
  budgetData(req, res) {
    setTimeout(() => res.send(budgetData), timer)
  },
  purchase(req, res) {
    const { description, price, category } = req.body;
    if (description && price && category) {
      id++;
      budgetData.purchases.push({
        id,
        description,
        price,
        category
      })
      setTimeout(() => res.send(budgetData.purchases.reverse()), timer);
    } else {
      res.status(400).json(`Missing info: you send description: ${description}, price: ${price}, category: ${category}`);
    }
  },
  remove(req, res) {
    const { id } = req.params;
    budgetData.purchases = budgetData.purchases.filter(purchase => purchase.id !== parseInt(id))
    setTimeout(() => res.send(budgetData.purchases), timer)
  }
}