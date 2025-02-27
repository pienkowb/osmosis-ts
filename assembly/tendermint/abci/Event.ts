// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { EventAttribute } from "./EventAttribute";

export class Event {
  static encode(message: Event, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.type);

    const attributes = message.attributes;
    for (let i: i32 = 0; i < attributes.length; ++i) {
      writer.uint32(18);
      writer.fork();
      EventAttribute.encode(attributes[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Event {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Event();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(
            EventAttribute.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type: string;
  attributes: Array<EventAttribute>;

  constructor(type: string = "", attributes: Array<EventAttribute> = []) {
    this.type = type;
    this.attributes = attributes;
  }
}

export function encodeEvent(message: Event): Uint8Array {
  return Protobuf.encode(message, Event.encode);
}

export function decodeEvent(buffer: Uint8Array): Event {
  return Protobuf.decode<Event>(buffer, Event.decode);
}
