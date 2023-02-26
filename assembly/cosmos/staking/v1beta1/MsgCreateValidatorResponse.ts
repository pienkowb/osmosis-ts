// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgCreateValidatorResponse {
  static encode(message: MsgCreateValidatorResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgCreateValidatorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateValidatorResponse();

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

export function encodeMsgCreateValidatorResponse(
  message: MsgCreateValidatorResponse
): Uint8Array {
  return Protobuf.encode(message, MsgCreateValidatorResponse.encode);
}

export function decodeMsgCreateValidatorResponse(
  buffer: Uint8Array
): MsgCreateValidatorResponse {
  return Protobuf.decode<MsgCreateValidatorResponse>(
    buffer,
    MsgCreateValidatorResponse.decode
  );
}