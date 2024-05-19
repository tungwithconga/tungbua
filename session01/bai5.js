class Account {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

function hasWhiteSpace(password) {
    return password.indexOf(' ') !== -1;
}

function checkValidAccounts(accounts) {
    let invalidPasswords = [];
    let validAccounts = accounts.filter((account, index) => {
        if (hasWhiteSpace(account.password)) {
            invalidPasswords.push(index);
            return false;
        }
        return true;
    });

    if (invalidPasswords.length > 0) {
        console.log(`Có ${invalidPasswords.length} tài khoản có mật khẩu chứa dấu cách.`);
        console.log("Vị trí của các tài khoản này trong mảng: ", invalidPasswords);
    } else {
        console.log("Tất cả các tài khoản có mật khẩu hợp lệ:");
        console.log(validAccounts);
    }
}

let accounts = [
    new Account("user1", "pass word1"),
    new Account("user2", "password2"),
    new Account("user3", "password 3"),
    new Account("user4", "password4")
];

checkValidAccounts(accounts);
