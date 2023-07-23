function createAccount(pin, amount) {
	let balance = amount ? amount : 0;

	function checkBalance(enteredPin) {
		if (enteredPin === pin) return `$${balance}`;
		return 'Invalid PIN.';
	}

	function deposit(enteredPin, depositAmount) {
		if (enteredPin === pin) {
			balance += depositAmount;
			return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
		}
		return 'Invalid PIN.';
	}

	function withdraw(enteredPin, withdrawAmount) {
		if (enteredPin === pin) {
			if (withdrawAmount > balance) {
				return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
			}
			balance ? (balance -= withdrawAmount) : 0;
			return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
		}
		return 'Invalid PIN.';
	}

	function changePin(enteredPin, newPin) {
		if (enteredPin === pin) {
			pin = newPin;
			return 'PIN successfully changed!';
		}
		return 'Invalid PIN.';
	}

	return {
		checkBalance,
		deposit,
		withdraw,
		changePin,
	};
}

module.exports = {createAccount};

