<script>
import VtextAndVModel from '../views/VtextAndVmodel.vue'
import Vfor from '../views/Vfor.vue'
import Von from '../views/Von.vue'
import Vbind from '../views/Vbind.vue'
import VifAndVshow from '../views/VifAndVshow.vue'
import props from '../views/props.vue'
import emit from '../views/Emit.vue'
import provideAndInject from '../views/provideAndInject.vue'
import WatchAndComputed from './WatchAndComputed.vue'
export default {
    data(){
        return{
            controlPage:false,
            toVtextAndVmodel:false,
            toVfor:false,
            toVon:false,
            toVbind:false,
            toVifAndVshow:false,
            toProps:false,
            toEmit:false,
            toProvideAndInject:false,
            toWatchAndComputed:false,
        }
    },
    components:{
        VtextAndVModel,
        Vfor,
        Von,
        Vbind,
        VifAndVshow,
        props,
        emit,
        provideAndInject,
        WatchAndComputed,
    },

    methods:{
        turnToVtextAndVmodel(){
            this.toVtextAndVmodel = !this.toVtextAndVmodel
        },
        turnToVfor(){
            this.toVfor = !this.toVfor
        },
        turnToVon(){
            this.toVon = !this.toVon
        },
        turnToVbind(){
            this.toVbind = !this.toVbind
        },
        turnToVifAndVshow(){
            this.toVifAndVshow = !this.toVifAndVshow
        },
        turnToProps(){
            this.toProps = !this.toProps
        },
        turnToEmit(){
            this.toEmit = !this.toEmit
        },
        turnToProvideAndInject(){
            this.toProvideAndInject = !this.toProvideAndInject
        },
        turnToWatchAndComputed(){
            this.toWatchAndComputed = !this.toWatchAndComputed
        },
    }
}

</script>


<template>
<div class="vueTheme">
    <div class="vtextAndVmodelSort">
        <div class="vtextAndVmodelImg" @click="turnToVtextAndVmodel"></div>
        <div class="vtextAndVmodelText">
            <p>v-text以及v-model筆記</p>
        </div>
    </div>
    <div class="vforSort">
        <div class="vforImg" @click="turnToVfor"></div>
        <div class="vforText">
            <p>v-for筆記</p>
        </div>
    </div>
    <div class="vonSort">
        <div class="vonImg" @click="turnToVon"></div>
        <div class="vonText">
            <p>v-on筆記</p>
        </div>
    </div>
    <div class="vbindSort">
        <div class="vbindImg" @click="turnToVbind"></div>
        <div class="vbindText">
            <p>v-bind筆記</p>
        </div>
    </div>
    <div class="vifAndVshowSort">
        <div class="vifAndVshowImg" @click="turnToVifAndVshow"></div>
        <div class="vifAndVshowText">
            <p>v-if和v-show筆記</p>
        </div>
    </div>
    <div class="propsSort">
        <div class="propsImg" @click="turnToProps"></div>
        <div class="propsText">
            <p>props筆記</p>
        </div>
    </div>
    <div class="emitSort">
        <div class="emitImg" @click="turnToEmit"></div>
        <div class="emitText">
            <p>emit筆記</p>
        </div>
    </div>
    <div class="provideAndInjectSort">
        <div class="provideAndInjectImg" @click="turnToProvideAndInject"></div>
        <div class="provideAndInjectText">
            <p>provide和inject筆記</p>
        </div>
    </div>
    <div class="watchAndComputedSort">
        <div class="watchAndComputedImg" @click="turnToWatchAndComputed"></div>
        <div class="watchAndComputedText">
            <p>watch和computed筆記</p>
        </div>
    </div>
</div>


<div class="vtextAndVmodelPage" v-if="toVtextAndVmodel == true">

    <VtextAndVModel />
</div>
<div class="vforPage" v-if="toVfor == true">

    <Vfor />
</div>
<div class="vonPage" v-if="toVon == true">

    <Von />
</div>
<div class="vbindPage" v-if="toVbind == true">

    <Vbind />
</div>
<div class="vifAndVshowPage" v-if="toVifAndVshow == true">

    <VifAndVshow/>
</div>
<div class="propsPage" v-if="toProps == true">

    <props/>
</div>
<div class="emitPage" v-if="toEmit == true">

    <emit/>
</div>
<div class="provideAndInjectPage" v-if="toProvideAndInject == true">

    <provideAndInject/>
</div>
<div class="watchAndComputedPage" v-if="toWatchAndComputed == true">

    <WatchAndComputed/>
</div>

</template>



<style lang="scss" scoped>
.vueTheme{
    width:100%;
    height:100%;
    border:2px solid black;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:lightcoral;

    .vtextAndVmodelSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .vtextAndVmodelText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .vtextAndVmodelImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/v-logo-2.avif);
        cursor: pointer;
        }
    }

    .vforSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .vforText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .vforImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/u-logo.avif);
        cursor: pointer;
        }
    }
    .vonSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .vonText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .vonImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/e-logo.avif);
        cursor: pointer;
        }
    }
    .vbindSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .vbindText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .vbindImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/v-logo-2.avif);
        cursor: pointer;
        }
    }
    .vifAndVshowSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .vifAndVshowText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .vifAndVshowImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/u-logo.avif);
        cursor: pointer;
        }
    }
    .propsSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .propsText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .propsImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/e-logo.avif);
        cursor: pointer;
        }
    }
    .emitSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .emitText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .emitImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/v-logo-2.avif);
        cursor: pointer;
        }
    }
    .provideAndInjectSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .provideAndInjectText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .provideAndInjectImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/u-logo.avif);
        cursor: pointer;
        }
    }
    .watchAndComputedSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .watchAndComputedText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .watchAndComputedImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/images/e-logo.avif);
        cursor: pointer;
        }
    }


}

</style>