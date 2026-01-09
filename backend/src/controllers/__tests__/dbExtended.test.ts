import ExtendedTransferQueryService from '../dbExtended';
import TransferEvent from '../../models/TransferEvent';

// Mock the TransferEvent model
jest.mock('../../models/TransferEvent');

describe('ExtendedTransferQueryService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getRecentTransfers', () => {
    // Tests will be added in next commits
  });
});

