DATA CONCEPTS
==============

##BUDGETS

###What information would I like to know about the budget?
1. **Name**
2. **Limit**
3. Due Date
	- _Budgets are timeless anyway_
4. Banks
	- _Defaults to use all banks in the default order_
5. **Rollover**
	- _Defaults to true_
	- TRUE:
		- Each month, the budget balance starts with last month's ending balance
		- _not sure if I should ignore negative ending balances or not_ 
	- FALSE:
		- Each month, the budget balance starts with $0
6. **Recurring**
	- _Defaults to true_
	- TRUE:
		- _Defaults to every **m** months for **t** amount of times, due on **d** due date_
		- **m**
			- This is determined by how many months lie between today and the due date
		- **d**
			- This defaults to the next month on the same due date. This can be changed to things like "third thursday", "last day", etc..
		- **t**
			- This defaults to infinity, but can be set to stop after a certain amount of times
	- FALSE:
		- This only occurs once. After the month is over, it doesn't show up anymore
7. Autopay
	- _Defaults to false_
	- If set to true, it will automatically create a transaction on the due date.
	- The add/edit transaction window will be used to customize this - some portions (like date and budget name) will be locked from editing
