// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Timestamp } from "../../../../google/protobuf/Timestamp";
import { Duration } from "../../../../google/protobuf/Duration";
import { PoolAsset } from "../../v1beta1/PoolAsset";

export class SmoothWeightChangeParams {
  static encode(message: SmoothWeightChangeParams, writer: Writer): void {
    const startTime = message.startTime;
    if (startTime !== null) {
      writer.uint32(10);
      writer.fork();
      Timestamp.encode(startTime, writer);
      writer.ldelim();
    }

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(18);
      writer.fork();
      Duration.encode(duration, writer);
      writer.ldelim();
    }

    const initialPoolWeights = message.initialPoolWeights;
    for (let i: i32 = 0; i < initialPoolWeights.length; ++i) {
      writer.uint32(26);
      writer.fork();
      PoolAsset.encode(initialPoolWeights[i], writer);
      writer.ldelim();
    }

    const targetPoolWeights = message.targetPoolWeights;
    for (let i: i32 = 0; i < targetPoolWeights.length; ++i) {
      writer.uint32(34);
      writer.fork();
      PoolAsset.encode(targetPoolWeights[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SmoothWeightChangeParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SmoothWeightChangeParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.initialPoolWeights.push(
            PoolAsset.decode(reader, reader.uint32())
          );
          break;

        case 4:
          message.targetPoolWeights.push(
            PoolAsset.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  startTime: Timestamp | null;
  duration: Duration | null;
  initialPoolWeights: Array<PoolAsset>;
  targetPoolWeights: Array<PoolAsset>;

  constructor(
    startTime: Timestamp | null = null,
    duration: Duration | null = null,
    initialPoolWeights: Array<PoolAsset> = [],
    targetPoolWeights: Array<PoolAsset> = []
  ) {
    this.startTime = startTime;
    this.duration = duration;
    this.initialPoolWeights = initialPoolWeights;
    this.targetPoolWeights = targetPoolWeights;
  }
}

export function encodeSmoothWeightChangeParams(
  message: SmoothWeightChangeParams
): Uint8Array {
  return Protobuf.encode(message, SmoothWeightChangeParams.encode);
}

export function decodeSmoothWeightChangeParams(
  buffer: Uint8Array
): SmoothWeightChangeParams {
  return Protobuf.decode<SmoothWeightChangeParams>(
    buffer,
    SmoothWeightChangeParams.decode
  );
}
