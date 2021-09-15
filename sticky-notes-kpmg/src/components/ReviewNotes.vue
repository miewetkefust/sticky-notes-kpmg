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
    
    <search-bar></search-bar>
    <notes-list></notes-list>
</div>
    
</template>

<script>
import SearchBar from './SearchBar.vue'
import NotesList from './NotesList.vue'

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
            ]
        }
    },
    components: {
        SearchBar,
        NotesList
    },
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
        align-items:center;
    }

    h1 {
        margin-left: 20px;
    }
</style>