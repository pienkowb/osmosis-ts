// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class ResponseFlush {
  static encode(message: ResponseFlush, writer: Writer): void {}

  static decode(reader: Reader, length: i32): ResponseFlush {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseFlush();

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

export function encodeResponseFlush(message: ResponseFlush): Uint8Array {
  return Protobuf.encode(message, ResponseFlush.encode);
}

export function decodeResponseFlush(buffer: Uint8Array): ResponseFlush {
  return Protobuf.decode<ResponseFlush>(buffer, ResponseFlush.decode);
}