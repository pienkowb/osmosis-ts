// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class MsgSuperfluidUndelegate {
  static encode(message: MsgSuperfluidUndelegate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.lockId);
  }

  static decode(reader: Reader, length: i32): MsgSuperfluidUndelegate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUndelegate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.lockId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  lockId: u64;

  constructor(sender: string = "", lockId: u64 = 0) {
    this.sender = sender;
    this.lockId = lockId;
  }
}

export function encodeMsgSuperfluidUndelegate(
  message: MsgSuperfluidUndelegate
): Uint8Array {
  return Protobuf.encode(message, MsgSuperfluidUndelegate.encode);
}

export function decodeMsgSuperfluidUndelegate(
  buffer: Uint8Array
): MsgSuperfluidUndelegate {
  return Protobuf.decode<MsgSuperfluidUndelegate>(
    buffer,
    MsgSuperfluidUndelegate.decode
  );
}