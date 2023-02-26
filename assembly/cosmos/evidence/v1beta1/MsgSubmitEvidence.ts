// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../google/protobuf/Any";

export class MsgSubmitEvidence {
  static encode(message: MsgSubmitEvidence, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.submitter);

    const evidence = message.evidence;
    if (evidence !== null) {
      writer.uint32(18);
      writer.fork();
      Any.encode(evidence, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgSubmitEvidence {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitEvidence();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;

        case 2:
          message.evidence = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  submitter: string;
  evidence: Any | null;

  constructor(submitter: string = "", evidence: Any | null = null) {
    this.submitter = submitter;
    this.evidence = evidence;
  }
}

export function encodeMsgSubmitEvidence(
  message: MsgSubmitEvidence
): Uint8Array {
  return Protobuf.encode(message, MsgSubmitEvidence.encode);
}

export function decodeMsgSubmitEvidence(buffer: Uint8Array): MsgSubmitEvidence {
  return Protobuf.decode<MsgSubmitEvidence>(buffer, MsgSubmitEvidence.decode);
}