// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Duration } from "../../google/protobuf/Duration";
import { Timestamp } from "../../google/protobuf/Timestamp";
import { LockQueryType } from "./LockQueryType";

export class QueryCondition {
  static encode(message: QueryCondition, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.lockQueryType);

    writer.uint32(18);
    writer.string(message.denom);

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(26);
      writer.fork();
      Duration.encode(duration, writer);
      writer.ldelim();
    }

    const timestamp = message.timestamp;
    if (timestamp !== null) {
      writer.uint32(34);
      writer.fork();
      Timestamp.encode(timestamp, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryCondition {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCondition();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = reader.int32();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  lockQueryType: LockQueryType;
  denom: string;
  duration: Duration | null;
  timestamp: Timestamp | null;

  constructor(
    lockQueryType: LockQueryType = 0,
    denom: string = "",
    duration: Duration | null = null,
    timestamp: Timestamp | null = null
  ) {
    this.lockQueryType = lockQueryType;
    this.denom = denom;
    this.duration = duration;
    this.timestamp = timestamp;
  }
}

export function encodeQueryCondition(message: QueryCondition): Uint8Array {
  return Protobuf.encode(message, QueryCondition.encode);
}

export function decodeQueryCondition(buffer: Uint8Array): QueryCondition {
  return Protobuf.decode<QueryCondition>(buffer, QueryCondition.decode);
}
