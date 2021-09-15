<template>
<div>
    <v-breadcrumbs
            divider=">"
            :items="breadcrumbs"> 
        </v-breadcrumbs>
    <div id="titleBar">
        <h1>Review notes</h1>
        <v-btn 
            v-on:click="newNote"
            depressed
            color="primary"
            class="ml-5"
        >New</v-btn>
        
    </div>
    <v-divider>inset</v-divider>
        <p v-for="(note, index) in notes" :key="index"></p>
</div>
    
</template>

<script>
export default {
    name: "ReviewNotes",
    data: function(){
        return {
            breadcrumbs: [
                {
                    text: 'Engagements',
                    disabled: false,
                    href: 'http://localhost:8080/#/review-notes'
                },
                {
                    text: 'Microsoft 2021',
                    disabled: false,
                    href: 'http://localhost:8080/#/review-notes'
                },
                {
                    text: 'Review notes',
                    disbaled: false
                }
            ],
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

    h1 {
        margin-left: 20px;
    }
</style>