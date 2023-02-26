// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgRevokeAllowanceResponse {
  static encode(message: MsgRevokeAllowanceResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgRevokeAllowanceResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRevokeAllowanceResponse();

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

export function encodeMsgRevokeAllowanceResponse(
  message: MsgRevokeAllowanceResponse
): Uint8Array {
  return Protobuf.encode(message, MsgRevokeAllowanceResponse.encode);
}

export function decodeMsgRevokeAllowanceResponse(
  buffer: Uint8Array
): MsgRevokeAllowanceResponse {
  return Protobuf.decode<MsgRevokeAllowanceResponse>(
    buffer,
    MsgRevokeAllowanceResponse.decode
  );
}