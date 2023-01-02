<script>
    export let heading=null;
    export let para=null;
</script>

<div>
    <h3>{heading}</h3>
    <p>{para}</p>
</div>

<style>
    p{
        color: grey;
    }
    div{
        margin: 10px;
        padding: 10px;
        text-align: center;        
        width: 350px;
        height: 200px;        
        background: #FFFFFF;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 15px 30px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        line-height: 30px;
    }
</style>