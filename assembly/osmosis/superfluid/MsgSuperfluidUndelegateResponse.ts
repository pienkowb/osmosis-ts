// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgSuperfluidUndelegateResponse {
  static encode(
    message: MsgSuperfluidUndelegateResponse,
    writer: Writer
  ): void {}

  static decode(reader: Reader, length: i32): MsgSuperfluidUndelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUndelegateResponse();

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

export function encodeMsgSuperfluidUndelegateResponse(
  message: MsgSuperfluidUndelegateResponse
): Uint8Array {
  return Protobuf.encode(message, MsgSuperfluidUndelegateResponse.encode);
}

export function decodeMsgSuperfluidUndelegateResponse(
  buffer: Uint8Array
): MsgSuperfluidUndelegateResponse {
  return Protobuf.decode<MsgSuperfluidUndelegateResponse>(
    buffer,
    MsgSuperfluidUndelegateResponse.decode
  );
}