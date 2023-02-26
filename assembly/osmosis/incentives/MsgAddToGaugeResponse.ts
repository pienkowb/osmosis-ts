// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgAddToGaugeResponse {
  static encode(message: MsgAddToGaugeResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgAddToGaugeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAddToGaugeResponse();

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

export function encodeMsgAddToGaugeResponse(
  message: MsgAddToGaugeResponse
): Uint8Array {
  return Protobuf.encode(message, MsgAddToGaugeResponse.encode);
}

export function decodeMsgAddToGaugeResponse(
  buffer: Uint8Array
): MsgAddToGaugeResponse {
  return Protobuf.decode<MsgAddToGaugeResponse>(
    buffer,
    MsgAddToGaugeResponse.decode
  );
}
