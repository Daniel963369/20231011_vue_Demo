<script>
import ProvideChild3 from './provideChild3.vue';

export default {
    data() {
        return {};
    },
    inject: [
        "msg",
        "arr",
        "setupMSG"
    ],
    components: { ProvideChild3 }
}

</script>


<template>
<div class="show">
    <h1>這是孫子</h1>
爺爺傳的訊息:{{ msg }}
<br>
爺爺傳的陣列:{{arr}}

<p>{{ setupMSG }}</p>

<ProvideChild3 />
</div>



</template>


<style lang="scss" scoped>

.show{
    width:200px;
    height:200px;
    border:1px solid black;
}
</style>