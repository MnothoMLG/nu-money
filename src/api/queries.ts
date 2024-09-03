const getLoanApplicationsQuery = `
      query GetApllications {
        loanApplications {
            id
            fullName
            email
            loanAmount
            loanPurpose
        }
      }
    `;

const getLoanProducts = `
  query GetProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  } 
`;

const sendLoanApplicationQuery = `
     mutation applyForLoan{
    apply-loan(input: {fullName :"Hyy", email:"m@g.com",loanAmount: 3000,loanPurpose: "kkkkk",full_name:"mm",loan_amount:2000,loan_purpose:"0nun"}){
        message
    }
    `;

const FETCH_ALL_PATH = '/graphql';
const APPLY_FOR_LOAN_PATH = '/apply-loan';

export {
  FETCH_ALL_PATH,
  APPLY_FOR_LOAN_PATH,
  sendLoanApplicationQuery,
  getLoanApplicationsQuery,
  getLoanProducts,
};
