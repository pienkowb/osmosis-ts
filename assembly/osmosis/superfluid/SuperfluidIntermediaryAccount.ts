// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class SuperfluidIntermediaryAccount {
  static encode(message: SuperfluidIntermediaryAccount, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(18);
    writer.string(message.valAddr);

    writer.uint32(24);
    writer.uint64(message.gaugeId);
  }

  static decode(reader: Reader, length: i32): SuperfluidIntermediaryAccount {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SuperfluidIntermediaryAccount();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.valAddr = reader.string();
          break;

        case 3:
          message.gaugeId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  valAddr: string;
  gaugeId: u64;

  constructor(denom: string = "", valAddr: string = "", gaugeId: u64 = 0) {
    this.denom = denom;
    this.valAddr = valAddr;
    this.gaugeId = gaugeId;
  }
}

export function encodeSuperfluidIntermediaryAccount(
  message: SuperfluidIntermediaryAccount
): Uint8Array {
  return Protobuf.encode(message, SuperfluidIntermediaryAccount.encode);
}

export function decodeSuperfluidIntermediaryAccount(
  buffer: Uint8Array
): SuperfluidIntermediaryAccount {
  return Protobuf.decode<SuperfluidIntermediaryAccount>(
    buffer,
    SuperfluidIntermediaryAccount.decode
  );
}
