"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claim = void 0;
const transaction_1 = require("./transaction");
const claim = (_a) => __awaiter(void 0, [_a], void 0, function* ({ account, redeemScript, privateKey, destAddress, bitcoinRpc = "mempool", fee = "avg", }) {
    if (!account) {
        throw new Error("account should not be empty");
    }
    if (!redeemScript) {
        throw new Error("redeemScript should not be empty");
    }
    if (!privateKey) {
        throw new Error("privateKey should not be empty");
    }
    if (!destAddress) {
        throw new Error("destAddress should not be empty");
    }
    const { txId } = yield (0, transaction_1.buildClaimTransaction)({
        account,
        redeemScript,
        privateKey,
        destAddress,
        bitcoinRpc,
        fee,
    });
    console.log(`txId: ${txId}`);
});
exports.claim = claim;
