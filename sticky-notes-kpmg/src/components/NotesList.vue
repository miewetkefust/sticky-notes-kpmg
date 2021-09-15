<template>
<div>
    <v-container 
        class="d-flex align-center"
        v-for="(note, index) in notes" :key="index">

        <v-row>
             <!--checkbox and title-->
             <v-col>
                 <v-checkbox 
                :label="note.title"/>
             </v-col>
            

            <!--type-->
            <v-col>
                <v-chip
                class="ma-2"
                color="secondary"
                label>
                {{note.type}}
                </v-chip>
            </v-col>
            
            <!--status-->
            <v-col>
                <v-chip
                :color="statusColor(note.status)"
                class="ma-2"
                label>
                {{note.status}}
                </v-chip>
            </v-col>
        </v-row>
       
    </v-container>
</div>
</template>

<script>
export default {
    name: "NotesList",
    data: function(){
        return {
            notes: []
        }
    },
    async created(){
        const response = await fetch('http://localhost:3000')
        const json = await response.json()
        this.notes = json
    },
    methods: {
        statusColor: function(status){
            switch(status.toLowerCase()){
                case "in progress":
                    return "primary"
                case "pending documentation":
                    return "orange"
                case "not started":
                    return "secondary"
                case "closed":
                    return "red"
                default:
                    return ""
            }
        }
    }
}
</script>