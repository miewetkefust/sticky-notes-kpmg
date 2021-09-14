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
    data: function(){
        return {
            notes: []
        }
    },
    methods: {
        newNote: function() {
            //Todo
            console.log("CLicked")
        }
    },
    async created(){
            const response = await fetch('http://localhost:3000')
            const json = await response.json()
            this.notes = json
    }
}
</script>

<style scoped>
    #titleBar {
        display: flex;
        flex-direction: row;
    }
</style>