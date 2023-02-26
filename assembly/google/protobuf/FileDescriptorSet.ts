// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { FileDescriptorProto } from "./FileDescriptorProto";

export class FileDescriptorSet {
  static encode(message: FileDescriptorSet, writer: Writer): void {
    const file = message.file;
    for (let i: i32 = 0; i < file.length; ++i) {
      writer.uint32(10);
      writer.fork();
      FileDescriptorProto.encode(file[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): FileDescriptorSet {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new FileDescriptorSet();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(
            FileDescriptorProto.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  file: Array<FileDescriptorProto>;

  constructor(file: Array<FileDescriptorProto> = []) {
    this.file = file;
  }
}

export function encodeFileDescriptorSet(
  message: FileDescriptorSet
): Uint8Array {
  return Protobuf.encode(message, FileDescriptorSet.encode);
}

export function decodeFileDescriptorSet(buffer: Uint8Array): FileDescriptorSet {
  return Protobuf.decode<FileDescriptorSet>(buffer, FileDescriptorSet.decode);
}