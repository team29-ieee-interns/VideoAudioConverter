<script>
import { getFile } from "./upload";
  let fileInput,
    folder = "audio/";
  let extensions = ".mp3, .m4a, .wav, .flac";
</script>

<button class="upload-btn" on:click={() => fileInput.click()}
  >Choose Audio</button
>
<!--fileInput.click() triggers a click event on input element-->
<input
  class="hidden"
  type="file"
  accept={extensions}
  bind:this={fileInput}
  on:change={(event) => getFile(event, folder)}
/>

<style>
  .hidden {
    display: none;
  }
  .upload-btn {
    width: 177px;
    height: 63px;
    background-color: black;
    font-family: sans-serif;
    color: white;
    font-weight: 500;
    font-size: 24px;
    border: none;
    padding: 8px 8px;
    margin-right: 15px;
    background: #0066ff;
    border: 1px solid #0066ff;
    border-radius: 8px;
  }

  .upload-btn:hover {
    background-color: white;
    color: black;
    outline: black solid 2px;
  }
</style>
