import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileUploadService {
  constructor(@InjectQueue('upload-queue') private fileQueue: Queue) {}

  uploadFile(file: Express.Multer.File) {
    this.fileQueue.add('csv', { fileName: file.filename });
    return file.filename;
  }
}
