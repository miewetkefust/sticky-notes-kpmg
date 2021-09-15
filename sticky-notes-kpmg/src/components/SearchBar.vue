<template>
    <v-container>
        <v-row>
            <v-text-field
            hide-details
            placeholder="Quick Search"
            outlined/>
        
                <v-col>
                    <p>Types</p>
                    <v-btn-toggle mandatory>
                        <v-btn>All</v-btn>
                        <v-btn>Tasks</v-btn>
                        <v-btn>Notes</v-btn>
                    </v-btn-toggle>
                </v-col>
                
                <v-col>
                    <p>Priority</p>
                    <v-btn-toggle mandatory>
                        <v-btn>All</v-btn>
                        <v-btn>Low</v-btn>
                        <v-btn>Medium</v-btn>
                        <v-btn>High</v-btn>
                    </v-btn-toggle>
                </v-col>
                
                <v-col>
                    <p>Reporter</p>
                    <v-chip
                        color="primary"
                        close>
                        Bil Gates
                    </v-chip>
                </v-col>

                <v-col>
                    <p>Assignees</p>
                    <v-chip
                        color="primary"
                        close>
                        Bil Gates
                    </v-chip>
                </v-col>

                <v-col>
                    <p>Section</p>
                    <v-chip
                        color="primary"
                        close>
                        Bil Gates
                    </v-chip>
                </v-col>

                <v-col>
                    <p>Date</p>
                    <input type="date"/>
                </v-col>
        </v-row>
        <a href="http://localhost:8080/#/review-notes">Clear applied filters</a>
    </v-container>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>