// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class MsgSuperfluidUnbondLock {
  static encode(message: MsgSuperfluidUnbondLock, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.lockId);
  }

  static decode(reader: Reader, length: i32): MsgSuperfluidUnbondLock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUnbondLock();

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

export function encodeMsgSuperfluidUnbondLock(
  message: MsgSuperfluidUnbondLock
): Uint8Array {
  return Protobuf.encode(message, MsgSuperfluidUnbondLock.encode);
}

export function decodeMsgSuperfluidUnbondLock(
  buffer: Uint8Array
): MsgSuperfluidUnbondLock {
  return Protobuf.decode<MsgSuperfluidUnbondLock>(
    buffer,
    MsgSuperfluidUnbondLock.decode
  );
}
