<script>
    import Card from "./card.svelte";    
</script>

<div id="guide">
    <table>
        <tr><td colspan="3" align="center"><h1>Guide</h1></td> </tr>
        <tr>
            <td>
                <Card
                    heading={"1. Upload a file"}
                    para={"Click on “Choose Audio” or “Choose video” button. Select file to be uploaded from your local files."}
                /></td>
            <td><Card
                    heading={"2. Choose file format & convert"}
                    para={"After uploading your file, select the required file format you wish to convert to. Click on “Convert”"}
                /></td>
            <td><Card
                    heading={"3. Download file"}
                    para={"Click on download button and your file will be saved in required file format."}
                /></td>
        </tr>
    </table>
</div>

<style>
    #guide {
        position: absolute;
        left: 100px;
        top: 700px;
        font-weight: 400;
        font-size: 20px;
    }
</style>