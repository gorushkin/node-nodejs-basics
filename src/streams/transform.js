import { Transform, pipeline } from 'stream';

const transform = async () => {
  const readable = process.stdin;
  const wrieable = process.stdout;

  const transform = new Transform({
    transform(chunk, enc, cb) {
      const chunkStrigified = chunk.toString().trim();

      const reversedChunk = chunkStrigified.split('').reverse().join('');

      this.push(reversedChunk + '\n');

      cb();
    },
  });

  pipeline(readable, transform, wrieable, (err) => console.log(err));
};

await transform();
