<template>
<div>
    <div id="titleBar">
        <h1>Review notes</h1>
        <v-app>
            <v-btn v-on:click="newNote"
                color="blue"
                margin="5px"
            >New</v-btn>
        </v-app>
    </div>
    
</div>
    
</template>

<script>
export default {
    name: "ReviewNotes",
    methods: {
        newNote: function() {
            //Todo
            console.log("CLicked")
        }
    }
}
</script>

<style scoped>
    #titleBar {
        display: flex;
        flex-direction: row;
    }
</style>