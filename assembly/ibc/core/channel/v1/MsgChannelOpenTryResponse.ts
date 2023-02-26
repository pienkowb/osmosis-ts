// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgChannelOpenTryResponse {
  static encode(message: MsgChannelOpenTryResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenTryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenTryResponse();

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

export function encodeMsgChannelOpenTryResponse(
  message: MsgChannelOpenTryResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenTryResponse.encode);
}

export function decodeMsgChannelOpenTryResponse(
  buffer: Uint8Array
): MsgChannelOpenTryResponse {
  return Protobuf.decode<MsgChannelOpenTryResponse>(
    buffer,
    MsgChannelOpenTryResponse.decode
  );
}
