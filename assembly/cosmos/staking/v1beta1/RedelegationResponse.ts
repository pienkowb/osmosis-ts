// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Redelegation } from "./Redelegation";
import { RedelegationEntryResponse } from "./RedelegationEntryResponse";

export class RedelegationResponse {
  static encode(message: RedelegationResponse, writer: Writer): void {
    const redelegation = message.redelegation;
    if (redelegation !== null) {
      writer.uint32(10);
      writer.fork();
      Redelegation.encode(redelegation, writer);
      writer.ldelim();
    }

    const entries = message.entries;
    for (let i: i32 = 0; i < entries.length; ++i) {
      writer.uint32(18);
      writer.fork();
      RedelegationEntryResponse.encode(entries[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): RedelegationResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RedelegationResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;

        case 2:
          message.entries.push(
            RedelegationEntryResponse.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  redelegation: Redelegation | null;
  entries: Array<RedelegationEntryResponse>;

  constructor(
    redelegation: Redelegation | null = null,
    entries: Array<RedelegationEntryResponse> = []
  ) {
    this.redelegation = redelegation;
    this.entries = entries;
  }
}

export function encodeRedelegationResponse(
  message: RedelegationResponse
): Uint8Array {
  return Protobuf.encode(message, RedelegationResponse.encode);
}

export function decodeRedelegationResponse(
  buffer: Uint8Array
): RedelegationResponse {
  return Protobuf.decode<RedelegationResponse>(
    buffer,
    RedelegationResponse.decode
  );
}