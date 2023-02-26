// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { PublicKey } from "../crypto/PublicKey";

export class ValidatorUpdate {
  static encode(message: ValidatorUpdate, writer: Writer): void {
    const pubKey = message.pubKey;
    if (pubKey !== null) {
      writer.uint32(10);
      writer.fork();
      PublicKey.encode(pubKey, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int64(message.power);
  }

  static decode(reader: Reader, length: i32): ValidatorUpdate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValidatorUpdate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.power = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pubKey: PublicKey | null;
  power: i64;

  constructor(pubKey: PublicKey | null = null, power: i64 = 0) {
    this.pubKey = pubKey;
    this.power = power;
  }
}

export function encodeValidatorUpdate(message: ValidatorUpdate): Uint8Array {
  return Protobuf.encode(message, ValidatorUpdate.encode);
}

export function decodeValidatorUpdate(buffer: Uint8Array): ValidatorUpdate {
  return Protobuf.decode<ValidatorUpdate>(buffer, ValidatorUpdate.decode);
}