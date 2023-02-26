// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class MsgBeginUnlockingAll {
  static encode(message: MsgBeginUnlockingAll, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.owner);
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlockingAll {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlockingAll();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  owner: string;

  constructor(owner: string = "") {
    this.owner = owner;
  }
}

export function encodeMsgBeginUnlockingAll(
  message: MsgBeginUnlockingAll
): Uint8Array {
  return Protobuf.encode(message, MsgBeginUnlockingAll.encode);
}

export function decodeMsgBeginUnlockingAll(
  buffer: Uint8Array
): MsgBeginUnlockingAll {
  return Protobuf.decode<MsgBeginUnlockingAll>(
    buffer,
    MsgBeginUnlockingAll.decode
  );
}