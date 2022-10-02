// 7 KYU - Money, Money, Money 

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.


function calculateYears(principal, interest, tax, desired) {
    // function is meant to calculate the number of years required to have the desired amount
    // function to have the desired amount is as follows:
    // D = P*(1+I(1-T))**Y
    // where D is the desired amount, P is the principle, I is the Interest, T is the tax and Y is the Years.
    // isolating for Y yields the following equation:
    // Y = (log(D/P))/(log(1+I*(1-T)));
    
    let P = principal;
    let I = interest;
    let T = tax;
    let D = desired;
  
    let y = (Math.log(D/P))/(Math.log(1+I*(1-T)))
    
    return Math.ceil(y)
}