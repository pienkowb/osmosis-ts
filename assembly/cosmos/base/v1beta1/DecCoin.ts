// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class DecCoin {
  static encode(message: DecCoin, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(18);
    writer.string(message.amount);
  }

  static decode(reader: Reader, length: i32): DecCoin {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DecCoin();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  amount: string;

  constructor(denom: string = "", amount: string = "") {
    this.denom = denom;
    this.amount = amount;
  }
}

export function encodeDecCoin(message: DecCoin): Uint8Array {
  return Protobuf.encode(message, DecCoin.encode);
}

export function decodeDecCoin(buffer: Uint8Array): DecCoin {
  return Protobuf.decode<DecCoin>(buffer, DecCoin.decode);
}
