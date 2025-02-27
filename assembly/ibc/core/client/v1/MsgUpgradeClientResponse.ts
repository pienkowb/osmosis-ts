// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgUpgradeClientResponse {
  static encode(message: MsgUpgradeClientResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUpgradeClientResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpgradeClientResponse();

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

export function encodeMsgUpgradeClientResponse(
  message: MsgUpgradeClientResponse
): Uint8Array {
  return Protobuf.encode(message, MsgUpgradeClientResponse.encode);
}

export function decodeMsgUpgradeClientResponse(
  buffer: Uint8Array
): MsgUpgradeClientResponse {
  return Protobuf.decode<MsgUpgradeClientResponse>(
    buffer,
    MsgUpgradeClientResponse.decode
  );
}
