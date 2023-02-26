// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class MsgSubmitEvidenceResponse {
  static encode(message: MsgSubmitEvidenceResponse, writer: Writer): void {
    writer.uint32(34);
    writer.bytes(message.hash);
  }

  static decode(reader: Reader, length: i32): MsgSubmitEvidenceResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitEvidenceResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;

  constructor(hash: Uint8Array = new Uint8Array(0)) {
    this.hash = hash;
  }
}

export function encodeMsgSubmitEvidenceResponse(
  message: MsgSubmitEvidenceResponse
): Uint8Array {
  return Protobuf.encode(message, MsgSubmitEvidenceResponse.encode);
}

export function decodeMsgSubmitEvidenceResponse(
  buffer: Uint8Array
): MsgSubmitEvidenceResponse {
  return Protobuf.decode<MsgSubmitEvidenceResponse>(
    buffer,
    MsgSubmitEvidenceResponse.decode
  );
}