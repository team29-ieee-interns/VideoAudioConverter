<script context="module">
    // If the context attribute is set to 'module', the script will be
    //run in a module context, which means that the script will be treated as a JavaScript module. <script context="module"> isn't reactive
    export var mdiv;
</script>

<div class="progress">
    <div class="progress-bar" bind:this={mdiv}>Uploading..</div>
</div>

<style>
    .progress {
        width: 100%;
        height: 20px;
        background: #eee;
        border-radius: 10px;
    }
    .progress-bar {
        width: 0%;
        height: 100%;
        background: rgb(73, 137, 84);
        border-radius: 10px;
    }
</style>