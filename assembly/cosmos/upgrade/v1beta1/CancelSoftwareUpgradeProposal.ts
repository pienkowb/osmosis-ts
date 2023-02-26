// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CancelSoftwareUpgradeProposal {
  static encode(message: CancelSoftwareUpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);
  }

  static decode(reader: Reader, length: i32): CancelSoftwareUpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CancelSoftwareUpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;

  constructor(title: string = "", description: string = "") {
    this.title = title;
    this.description = description;
  }
}

export function encodeCancelSoftwareUpgradeProposal(
  message: CancelSoftwareUpgradeProposal
): Uint8Array {
  return Protobuf.encode(message, CancelSoftwareUpgradeProposal.encode);
}

export function decodeCancelSoftwareUpgradeProposal(
  buffer: Uint8Array
): CancelSoftwareUpgradeProposal {
  return Protobuf.decode<CancelSoftwareUpgradeProposal>(
    buffer,
    CancelSoftwareUpgradeProposal.decode
  );
}
