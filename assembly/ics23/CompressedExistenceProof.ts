// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { LeafOp } from "./LeafOp";

export class CompressedExistenceProof {
  static encode(message: CompressedExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    writer.uint32(18);
    writer.bytes(message.value);

    const leaf = message.leaf;
    if (leaf !== null) {
      writer.uint32(26);
      writer.fork();
      LeafOp.encode(leaf, writer);
      writer.ldelim();
    }

    const path = message.path;
    if (path.length !== 0) {
      for (let i: i32 = 0; i < path.length; ++i) {
        writer.uint32(32);
        writer.int32(path[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): CompressedExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompressedExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          message.path.push(reader.int32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp | null;
  path: Array<i32>;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0),
    leaf: LeafOp | null = null,
    path: Array<i32> = []
  ) {
    this.key = key;
    this.value = value;
    this.leaf = leaf;
    this.path = path;
  }
}

export function encodeCompressedExistenceProof(
  message: CompressedExistenceProof
): Uint8Array {
  return Protobuf.encode(message, CompressedExistenceProof.encode);
}

export function decodeCompressedExistenceProof(
  buffer: Uint8Array
): CompressedExistenceProof {
  return Protobuf.decode<CompressedExistenceProof>(
    buffer,
    CompressedExistenceProof.decode
  );
}
