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

const FETCH_ALL_PATH = '/graphql';
const APPLY_FOR_LOAN_PATH = '/apply-loan';

export {
  FETCH_ALL_PATH,
  APPLY_FOR_LOAN_PATH,
  getLoanApplicationsQuery,
  getLoanProducts,
};
