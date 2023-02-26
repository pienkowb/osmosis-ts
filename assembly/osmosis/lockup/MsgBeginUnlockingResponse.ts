// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgBeginUnlockingResponse {
  static encode(message: MsgBeginUnlockingResponse, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.success);
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlockingResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlockingResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  success: bool;

  constructor(success: bool = false) {
    this.success = success;
  }
}

export function encodeMsgBeginUnlockingResponse(
  message: MsgBeginUnlockingResponse
): Uint8Array {
  return Protobuf.encode(message, MsgBeginUnlockingResponse.encode);
}

export function decodeMsgBeginUnlockingResponse(
  buffer: Uint8Array
): MsgBeginUnlockingResponse {
  return Protobuf.decode<MsgBeginUnlockingResponse>(
    buffer,
    MsgBeginUnlockingResponse.decode
  );
}
