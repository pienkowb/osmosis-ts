// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Coin } from "../../base/v1beta1/Coin";

export class MsgSend {
  static encode(message: MsgSend, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.fromAddress);

    writer.uint32(18);
    writer.string(message.toAddress);

    const amount = message.amount;
    for (let i: i32 = 0; i < amount.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Coin.encode(amount[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgSend {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSend();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;

        case 2:
          message.toAddress = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  fromAddress: string;
  toAddress: string;
  amount: Array<Coin>;

  constructor(
    fromAddress: string = "",
    toAddress: string = "",
    amount: Array<Coin> = []
  ) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

export function encodeMsgSend(message: MsgSend): Uint8Array {
  return Protobuf.encode(message, MsgSend.encode);
}

export function decodeMsgSend(buffer: Uint8Array): MsgSend {
  return Protobuf.decode<MsgSend>(buffer, MsgSend.decode);
}
