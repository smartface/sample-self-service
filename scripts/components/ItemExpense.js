/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemExpenseDesign = require('library/ItemExpense');

const ItemExpense = extend(ItemExpenseDesign)(
	//constructor
	function(_super, props, pageName){
		//delete ItemExpenseDesign.defaults.width
		_super(this, props || ItemExpenseDesign.defaults );
		this.pageName = pageName;
		
		var expense;
		Object.defineProperty(this, 'expense', {
			get: function() {
				return expense;
			},
			set: function(value) {
				expense = value;
				invalidate(this);
			}
		})
	}
);

function invalidate(item) {
	item.expenseType.text = item.expense.type;
	item.expenseAmount.text = item.expense.amount;
	item.expenseDate.text = item.expense.date;
	item.expenseId.text = item.expense.id;
}

module && (module.exports = ItemExpense);

