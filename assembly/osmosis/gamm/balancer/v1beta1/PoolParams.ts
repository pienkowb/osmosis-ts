// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { SmoothWeightChangeParams } from "./SmoothWeightChangeParams";

export class PoolParams {
  static encode(message: PoolParams, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.swapFee);

    writer.uint32(18);
    writer.string(message.exitFee);

    const smoothWeightChangeParams = message.smoothWeightChangeParams;
    if (smoothWeightChangeParams !== null) {
      writer.uint32(26);
      writer.fork();
      SmoothWeightChangeParams.encode(smoothWeightChangeParams, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PoolParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PoolParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string();
          break;

        case 2:
          message.exitFee = reader.string();
          break;

        case 3:
          message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  swapFee: string;
  exitFee: string;
  smoothWeightChangeParams: SmoothWeightChangeParams | null;

  constructor(
    swapFee: string = "",
    exitFee: string = "",
    smoothWeightChangeParams: SmoothWeightChangeParams | null = null
  ) {
    this.swapFee = swapFee;
    this.exitFee = exitFee;
    this.smoothWeightChangeParams = smoothWeightChangeParams;
  }
}

export function encodePoolParams(message: PoolParams): Uint8Array {
  return Protobuf.encode(message, PoolParams.encode);
}

export function decodePoolParams(buffer: Uint8Array): PoolParams {
  return Protobuf.decode<PoolParams>(buffer, PoolParams.decode);
}
