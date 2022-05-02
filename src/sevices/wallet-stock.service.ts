import { WalletStockValue } from "../models/dto/wallet.dto";
import { switchSelectDatabaseService } from "./repository.service";
import { Databases } from "../global/database-control";

// Assigning the correct repository
const { WalletStock } = switchSelectDatabaseService(Databases.MySQL);

/**
 * Get Stocks owned in the wallet
 *
 * @param walletId - Id of the wallet
 * @returns an array of the stocks in the wallet :: with fields: (stockTicker, stockShares, avgPrice)
 */
export const getWalletStocks = async (
  walletId: number
): Promise<WalletStockValue[]> => {
  return WalletStock.getWalletStocks(walletId);
};
