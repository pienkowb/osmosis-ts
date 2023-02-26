// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgSubmitProposalResponse {
  static encode(message: MsgSubmitProposalResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);
  }

  static decode(reader: Reader, length: i32): MsgSubmitProposalResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitProposalResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;

  constructor(proposalId: u64 = 0) {
    this.proposalId = proposalId;
  }
}

export function encodeMsgSubmitProposalResponse(
  message: MsgSubmitProposalResponse
): Uint8Array {
  return Protobuf.encode(message, MsgSubmitProposalResponse.encode);
}

export function decodeMsgSubmitProposalResponse(
  buffer: Uint8Array
): MsgSubmitProposalResponse {
  return Protobuf.decode<MsgSubmitProposalResponse>(
    buffer,
    MsgSubmitProposalResponse.decode
  );
}