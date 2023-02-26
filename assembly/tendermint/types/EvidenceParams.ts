// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Duration } from "../../google/protobuf/Duration";

@unmanaged
export class EvidenceParams {
  static encode(message: EvidenceParams, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.maxAgeNumBlocks);

    const maxAgeDuration = message.maxAgeDuration;
    if (maxAgeDuration !== null) {
      writer.uint32(18);
      writer.fork();
      Duration.encode(maxAgeDuration, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.maxBytes);
  }

  static decode(reader: Reader, length: i32): EvidenceParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvidenceParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;

        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxBytes = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  maxAgeNumBlocks: i64;
  maxAgeDuration: Duration | null;
  maxBytes: i64;

  constructor(
    maxAgeNumBlocks: i64 = 0,
    maxAgeDuration: Duration | null = null,
    maxBytes: i64 = 0
  ) {
    this.maxAgeNumBlocks = maxAgeNumBlocks;
    this.maxAgeDuration = maxAgeDuration;
    this.maxBytes = maxBytes;
  }
}

export function encodeEvidenceParams(message: EvidenceParams): Uint8Array {
  return Protobuf.encode(message, EvidenceParams.encode);
}

export function decodeEvidenceParams(buffer: Uint8Array): EvidenceParams {
  return Protobuf.decode<EvidenceParams>(buffer, EvidenceParams.decode);
}