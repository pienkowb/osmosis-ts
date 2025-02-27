// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Coin } from "../../../cosmos/base/v1beta1/Coin";

export class PoolAsset {
  static encode(message: PoolAsset, writer: Writer): void {
    const token = message.token;
    if (token !== null) {
      writer.uint32(10);
      writer.fork();
      Coin.encode(token, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.weight);
  }

  static decode(reader: Reader, length: i32): PoolAsset {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PoolAsset();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  token: Coin | null;
  weight: string;

  constructor(token: Coin | null = null, weight: string = "") {
    this.token = token;
    this.weight = weight;
  }
}

export function encodePoolAsset(message: PoolAsset): Uint8Array {
  return Protobuf.encode(message, PoolAsset.encode);
}

export function decodePoolAsset(buffer: Uint8Array): PoolAsset {
  return Protobuf.decode<PoolAsset>(buffer, PoolAsset.decode);
}
