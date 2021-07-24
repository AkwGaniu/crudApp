<template>
    <div class="error">
        <p>
            {{errorMsg}}
            <button @click="$emit('close')" class="dismiss">X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "error",
    props: ['errorMsg']
}
</script>

<style scoped>
    .error  {
        text-align: center;
        background:rgb(207, 120, 138)
    }

    .error p {
        color:rgb(255, 221, 221);
        font-size: 20px

    }

    .dismiss {
        background: rgb(46, 20, 20);
        color: #fff;
        border: none;
        padding: 3px 5px;
        border-radius: 50%;
        cursor: pointer;
        margin-top: 3px;
        margin-right: 5px;
        float: right
    }
</style>