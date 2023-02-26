// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { WeightedVoteOption } from "./WeightedVoteOption";

export class MsgVoteWeighted {
  static encode(message: MsgVoteWeighted, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);

    writer.uint32(18);
    writer.string(message.voter);

    const options = message.options;
    for (let i: i32 = 0; i < options.length; ++i) {
      writer.uint32(26);
      writer.fork();
      WeightedVoteOption.encode(options[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgVoteWeighted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteWeighted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;
  voter: string;
  options: Array<WeightedVoteOption>;

  constructor(
    proposalId: u64 = 0,
    voter: string = "",
    options: Array<WeightedVoteOption> = []
  ) {
    this.proposalId = proposalId;
    this.voter = voter;
    this.options = options;
  }
}

export function encodeMsgVoteWeighted(message: MsgVoteWeighted): Uint8Array {
  return Protobuf.encode(message, MsgVoteWeighted.encode);
}

export function decodeMsgVoteWeighted(buffer: Uint8Array): MsgVoteWeighted {
  return Protobuf.decode<MsgVoteWeighted>(buffer, MsgVoteWeighted.decode);
}