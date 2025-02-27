/// <reference types="@as-pect/assembly/types/as-pect" />

import {
  MsgTransfer,
  encodeMsgTransfer,
  decodeMsgTransfer,
} from "../assembly/ibc/applications/transfer/v1/MsgTransfer";
import { Coin } from "../assembly/cosmos/base/v1beta1/Coin";

describe("IBC", () => {
  test("decodes a transfer message", () => {
    const msg = new MsgTransfer(
      "transfer",
      "channel-141",
      new Coin("atom", "100"),
      "cosmos1hjct6q7npsspsg3dgvzk3sdf89spmlpfg8wwf7",
      "osmo1hjct6q7npsspsg3dgvzk3sdf89spmlpfqua7lv",
      null,
      67890
    );

    const encodedMsg = encodeMsgTransfer(msg);
    const decodedMsg = decodeMsgTransfer(encodedMsg);

    expect(decodedMsg.sourcePort).toBe("transfer");
    expect(decodedMsg.sourceChannel).toBe("channel-141");

    const token = decodedMsg.token as Coin;

    expect(token.denom).toBe("atom");
    expect(token.amount).toBe("100");

    expect(decodedMsg.sender).toBe(msg.sender);
    expect(decodedMsg.receiver).toBe(msg.receiver);
    expect(decodedMsg.timeoutHeight).toBeNull();
    expect(decodedMsg.timeoutTimestamp).toBe(67890);
  });
});
