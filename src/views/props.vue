<script>
import child from '../components/child.vue'
export default {
    data(){
        return{
            monster1:{
                name:"blueEyesWhiteDragon",
                attack:3000,
                defense:2500,
            },
            monster1Img:'https://img.toy-people.com/member/166752156096.jpg',

            monster2:{
                name:"blackMagician",
                attack:2500,
                defense:2100,
            },
            monster2Img:"https://1.bp.blogspot.com/-DUQN8iTl1xM/X23YkFoIY9I/AAAAAAAAE38/d1wRRBM_OFkKNBFSzqUI1hpDQ4rfvEL0QCLcBGAsYHQ/w1249-h1236/46986414_waifu2x_photo_noise3_scale_tta_1.png"
        }
    },

    components:{
        child
    }
}

</script>

<template>
<div class="show">
    <child :card="monster1"
    :cardImg="monster1Img"
    :card2="monster2"
    :card2Img="monster2Img"/>
</div>


</template>

<style lang="scss" scoped>

.show{
    display:flex;
    justify-content: center;
    align-items: center;
}

</style>