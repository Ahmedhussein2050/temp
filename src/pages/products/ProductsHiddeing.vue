<template>
    <div class="headding">
            <h2 class="headdings">
                <slot></slot>
            </h2>
        </div>
</template>
<style scoped>
h2{
    margin-top: 20px;
    color: #3D4584;
    width: 100%;
    text-align: center;
    position: relative;
}
.headdings:before{
    position: absolute;
    border-radius: 6px;
    content: "";
    left: 45%;
    right: 45%;
    bottom: -10px;
    height: 3px;
    background-color: #606691;
}
</style>