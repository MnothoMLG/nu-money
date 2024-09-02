const getLoanApplicationsQuery = `
      query GetApllications {
        loan_applications {
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
      query sendApplication {
        data {
          id
          name
          value
        }
      }
    `;
const FETCH_ALL_PATH = '/graphql';

export {
  FETCH_ALL_PATH,
  sendLoanApplicationQuery,
  getLoanApplicationsQuery,
  getLoanProducts,
};
