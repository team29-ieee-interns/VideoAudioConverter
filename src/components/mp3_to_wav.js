import { spawn } from "child_process";  

const ffmpeg = spawn('ffmpeg', ['-i', 'input.mp3', 'output.wav']);

ffmpeg.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ffmpeg.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
