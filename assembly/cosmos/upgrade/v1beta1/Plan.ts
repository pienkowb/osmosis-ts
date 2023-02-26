// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Timestamp } from "../../../google/protobuf/Timestamp";
import { Any } from "../../../google/protobuf/Any";

export class Plan {
  static encode(message: Plan, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    const time = message.time;
    if (time !== null) {
      writer.uint32(18);
      writer.fork();
      Timestamp.encode(time, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.height);

    writer.uint32(34);
    writer.string(message.info);

    const upgradedClientState = message.upgradedClientState;
    if (upgradedClientState !== null) {
      writer.uint32(42);
      writer.fork();
      Any.encode(upgradedClientState, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Plan {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Plan();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  time: Timestamp | null;
  height: i64;
  info: string;
  upgradedClientState: Any | null;

  constructor(
    name: string = "",
    time: Timestamp | null = null,
    height: i64 = 0,
    info: string = "",
    upgradedClientState: Any | null = null
  ) {
    this.name = name;
    this.time = time;
    this.height = height;
    this.info = info;
    this.upgradedClientState = upgradedClientState;
  }
}

export function encodePlan(message: Plan): Uint8Array {
  return Protobuf.encode(message, Plan.encode);
}

export function decodePlan(buffer: Uint8Array): Plan {
  return Protobuf.decode<Plan>(buffer, Plan.decode);
}
