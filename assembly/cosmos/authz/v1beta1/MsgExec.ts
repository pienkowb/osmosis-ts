// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../google/protobuf/Any";

export class MsgExec {
  static encode(message: MsgExec, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.grantee);

    const msgs = message.msgs;
    for (let i: i32 = 0; i < msgs.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Any.encode(msgs[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgExec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  grantee: string;
  msgs: Array<Any>;

  constructor(grantee: string = "", msgs: Array<Any> = []) {
    this.grantee = grantee;
    this.msgs = msgs;
  }
}

export function encodeMsgExec(message: MsgExec): Uint8Array {
  return Protobuf.encode(message, MsgExec.encode);
}

export function decodeMsgExec(buffer: Uint8Array): MsgExec {
  return Protobuf.decode<MsgExec>(buffer, MsgExec.decode);
}
