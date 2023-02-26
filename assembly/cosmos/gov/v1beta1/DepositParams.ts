// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Coin } from "../../base/v1beta1/Coin";
import { Duration } from "../../../google/protobuf/Duration";

export class DepositParams {
  static encode(message: DepositParams, writer: Writer): void {
    const minDeposit = message.minDeposit;
    for (let i: i32 = 0; i < minDeposit.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Coin.encode(minDeposit[i], writer);
      writer.ldelim();
    }

    const maxDepositPeriod = message.maxDepositPeriod;
    if (maxDepositPeriod !== null) {
      writer.uint32(18);
      writer.fork();
      Duration.encode(maxDepositPeriod, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DepositParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DepositParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  minDeposit: Array<Coin>;
  maxDepositPeriod: Duration | null;

  constructor(
    minDeposit: Array<Coin> = [],
    maxDepositPeriod: Duration | null = null
  ) {
    this.minDeposit = minDeposit;
    this.maxDepositPeriod = maxDepositPeriod;
  }
}

export function encodeDepositParams(message: DepositParams): Uint8Array {
  return Protobuf.encode(message, DepositParams.encode);
}

export function decodeDepositParams(buffer: Uint8Array): DepositParams {
  return Protobuf.decode<DepositParams>(buffer, DepositParams.decode);
}