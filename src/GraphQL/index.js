import gql from 'graphql-tag';

const MINERS_MINERS = gql`
  query Miners{
    miners_Miners {
      id
      address
      type
      state
      category
      assignedMinerAddress
      assignedReferralAddress
      name
    }
  }
`;

export default {
  MINERS_MINERS,
};