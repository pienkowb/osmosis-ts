// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgSuperfluidUnbondLockResponse {
  static encode(
    message: MsgSuperfluidUnbondLockResponse,
    writer: Writer
  ): void {}

  static decode(reader: Reader, length: i32): MsgSuperfluidUnbondLockResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUnbondLockResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgSuperfluidUnbondLockResponse(
  message: MsgSuperfluidUnbondLockResponse
): Uint8Array {
  return Protobuf.encode(message, MsgSuperfluidUnbondLockResponse.encode);
}

export function decodeMsgSuperfluidUnbondLockResponse(
  buffer: Uint8Array
): MsgSuperfluidUnbondLockResponse {
  return Protobuf.decode<MsgSuperfluidUnbondLockResponse>(
    buffer,
    MsgSuperfluidUnbondLockResponse.decode
  );
}
