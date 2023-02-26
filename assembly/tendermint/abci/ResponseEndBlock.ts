// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ValidatorUpdate } from "./ValidatorUpdate";
import { ConsensusParams } from "./ConsensusParams";
import { Event } from "./Event";

export class ResponseEndBlock {
  static encode(message: ResponseEndBlock, writer: Writer): void {
    const validatorUpdates = message.validatorUpdates;
    for (let i: i32 = 0; i < validatorUpdates.length; ++i) {
      writer.uint32(10);
      writer.fork();
      ValidatorUpdate.encode(validatorUpdates[i], writer);
      writer.ldelim();
    }

    const consensusParamUpdates = message.consensusParamUpdates;
    if (consensusParamUpdates !== null) {
      writer.uint32(18);
      writer.fork();
      ConsensusParams.encode(consensusParamUpdates, writer);
      writer.ldelim();
    }

    const events = message.events;
    for (let i: i32 = 0; i < events.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Event.encode(events[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ResponseEndBlock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseEndBlock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;

        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  validatorUpdates: Array<ValidatorUpdate>;
  consensusParamUpdates: ConsensusParams | null;
  events: Array<Event>;

  constructor(
    validatorUpdates: Array<ValidatorUpdate> = [],
    consensusParamUpdates: ConsensusParams | null = null,
    events: Array<Event> = []
  ) {
    this.validatorUpdates = validatorUpdates;
    this.consensusParamUpdates = consensusParamUpdates;
    this.events = events;
  }
}

export function encodeResponseEndBlock(message: ResponseEndBlock): Uint8Array {
  return Protobuf.encode(message, ResponseEndBlock.encode);
}

export function decodeResponseEndBlock(buffer: Uint8Array): ResponseEndBlock {
  return Protobuf.decode<ResponseEndBlock>(buffer, ResponseEndBlock.decode);
}