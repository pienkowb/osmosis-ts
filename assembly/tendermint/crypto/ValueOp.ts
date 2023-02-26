// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Proof } from "./Proof";

export class ValueOp {
  static encode(message: ValueOp, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const proof = message.proof;
    if (proof !== null) {
      writer.uint32(18);
      writer.fork();
      Proof.encode(proof, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ValueOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValueOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  proof: Proof | null;

  constructor(key: Uint8Array = new Uint8Array(0), proof: Proof | null = null) {
    this.key = key;
    this.proof = proof;
  }
}

export function encodeValueOp(message: ValueOp): Uint8Array {
  return Protobuf.encode(message, ValueOp.encode);
}

export function decodeValueOp(buffer: Uint8Array): ValueOp {
  return Protobuf.decode<ValueOp>(buffer, ValueOp.decode);
}