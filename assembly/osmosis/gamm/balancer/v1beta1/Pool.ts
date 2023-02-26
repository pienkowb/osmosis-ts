// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { PoolParams } from "./PoolParams";
import { Coin } from "../../../../cosmos/base/v1beta1/Coin";
import { PoolAsset } from "../../v1beta1/PoolAsset";

export class Pool {
  static encode(message: Pool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    writer.uint32(16);
    writer.uint64(message.id);

    const poolParams = message.poolParams;
    if (poolParams !== null) {
      writer.uint32(26);
      writer.fork();
      PoolParams.encode(poolParams, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.futurePoolGovernor);

    const totalShares = message.totalShares;
    if (totalShares !== null) {
      writer.uint32(42);
      writer.fork();
      Coin.encode(totalShares, writer);
      writer.ldelim();
    }

    const poolAssets = message.poolAssets;
    for (let i: i32 = 0; i < poolAssets.length; ++i) {
      writer.uint32(50);
      writer.fork();
      PoolAsset.encode(poolAssets[i], writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.totalWeight);
  }

  static decode(reader: Reader, length: i32): Pool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Pool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.id = reader.uint64();
          break;

        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.futurePoolGovernor = reader.string();
          break;

        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;

        case 7:
          message.totalWeight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  id: u64;
  poolParams: PoolParams | null;
  futurePoolGovernor: string;
  totalShares: Coin | null;
  poolAssets: Array<PoolAsset>;
  totalWeight: string;

  constructor(
    address: string = "",
    id: u64 = 0,
    poolParams: PoolParams | null = null,
    futurePoolGovernor: string = "",
    totalShares: Coin | null = null,
    poolAssets: Array<PoolAsset> = [],
    totalWeight: string = ""
  ) {
    this.address = address;
    this.id = id;
    this.poolParams = poolParams;
    this.futurePoolGovernor = futurePoolGovernor;
    this.totalShares = totalShares;
    this.poolAssets = poolAssets;
    this.totalWeight = totalWeight;
  }
}

export function encodePool(message: Pool): Uint8Array {
  return Protobuf.encode(message, Pool.encode);
}

export function decodePool(buffer: Uint8Array): Pool {
  return Protobuf.decode<Pool>(buffer, Pool.decode);
}