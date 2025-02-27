// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class DenomUnit {
  static encode(message: DenomUnit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(16);
    writer.uint32(message.exponent);

    const aliases = message.aliases;
    if (aliases.length !== 0) {
      for (let i: i32 = 0; i < aliases.length; ++i) {
        writer.uint32(26);
        writer.string(aliases[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): DenomUnit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DenomUnit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.exponent = reader.uint32();
          break;

        case 3:
          message.aliases.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  exponent: u32;
  aliases: Array<string>;

  constructor(
    denom: string = "",
    exponent: u32 = 0,
    aliases: Array<string> = []
  ) {
    this.denom = denom;
    this.exponent = exponent;
    this.aliases = aliases;
  }
}

export function encodeDenomUnit(message: DenomUnit): Uint8Array {
  return Protobuf.encode(message, DenomUnit.encode);
}

export function decodeDenomUnit(buffer: Uint8Array): DenomUnit {
  return Protobuf.decode<DenomUnit>(buffer, DenomUnit.decode);
}
