<script>
    import Chooseaudio from "../components/Chooseaudio.svelte";
    import ChooseVideo from "../components/chooseVideo.svelte";
    import Progressbar from "../components/progressbar.svelte";
    import Guide from "../components/guide.svelte";
</script>

<div class="container">
    <div id="topleft">
        <h1>Convert Audio and Videos</h1>
        <p>
            Free online Audio & Video Converter. <br />Convert to MP4, MP3,
            AVI, MKV etc.
        </p>
        <table>
            <tr>
                <td><ChooseVideo /></td>
                <td><Chooseaudio /></td>
            </tr>
            <tr></tr>
            <tr><td colspan="2"><Progressbar/></td></tr>
        </table>
    </div>
    <Guide/>        
</div>
<div class="imag"><img src="16.jpg" alt="background" /></div>

<style>    
    .imag {
        align-items: center;
        padding-right: 7vh;
    }
    img {
        width: 600px;
        float: right;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #topleft {
        position: absolute;
        width: 534px;
        height: 176px;
        left: 151px;
        top: 200px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.4px;
        color: #000000;
    }
</style>
