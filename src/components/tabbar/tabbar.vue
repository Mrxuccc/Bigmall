<template>
    <div name='tabbar'>
        <div class="tabbar-column">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabbar',
        data() {
            return {

            };
        },
        methods: {

        },
    };
</script>

<style scoped>
    .tabbar-column{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: 8%;
        width: 100%;
        background-color:#bebebe;
    }
</style>