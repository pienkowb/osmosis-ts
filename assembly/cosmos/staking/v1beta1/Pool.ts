// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Pool {
  static encode(message: Pool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.notBondedTokens);

    writer.uint32(18);
    writer.string(message.bondedTokens);
  }

  static decode(reader: Reader, length: i32): Pool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Pool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;

        case 2:
          message.bondedTokens = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  notBondedTokens: string;
  bondedTokens: string;

  constructor(notBondedTokens: string = "", bondedTokens: string = "") {
    this.notBondedTokens = notBondedTokens;
    this.bondedTokens = bondedTokens;
  }
}

export function encodePool(message: Pool): Uint8Array {
  return Protobuf.encode(message, Pool.encode);
}

export function decodePool(buffer: Uint8Array): Pool {
  return Protobuf.decode<Pool>(buffer, Pool.decode);
}