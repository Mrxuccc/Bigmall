<template>
    <div name='tabbaritem'>
        <div class="item"  :style="colorChane"  @click="linkclick()">
            <slot name="itemicon"></slot>
            <slot name="itemtext"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tabbaritem',
        props:{
            link:String,
            activeShow:{
                type:String,
                default:'red'
            }

        },
        data() {
            return {
            };
        },
        computed:{
            colorChane(){
                return this.$route.path==this.link?{color:this.activeShow} :{};
            }

        }
        ,
        methods:{
            linkclick(){
                this.$router.replace(this.link);
            }
        }
    }
</script>

<style scoped>
    .item {
        float: left;
        width: 51px;
        margin: 10px 20px;
        text-align: center;
    }
</style>