// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class ResponseLoadSnapshotChunk {
  static encode(message: ResponseLoadSnapshotChunk, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.chunk);
  }

  static decode(reader: Reader, length: i32): ResponseLoadSnapshotChunk {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseLoadSnapshotChunk();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  chunk: Uint8Array;

  constructor(chunk: Uint8Array = new Uint8Array(0)) {
    this.chunk = chunk;
  }
}

export function encodeResponseLoadSnapshotChunk(
  message: ResponseLoadSnapshotChunk
): Uint8Array {
  return Protobuf.encode(message, ResponseLoadSnapshotChunk.encode);
}

export function decodeResponseLoadSnapshotChunk(
  buffer: Uint8Array
): ResponseLoadSnapshotChunk {
  return Protobuf.decode<ResponseLoadSnapshotChunk>(
    buffer,
    ResponseLoadSnapshotChunk.decode
  );
}
