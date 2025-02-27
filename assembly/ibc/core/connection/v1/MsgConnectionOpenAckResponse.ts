// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgConnectionOpenAckResponse {
  static encode(message: MsgConnectionOpenAckResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgConnectionOpenAckResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenAckResponse();

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

export function encodeMsgConnectionOpenAckResponse(
  message: MsgConnectionOpenAckResponse
): Uint8Array {
  return Protobuf.encode(message, MsgConnectionOpenAckResponse.encode);
}

export function decodeMsgConnectionOpenAckResponse(
  buffer: Uint8Array
): MsgConnectionOpenAckResponse {
  return Protobuf.decode<MsgConnectionOpenAckResponse>(
    buffer,
    MsgConnectionOpenAckResponse.decode
  );
}
