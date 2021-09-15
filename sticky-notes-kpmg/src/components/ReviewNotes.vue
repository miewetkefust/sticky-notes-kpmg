<template>
<div>
    <v-breadcrumbs
            divider=">"
            :items="breadcrumbs"> 
        </v-breadcrumbs>
    <div id="titleBar">
        <h1>Review notes</h1>
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            class=ml-5
            depressed
            v-bind="attrs"
            v-on="on"
            >
            New
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            New review note
            </v-card-title>

            <v-card-text>
                Here you can make a new review note
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
    <v-divider></v-divider>
    
    

    <search-bar @filterTypes="filterTypes"></search-bar>
    <notes-list :notes="this.filteredNotes"></notes-list>
</div>
    
</template>

<script>
import SearchBar from './SearchBar.vue'
import NotesList from './NotesList.vue'

export default {
    name: "ReviewNotes",
    data: function(){
        return {
            notes: [],
            filteredNotes: [],
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
            dialog: false
        }
    },
    components: {
        SearchBar,
        NotesList
    },
    methods: {
        filterTypes: function(str){
            console.log(str)
            if(str === "All"){
                this.filteredNotes = this.notes
            } else {
                this.filteredNotes = this.notes.filter(n => n.type === str)
            }
            
        }
    },
    async created(){
        const response = await fetch('http://localhost:3000')
        const json = await response.json()
        this.notes = json
        this.filteredNotes = this.notes
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