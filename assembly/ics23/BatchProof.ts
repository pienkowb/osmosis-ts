// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { BatchEntry } from "./BatchEntry";

export class BatchProof {
  static encode(message: BatchProof, writer: Writer): void {
    const entries = message.entries;
    for (let i: i32 = 0; i < entries.length; ++i) {
      writer.uint32(10);
      writer.fork();
      BatchEntry.encode(entries[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): BatchProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BatchProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  entries: Array<BatchEntry>;

  constructor(entries: Array<BatchEntry> = []) {
    this.entries = entries;
  }
}

export function encodeBatchProof(message: BatchProof): Uint8Array {
  return Protobuf.encode(message, BatchProof.encode);
}

export function decodeBatchProof(buffer: Uint8Array): BatchProof {
  return Protobuf.decode<BatchProof>(buffer, BatchProof.decode);
}
