// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Coin } from "../../../cosmos/base/v1beta1/Coin";

export class MsgJoinSwapExternAmountIn {
  static encode(message: MsgJoinSwapExternAmountIn, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    const tokenIn = message.tokenIn;
    if (tokenIn !== null) {
      writer.uint32(26);
      writer.fork();
      Coin.encode(tokenIn, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.shareOutMinAmount);
  }

  static decode(reader: Reader, length: i32): MsgJoinSwapExternAmountIn {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinSwapExternAmountIn();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shareOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  tokenIn: Coin | null;
  shareOutMinAmount: string;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    tokenIn: Coin | null = null,
    shareOutMinAmount: string = ""
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.tokenIn = tokenIn;
    this.shareOutMinAmount = shareOutMinAmount;
  }
}

export function encodeMsgJoinSwapExternAmountIn(
  message: MsgJoinSwapExternAmountIn
): Uint8Array {
  return Protobuf.encode(message, MsgJoinSwapExternAmountIn.encode);
}

export function decodeMsgJoinSwapExternAmountIn(
  buffer: Uint8Array
): MsgJoinSwapExternAmountIn {
  return Protobuf.decode<MsgJoinSwapExternAmountIn>(
    buffer,
    MsgJoinSwapExternAmountIn.decode
  );
}
